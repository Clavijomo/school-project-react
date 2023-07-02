import { createSlice } from "@reduxjs/toolkit";
import Students from "../data/listStudents";

const initialState = Students;

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {      
      state.push(action.payload);
    }
  }
});

export const {addStudent} = studentSlice.actions;
export default studentSlice.reducer;