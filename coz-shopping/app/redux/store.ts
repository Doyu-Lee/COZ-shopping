import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "./productApi";
import bookMarkedProducts from "./bookmarkReducer"
import toastReducer from "./ToastReducer"

export const store = configureStore({
  reducer: {
    bookMarkedProducts,
    toastReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
