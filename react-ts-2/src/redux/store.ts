import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./features/tours/tourSlice";

export const store = configureStore({
  reducer: {
    tour: tourSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
