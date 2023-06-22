import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import { userSlice } from "./users/user-reducer";
import storage from "redux-persist/lib/storage";

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["data", "filter"],
};

export const store = configureStore({
  reducer: combineReducers({
    users: persistReducer(usersPersistConfig, userSlice.reducer),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
