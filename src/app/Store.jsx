import { configureStore, combineReducers } from "@reduxjs/toolkit";
import studentsReducer  from "../features/ListStudents";
import teachersReducer from "../features/ListTeachers";
import InfoStudent from "../features/InfoStudent";
import InfoTeacher from "../features/InfoTeacher";

const reducer = combineReducers({
  students: studentsReducer,
  teachers: teachersReducer,
  studentInfo: InfoStudent,
  teacherInfo: InfoTeacher,
})

export const store = configureStore({
  reducer
});