import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3030/quiz";

export const getAllQuizes = createAsyncThunk(
  "quiz/getAllQuizes",
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
  quizes: null,
  isLoading: false,
  serverError: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllQuizes.pending]: (state, action) => {
      state.isLoading = true;
      state.serverError = null;
    },
    [getAllQuizes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.serverError = null;
      state.quizes = action.payload;
    },
    [getAllQuizes.rejected]: (state, action) => {
      state.isLoading = false;
      state.serverError = action.payload;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizAction = quizSlice.actions;
