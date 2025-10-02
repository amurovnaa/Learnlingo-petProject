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
import toast from "react-hot-toast";

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

      toast.success("Teachers loaded ✅");
      return data;
    } catch (err) {
      toast.error("Failed to load teachers ❌");
      return rejectWithValue(err.message);
    }
  }
);
