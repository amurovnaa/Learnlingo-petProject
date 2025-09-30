import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  get,
  query,
  ref,
  orderByKey,
  startAfter,
  limitToFirst,
} from "firebase/database";
import { db } from "../../firebase.js";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ lastKey = null, limit = 4 }, { rejectWithValue }) => {
    try {
      let teachersQuery = query(
        ref(db, "teachers"),
        orderByKey(),
        limitToFirst(limit)
      );

      if (lastKey) {
        teachersQuery = query(
          ref(db, "teachers"),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(limit)
        );
        console.log("Paginating after key:", lastKey);
      } else {
        console.log("Fetching initial teachers");
      }

      const snapshot = await get(teachersQuery);

      if (!snapshot.exists()) {
        console.log("No teachers found.");
        return [];
      }

      const data = Object.entries(snapshot.val()).map(([id, teacher]) => ({
        id,
        ...teacher,
      }));

      console.log("Fetched teachers:", data);
      return data;
    } catch (err) {
      console.error("Error fetching teachers:", err.message);
      return rejectWithValue(err.message);
    }
  }
);
