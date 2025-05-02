"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
