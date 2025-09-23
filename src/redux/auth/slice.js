import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "./operations.js";

const initialState = {
  user: {
    email: null,
    displayName: null,
    uid: null,
  },
  isLoggedIn: false,
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
        console.log("Register fulfilled payload:", action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("Register rejected payload:", action.payload);
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Login fulfilled payload:", action.payload);
        state.user = {
          email: action.payload.email,
          displayName: action.payload.displayName,
          uid: action.payload.uid,
        };
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Login rejected payload:", action.payload);
        state.error = action.payload;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        console.log("Logout fulfilled");
        state.user = { email: null, displayName: null, uid: null };
        state.isLoggedIn = false;
        state.error = null;
      })
      // Refresh user
      .addCase(getCurrentUser.pending, (state) => {
        console.log("Refreshing user...");
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log("Refresh fulfilled payload:", action.payload);
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
        console.log("Refresh rejected payload:", action.payload);
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
