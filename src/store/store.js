import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { feedBackReducer } from './feedBackSlise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'feedBacks',
  storage,
};

const reducers = combineReducers({ feedBack: feedBackReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
