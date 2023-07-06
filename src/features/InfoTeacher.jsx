import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const infoTeacherSlice = createSlice({
  name: 'infoTeacher',
  initialState,
  reducers: {
    teacherInfo: (state, action) => {
      const { nombre, apellido, id, telefono, direccion, edad, identificacion, materias } = action.payload;
      state.nombre = nombre;
      state.apellido = apellido;
      state.id = id;
      state.telefono = telefono;
      state.direccion = direccion;
      state.edad = edad;
      state.identificacion = identificacion;      
      state.materias = materias;      
    }
  }
});

export const {teacherInfo} = infoTeacherSlice.actions;
export default infoTeacherSlice.reducer;