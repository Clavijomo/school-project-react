import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {v4 as uuid} from "uuid";
import asignatures from '../data/listAsignatures';
import { addTeacher, editTeacher } from '../features/ListTeachers';
import { searchArray } from '../helpers/SearchValueArray';

export const CreateTeacher = () => {
  const params = useParams();
  const listTeachers = useSelector(state => state.teachers);
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

  useEffect(() => {
    const userEdit = searchArray(params.id, listTeachers);
    setTeacher(userEdit);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();    
    if(params.id) {
      dispatch(editTeacher(teacher));
    } else {
      dispatch(addTeacher({
        ...teacher,
        id: uuid()
      }));
    }    
    navigate('/teachers');
    return;
  }

  const handleSelect = e => {     
    if(e.target.value) {
      setTeacher({
        ...teacher,
        materias: Number(e.target.value)
      })      
    }
  }

  return (
    <div className="bg-white border h-full p-5 shadow-xl rounded-2xl">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{params.id ? 'Editar profesor/a' : 'Crear nuevo/a profesor/a'}</h1>
        <p className="text-zinc-400">En este formulario puedes {params.id ? 'editar' : 'crear'} los profesores de la institución</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-10">  
        <input 
          required
          name="nombre"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Nombre"          
          onChange={handleChange}
          value={teacher.nombre}
        />
        <input 
          required
          name="apellido"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Apellido" 
          onChange={handleChange}  
          value={teacher.apellido}       
        />
        <input 
          required
          name="edad"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="Edad"   
          onChange={handleChange}  
          value={teacher.edad}               
        />
        <input 
          required
          name="identificacion"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="No. identificación"     
          onChange={handleChange}
          value={teacher.identificacion}   
        />  
        <div className="flex flex-col gap-2">
          <h1 className="text-center md:text-left text-lg text-zinc-500">Asignar materias</h1>      
          <div className="flex flex-wrap gap-y-3 items-center md:gap-5 border shadow-lg w-full md:w-max p-3 rounded-lg">
            {params.id && 
              <select  
                required            
                onChange={handleSelect}
                value={teacher.materias > 0 && teacher.materias}
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
            }            
          </div> 
        </div>     
        <input 
          className="bg-blue-500 w-full md:w-max rounded-md  py-2 px-3 text-white md:rounded-full shadow-2xl"
          type="submit" 
          value={params.id ? 'Guardar cambios' : 'Crear profesor'}
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