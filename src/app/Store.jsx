import { configureStore, combineReducers } from "@reduxjs/toolkit";
import studentsReducer  from "../features/ListStudents";
import teachersReducer from "../features/ListTeachers";
import InfoStudent from "../features/InfoStudent"

const reducer = combineReducers({
  students: studentsReducer,
  teachers: teachersReducer,
  studentInfo: InfoStudent,
})

export const store = configureStore({
  reducer
});