import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      };

      toast.success("Welcome! You’re registered! 🎉");
      return user;
    } catch (error) {
      toast.error("Registration failed!");
      return rejectWithValue(error.message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("profile", JSON.stringify(userCredential.user));
      toast.success("Login successful! 👋");
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      };
    } catch (error) {
      toast.error("Login failed. ");
      return rejectWithValue(error.message);
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem("profile");
      toast.success("You have logged out. See you soon! 👋");
      return true;
    } catch (error) {
      toast.error("Logout failed. Try again.");
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            unsubscribe();
            if (user) {
              resolve({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
              });
            } else {
              resolve(null);
            }
          },
          (error) => reject(rejectWithValue(error.message))
        );
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
