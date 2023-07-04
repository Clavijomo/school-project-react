import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteTeacher} from "../features/ListTeachers";

const Teacher = ({teacher}) => {
  const { nombre, apellido, id } = teacher;
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTeacher(id));
  }
  return (
    <div className="bg-zinc-200 p-0.5 rounded-full shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/194/194935.png" alt=""/>     
        <div>
          <h1 className="text-sm">{nombre} {apellido}</h1>      
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white rounded-full flex px-2 py-2 items-center justify-center text-sm">Editar</button>
        <button 
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-white rounded-full flex px-2 py-2 items-center justify-center text-sm">
            Eliminar
        </button>
      </div>
    </div>
  )
}

export default Teacher;