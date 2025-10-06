import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./operations.js";

const initialState = {
  user: JSON.parse(localStorage.getItem("profile")) || {
    email: null,
    displayName: null,
    uid: null,
  },
  isLoggedIn: !!localStorage.getItem("profile"),
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          email: action.payload.email,
          displayName: action.payload.displayName,
          uid: action.payload.uid,
        };
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { email: null, displayName: null, uid: null };
        state.isLoggedIn = false;
        state.error = null;
      })
      // Refresh user
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload
          ? {
              email: action.payload.email,
              displayName: action.payload.displayName,
              uid: action.payload.uid,
            }
          : { email: null, displayName: null, uid: null };
        state.isLoggedIn = !!action.payload;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
