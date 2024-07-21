import apiClient from './apiClient';
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from './endpoints';

export const login = (credentials) => apiClient.post(LOGIN_ENDPOINT, credentials);
export const register = (userData) => apiClient.post(REGISTER_ENDPOINT, userData);
