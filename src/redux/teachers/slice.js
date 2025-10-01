import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations.js";

const initialState = {
  items: [],
  page: 0,
  hasMore: true,
  isLoading: false,
  error: null,
};
const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    resetTeachers: (state) => {
      state.items = [];
      state.page = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length === 0) {
          state.hasMore = false;
        } else {
          state.items.push(...action.payload);
          state.page += 1;
        }
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetTeachers } = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
