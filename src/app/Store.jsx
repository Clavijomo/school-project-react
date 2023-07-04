import { configureStore, combineReducers } from "@reduxjs/toolkit";
import studentsReducer  from "../features/ListStudents";
import teachersReducer from "../features/ListTeachers";

const reducer = combineReducers({
  students: studentsReducer,
  teachers: teachersReducer
})

export const store = configureStore({
  reducer
});