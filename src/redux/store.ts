import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { filterReduser } from "./filter/slice";
import { contactsReduser } from "./contacts/slice";
import { authReduser } from "./auth/slice";

const rootReducer = combineReducers({
  auth: authReduser,
  items: contactsReduser,
  name: filterReduser,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

