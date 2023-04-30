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

export const current = createAsyncThunk(
  'auth/current',
  async(_, {rejectWithValue, getState}) => {
    try {
      const {auth} = getState();
      const result = await api.getCurrent(auth.token);
      console.log(result);
      
      return result;
    } catch ({response}) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, {getState}) => {
      const {auth} = getState();
      if (!auth.token) {
        return false;
      }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async(_, {rejectWithValue})=>{
    try {
      const data = await api.logout()
      return data;
    } catch ({response}) {
      return rejectWithValue(response)
    }
  }
)