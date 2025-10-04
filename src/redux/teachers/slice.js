import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

const initialState = {
  items: [],
  page: 0,
  isLoading: false,
  hasMore: true,
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
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg.lastIndex === 0) {
          state.items = action.payload.data;
        } else {
          state.items.push(...action.payload.data);
        }

        state.hasMore = state.items.length < action.payload.total;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load teachers";
      });
  },
});

export const { resetTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
