import React from 'react'
import NumDecimal from '../helpers/numDecimal';

const Meetings = ({infoStudent}) => {
  const {materias} = infoStudent;

  return (
    <div className="bg-zinc-100 rounded-2xl p-0 md:p-8 h-full">
      { materias && Object.keys(materias).length ?
        <table className="table-auto w-full h-full">
          <thead>
            <tr>
              <th className="text-center bg-zinc-200 p-5 rounded-tl-xl">Cod</th>
              <th className="text-center bg-zinc-200 p-5">Materia</th>
              <th className="text-center bg-zinc-200 p-5 rounded-tr-xl">Calificación</th>
            </tr>
          </thead>
          <tbody>                    
            {materias && materias.map((materia, index) => (
              <tr key={index} className="text-center">
                <td className="text-md md:text-lg py-1 md:py-0">{materia.id}</td>
                <td className="text-md md:text-lg py-1 md:py-0">{materia.nombre}</td>                  
                <td className={materia.calificacion >= 3.0 ? `text-lg text-green-500` : 'text-red-500'}>{NumDecimal(materia.calificacion)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        : 
        <div className="h-96 md:h-full flex items-center justify-center flex-col gap-3">
          <p className="font-semibold text-center">No hay calificaciones</p>
          <h1 className="text-md md:text-lg text-zinc-400 text-center">Haz clic en Ver detalle del estudiante para ver su listado de calificaciones</h1>
        </div>
      }
    </div>
  )
}

export default Meetings;