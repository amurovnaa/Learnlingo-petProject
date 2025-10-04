import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../firebase.js";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ lastIndex = 0, limit = 4, filters = {} }, { rejectWithValue }) => {
    try {
      const snapshot = await get(ref(db, "teachers"));
      if (!snapshot.exists()) return [];

      let allTeachers = Object.entries(snapshot.val()).map(([id, t]) => ({
        id,
        ...t,
      }));

      const { language = [], level = [], price = null } = filters;

      let filtered = allTeachers.filter((t) => {
        const langMatch =
          language.length === 0 ||
          t.languages?.some((lang) => language.includes(lang));

        const levelMatch =
          level.length === 0 || t.levels?.some((lvl) => level.includes(lvl));

        const priceMatch = !price || t.price_per_hour <= price;

        return langMatch && levelMatch && priceMatch;
      });

      const paginated = filtered.slice(lastIndex, lastIndex + limit);

      return { data: paginated, total: filtered.length };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
