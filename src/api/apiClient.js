import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import { API_BASE_URL } from '@env';

let store; // Reference to Redux store

export const injectStore = _store => {
  store = _store;
};

let isRefreshing = false;
let refreshSubscribers = [];

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRrefreshed = (token) => {
  refreshSubscribers.map((callback) => callback(token));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

apiClient.interceptors.request.use(
  async config => {
    const token = await Keychain.getGenericPassword();
    if (token) {
      config.headers.Authorization = `Bearer ${token.password}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = await AsyncStorage.getItem('refreshToken');
      return new Promise((resolve, reject) => {
        apiClient.post('/auth/refresh-token', { token: refreshToken })
          .then(({ data }) => {
            store.dispatch(setTokens({ token: data.token, refreshToken: data.refreshToken }));
            Keychain.setGenericPassword('authToken', data.token);
            AsyncStorage.setItem('refreshToken', data.refreshToken);
            apiClient.defaults.headers.Authorization = `Bearer ${data.token}`;
            originalRequest.headers.Authorization = `Bearer ${data.token}`;
            onRrefreshed(data.token);
            resolve(apiClient(originalRequest));
          })
          .catch((err) => {
            store.dispatch(logout());
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
            refreshSubscribers = [];
          });
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
