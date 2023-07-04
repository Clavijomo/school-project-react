import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addStudent } from '../features/ListStudents';
import {v4 as uuid} from "uuid";
import asignatures from '../data/listAsignatures';

const CreateStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    identificacion: '',
    materias: [],
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();    
    // Agregar validación del array de materias del estudiante    
    if(Array.isArray(student.materias) && student.materias.length) {
      dispatch(addStudent({
        ...student,
        id: uuid(),
      }));
      navigate('/');
      return;
    } 
    alert("Debes seleccionar mínimo una materia");
  }

  const handleCheckbox = e => {
    let newStudent = student;
    if(e.target.checked) {
      newStudent.materias.push(Number(e.target.name));
      setStudent(newStudent); 
    } else {
      const filterId = newStudent.materias.filter(item => item !== Number(e.target.name));      
      newStudent.materias = filterId;
      setStudent(newStudent);
    }
  }
  
  return (
    <div className="bg-white border h-full p-5 shadow-xl rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Crear nuevo estudiante</h1>
        <p className="text-zinc-400">En este formulario puedes crear los estudiantes</p>
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
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-zinc-500 text-xl">Asignar materias al estudiante</p>
          </div>
          <div className="flex flex-wrap gap-y-3 items-center md:gap-5 border w-full md:w-max p-3 shadow-md rounded-lg font-semibold">       
            {asignatures && asignatures.map( asignature => (
              <label className="flex mr-3 gap-2" key={asignature.id}>
                <input 
                  type="checkbox"                   
                  name={asignature.id}
                  onChange={handleCheckbox}                 
                />
                {asignature.nombre}
              </label>
            ))}
          </div>
        </div>      
        <input 
          className="bg-blue-500 w-full md:w-max rounded-md  py-2 px-3 text-white md:rounded-full shadow-2xl"
          type="submit" 
          value="Crear estudiante"
        />        
        <Link
          className="block text-zinc-500"
          to={'/'}
        >
          Volver
        </Link>
      </form>
    </div>
  )
}

export default CreateStudent;