import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice'; 

const rootReducer = combineReducers({
    contacts: contactsSlice,
    filter: filterSlice,
})

const persistConfig = {
    key: 'contacts',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)  

export default persistedReducer;