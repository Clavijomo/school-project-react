import { configureStore } from "@reduxjs/toolkit";
import studentsReducer  from "../features/StudentsSlice/ListStudents";

export const store = configureStore({
  reducer: {
    students: studentsReducer
  }
});