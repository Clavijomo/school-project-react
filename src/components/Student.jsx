import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import asignatures from '../data/listAsignatures';
import {deleteStudent} from "../features/ListStudents";

const Student = ({student}) => {  
  const { nombre, apellido, edad, direccion, materias, id} = student;    
  const dispatch = useDispatch();

  const searchAsignatures = () => {
    let infoAsignature = 'Sin materia';
    materias.map(materia => {            
      infoAsignature = asignatures.filter(item => item.id === materia)[0].nombre;            
    });
    return infoAsignature;
  }

  const handleDelete = id => {
    dispatch(deleteStudent(id));
  }
  
  return (
    <div className="bg-zinc-200 border py-1 px-1 rounded-full flex justify-between items-center">      
      <div className="flex items-center gap-2">
        <img className="w-10 border shadow-lg rounded-full" src="https://cdn-icons-png.flaticon.com/512/509/509720.png" alt=""/>
        <h1 className="text-sm">{nombre} {apellido}</h1>
      </div>      
      <div>
        <div className="flex gap-2">
          <Link 
            to={`/edit-student/${id}`}
            className="bg-blue-500 text-white rounded-full flex px-2 py-2 items-center justify-center text-sm">
              Editar
          </Link>
          <button 
            onClick={() => handleDelete(id)}
            className="bg-red-500 text-white rounded-full flex px-2 py-2 items-center justify-center text-sm">
              Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Student;