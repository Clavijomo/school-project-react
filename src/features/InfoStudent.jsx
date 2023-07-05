import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

const infoStudentSlice = createSlice({
  name: 'infoStudent',
  initialState,
  reducers: {
    studentInfo: (state, action) => {      
      const {nombre, apellido, id, telefono, direccion, edad, identificacion, materias} = action.payload;
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

export const {studentInfo} = infoStudentSlice.actions;
export default infoStudentSlice.reducer;