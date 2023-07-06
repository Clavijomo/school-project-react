import React, { useEffect } from 'react'
import NumDecimal from '../helpers/numDecimal';

const CalificationTeachers = ({students, infoTeacher}) => {
  const {materias} = infoTeacher;
  let studentsAsignature = [];
  if(materias && students){
    students.map(stud =>{
      stud.materias.map(materia => {
        if(materia.id == materias){
          studentsAsignature.push(stud)
        }
      })
    })
  }

  return (
    <div className="w-full h-full bg-zinc-100 rounded-2xl">      
      
      {studentsAsignature && studentsAsignature.length ?
        <table className="table-auto w-full h-full">
          <thead>
            <th className="text-center bg-zinc-200 p-5 rounded-tl-xl">ID estudiante</th>
            <th className="text-center bg-zinc-200 p-5">Materia</th>
            <th className="text-center bg-zinc-200 p-5 rounded-tr-xl">Calificación</th>
          </thead>
          {studentsAsignature.map((item, i) =>(          
            <tbody key={i}>
              {item.materias.map((materia, index) => (
                materia.id === materias && 
                  <tr key={index} className="text-center">
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{NumDecimal(materia.calificacion)}</td>
                  </tr>
              ))}
            </tbody>
          ))}
        </table>     
        :
        <div className="h-96 md:h-full w-full flex items-center justify-center flex-col gap-3">
          <p className="font-semibold text-center">No hay estudiantes inscritos a esta materia</p>
          <h1 className="text-md md:text-lg text-zinc-400 text-center">Prueba seleccionando otro estudiante</h1>
        </div>
      }       
    </div>
  )
}

export default CalificationTeachers;