import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";
import asignatures from '../data/listAsignatures';
import { addTeacher } from '../features/ListTeachers';

export const CreateTeacher = () => {
  const [teacher, setTeacher] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    materias: 0,
    identificacion: '',    
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleChange = e => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();    
    dispatch(addTeacher({
      ...teacher,
      id: uuid()
    }));
    navigate('/teachers');
    return;
  }

  const handleCheckbox = e => {
    let newTeacher = teacher;    
    if(e.target.value) {
      newTeacher.materias = Number(e.target.value);
      setTeacher(newTeacher);
      console.log(newTeacher);
    }
  }

  return (
    <div className="bg-white border h-full p-5 shadow-xl rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Crear nuevo/a profesor/a</h1>
        <p className="text-zinc-400">En este formulario puedes crear los profesores de la institución</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-10">  
        <input 
          required
          name="nombre"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Nombre"          
          onChange={handleChange}
        />
        <input 
          required
          name="apellido"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Apellido" 
          onChange={handleChange}         
        />
        <input 
          required
          name="edad"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="Edad"   
          onChange={handleChange}                 
        />
        <input 
          required
          name="identificacion"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="No. identificación"     
          onChange={handleChange}     
        />  
        <div className="flex flex-col gap-2">
          <h1 className="text-center md:text-left text-lg text-zinc-500">Asignar materias</h1>      
          <div className="flex flex-wrap gap-y-3 items-center md:gap-5 border shadow-lg w-full md:w-max p-3 rounded-lg">
            <select  
              required            
              onChange={handleCheckbox}
              name="materias">
                <option value="">-- Seleccionar materia --</option>
              {asignatures && asignatures.map(asignature => (
                <option
                  key={asignature.id}
                  name="materias"                  
                  value={asignature.id}
                >
                  {asignature.nombre}
                </option>                             
              ))}
            </select>
          </div> 
        </div>     
        <input 
          className="bg-blue-500 w-full md:w-max rounded-md  py-2 px-3 text-white md:rounded-full shadow-2xl"
          type="submit" 
          value="Crear profesor"
        />          
        <Link
          className="block text-zinc-500"
          to={'/teachers'}
        >
          Volver
        </Link>
      </form>
    </div>
  );
}