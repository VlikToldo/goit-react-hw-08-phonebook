import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice'; 
import authSlice from './auth/auth-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
  }

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
  auth: persistedAuthReducer
})

export default rootReducer;