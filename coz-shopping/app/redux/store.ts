import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "./productApi";
import bookMarkedProducts from "./bookmarkReducer"
// import alarmReducer from "./alarm"

// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    bookMarkedProducts,
    // alarmReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
