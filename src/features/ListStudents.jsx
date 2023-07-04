import { createSlice } from "@reduxjs/toolkit";
import Students from "../data/listStudents";
import Swal from "sweetalert2";

const initialState = Students;

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {      
      state.push(action.payload);
    },
    deleteStudent: (state, action) => {
      const studentFound = state.find(student => student.id === action.payload);
      if(studentFound) {        
        const confirm = window.confirm('Estás seguro/a que quieres eliminar a este estudiante?');        
        if(confirm) {
          state.splice(state.indexOf(studentFound), 1);
        }
      }
    }
  }
});

export const {addStudent, deleteStudent} = studentSlice.actions;
export default studentSlice.reducer;