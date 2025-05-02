"use client";
import userReducer from "../reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer: any = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
