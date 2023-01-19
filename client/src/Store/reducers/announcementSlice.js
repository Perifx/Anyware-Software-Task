import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://anyware-software-task-api.vercel.app/announcement";

export const getAllAnnouncements = createAsyncThunk(
  "announcement/getAllAnnouncements",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  announcements: null,
  isLoading: false,
  serverError: null,
};

const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllAnnouncements.pending]: (state, action) => {
      state.isLoading = true;
      state.serverError = null;
    },
    [getAllAnnouncements.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.serverError = null;
      state.announcements = action.payload;
    },
    [getAllAnnouncements.rejected]: (state, action) => {
      state.isLoading = false;
      state.serverError = action.payload;
    },
  },
});

export const announcementReducer = announcementSlice.reducer;
export const announcementActions = announcementSlice.actions;
