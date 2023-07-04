import { createSlice } from "@reduxjs/toolkit";
import teachers from "../data/listTeachers";

const initialState = teachers;

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const {addTeacher} = teacherSlice.actions;
export default teacherSlice.reducer;