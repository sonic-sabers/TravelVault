import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import { injectStore } from '../api/apiClient';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

injectStore(store); // Inject store into apiClient

export default store;
