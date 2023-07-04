import { createSlice } from "@reduxjs/toolkit";
import teachers from "../data/listTeachers";

const initialState = teachers;

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      const teacherFound = state.find(teacher => teacher.id === action.payload);
      if(teacherFound) {
        const confirm = window.confirm('Estás seguro/a que quieres eliminar a este profesor?')
        if(confirm) {
          state.splice(state.indexOf(teacherFound), 1);
        }
      }
    }
  }
});

export const {addTeacher, deleteTeacher} = teacherSlice.actions;
export default teacherSlice.reducer;