import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/services/auth-api';

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, {rejectWithValue}) => {
      try {
        const result = await api.signup(data);
        return result;
      } catch ({ response }) {
        return rejectWithValue(response.data.message);
      }
    }
  );

export const login = createAsyncThunk(
  'auth/login',
  async (data, {rejectWithValue}) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({response}) {
      return rejectWithValue(response.data.message);
    }
  }
);