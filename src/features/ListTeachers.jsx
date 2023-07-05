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
    },
    editTeacher: (state, action) => {
      const {id, nombre, apellido, direccion, edad, telefono, materias} = action.payload;
      const foundTeacher = state.find(teacher => teacher.id === id);
      if(foundTeacher) {
        foundTeacher.nombre = nombre;
        foundTeacher.apellido = apellido;
        foundTeacher.direccion = direccion;
        foundTeacher.edad = edad;
        foundTeacher.telefono = telefono;
        foundTeacher.materias = materias;
      }
    }
  }
});

export const {addTeacher, deleteTeacher, editTeacher} = teacherSlice.actions;
export default teacherSlice.reducer;