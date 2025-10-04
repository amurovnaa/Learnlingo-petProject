import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: [],
  level: [],
  price: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
    },
    setLevel: (state, action) => {
      state.level = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetFilters: (state) => {
      state.language = [];
      state.level = [];
      state.price = null;
    },
  },
});

export const { setLanguage, setLevel, setPrice, resetFilters } =
  filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
