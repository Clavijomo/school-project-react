import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from '../features/ListStudents';
import {v4 as uuid} from "uuid";
import asignatures from '../data/listAsignatures';
import {searchArray} from '../helpers/SearchValueArray';
import NumDecimal from '../helpers/numDecimal';

const CreateStudent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const listStudents = useSelector(state => state.students);

  const [student, setStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    identificacion: '',
    telefono: '',
    direccion: '',
    materias: [],
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (params.id) {      
      const userEdit = searchArray(params.id, listStudents);      
      setStudent(userEdit);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();     
      if(params.id) {
        dispatch(editStudent(student));
      } else {
        // Agregar validación del array de materias del estudiante    
        dispatch(addStudent({
          ...student,
          id: uuid(),
        }));              
      }    
      navigate('/');
      return;
  }

  const handleCheckbox = e => {  
    let newStudent = student;
    if(!params.id) {
      if(e.target.checked) {   
        let asignatura = asignatures.filter(item => item.id === Number(e.target.value))[0]      
        asignatura.calificacion = NumDecimal(0);
        newStudent.materias.push(asignatura);
        setStudent(newStudent); 
      } else {
        const filterId = newStudent.materias.filter(item => item.id !== Number(e.target.value));      
        newStudent.materias = filterId;
        setStudent(newStudent);
      }
    } else {
      if(e.target.checked) {
        let asignatura = asignatures.filter(item => item.id === Number(e.target.value))[0]
        asignatura.calificacion = NumDecimal(0);
        setStudent({...student, materias: [...student.materias, asignatura]})
        console.log(student)
      } else {
        const filterId = student.materias.filter(item => item.id !== Number(e.target.value));   
        setStudent({...student, materias: filterId});
      }
    } 
  }

  const asignatureChecked = id => {
    let response = false;
    student.materias.map(item => {
      if(item.id === id) {
        response = true;
      }
    });
    return response;
  }
  
  return (
    <div className="bg-white border h-full p-5 shadow-xl rounded-2xl">
      <div className="space-y-2">        
        <h1 className="text-2xl font-semibold">{params.id ? 'Editar estudiante' : 'Crear nuevo estudiante'}</h1>
        <p className="text-zinc-400">En este formulario puedes {params.id ? 'editar' : 'crear'} los estudiantes</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-10">  
        <input 
          required
          name="nombre"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Nombre"
          onChange={handleChange}
          value={student.nombre}
        />
        <input 
          required
          name="apellido"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Apellido"
          onChange={handleChange}
          value={student.apellido}
        />
        <input 
          required
          name="edad"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="Edad"
          onChange={handleChange}
          value={student.edad}
        />
        <input 
          required
          name="identificacion"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="No. identificación"
          onChange={handleChange}
          value={student.identificacion}
        />
        <input 
          required
          name="telefono"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="number" 
          placeholder="Télefono"
          onChange={handleChange}
          value={student.telefono}
        />
        <input 
          required
          name="direccion"
          className="bg-transparent w-full block md:w-max border-black border-b pb-1" 
          type="text" 
          placeholder="Dirección"
          onChange={handleChange}
          value={student.direccion}
        />
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-zinc-500 text-xl">Asignar materias al estudiante</p>
          </div>
          <div className="flex flex-wrap gap-y-3 items-center md:gap-5 border w-full md:w-max p-3 shadow-md rounded-lg font-semibold">       
            {asignatures && asignatures.map( asignature => (
              <label className="flex mr-3 gap-2" key={asignature.id}>
                {!params.id ? 
                  <>
                    <input                                   
                      type="checkbox"                   
                      value={asignature.id}
                      onChange={handleCheckbox}                 
                    />
                    {asignature.nombre}
                  </>
                  : 
                  <>
                    <input  
                      checked={asignatureChecked(asignature.id)}
                      type="checkbox"                   
                      value={asignature.id}
                      onChange={handleCheckbox}                 
                    />
                    {asignature.nombre}
                  </>
                }                
              </label>
            ))}
          </div>
        </div>      
        <input 
          className="bg-blue-500 w-full md:w-max rounded-md  py-2 px-3 text-white md:rounded-full shadow-2xl"
          type="submit" 
          value={params.id ? 'Guardar cambios' : 'Crear estudiante'}
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