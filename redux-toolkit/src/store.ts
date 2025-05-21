import { configureStore } from "@reduxjs/toolkit";
import bookmark from "./redux/features/bookmark";

export const store = configureStore({
  reducer: {
    bookmark,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
