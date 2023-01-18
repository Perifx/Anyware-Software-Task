import { configureStore } from "@reduxjs/toolkit";
import { announcementReducer } from "./reducers/announcementSlice";
import { quizReducer } from "./reducers/quizSlice";

export const store = configureStore({
  reducer: {
    announcement: announcementReducer,
    quiz: quizReducer,
  },
});
