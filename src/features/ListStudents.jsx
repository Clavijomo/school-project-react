import { createSlice } from "@reduxjs/toolkit";
import Students from "../data/listStudents";

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
    },
    editStudent: (state, action) => {
      const {id, nombre, apellido, direccion, edad, telefono, materias } = action.payload;
      const foundStudent = state.find(student => student.id === id);      
      if(foundStudent) {
        foundStudent.nombre = nombre;
        foundStudent.apellido = apellido;
        foundStudent.direccion = direccion;
        foundStudent.edad = edad;
        foundStudent.telefono = telefono;
        foundStudent.materias = materias;
      }
    },
  }
});

export const {addStudent, deleteStudent, editStudent} = studentSlice.actions;
export default studentSlice.reducer;