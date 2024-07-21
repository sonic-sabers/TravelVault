import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../../api/authAPI';
import handleError from '../../utils/errorHandler';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      return { 
        user: response.data.user, 
        token: response.data.token, 
        refreshToken: response.data.refreshToken 
      };
    } catch (error) {
      return rejectWithValue({ error: handleError(error) });
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      return { 
        user: response.data.user, 
        token: response.data.token, 
        refreshToken: response.data.refreshToken 
      };
    } catch (error) {
      return rejectWithValue({ error: handleError(error) });
    }
  }
);
