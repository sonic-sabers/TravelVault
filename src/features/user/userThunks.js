import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, getUserList } from '../../api/userAPI';
import handleError from '../../utils/errorHandler';

export const fetchUserProfileThunk = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserProfile();
      return { profile: response.data.profile };
    } catch (error) {
      return rejectWithValue({ error: handleError(error) });
    }
  }
);

export const fetchUserListThunk = createAsyncThunk(
  'user/fetchList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserList();
      return { users: response.data.users };
    } catch (error) {
      return rejectWithValue({ error: handleError(error) });
    }
  }
);
