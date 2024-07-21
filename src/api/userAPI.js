import apiClient from './apiClient';
import { USER_PROFILE_ENDPOINT, USER_LIST_ENDPOINT } from './endpoints';

export const getUserProfile = () => apiClient.get(USER_PROFILE_ENDPOINT);
export const getUserList = () => apiClient.get(USER_LIST_ENDPOINT);
