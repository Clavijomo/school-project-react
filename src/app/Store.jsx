import { configureStore } from "@reduxjs/toolkit";
import studentsReducer  from "../features/ListStudents";

export const store = configureStore({
  reducer: {students: studentsReducer},
});