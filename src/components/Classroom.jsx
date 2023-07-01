import React, {useState} from 'react'
import {useSelector} from "react-redux"

const Classroom = () => {
  const [size] = useState(screen.width);
  const studentState = useSelector(state => state.students);
  console.log(studentState);

  return (
    <div className="bg-zinc-100 rounded-2xl p-5 pr-5 pl-5 w-full pb-0 h-full">
      <div className="flex items-center justify-between mb-5">
        <h1 className="md:block md:text-lg">Estudiantes</h1>
        <p style={{ display: size < 500 ? "none" : "block" }}>10 estudiante(s)</p>      
        <p>Acciones</p>
      </div>
      <div className="flex flex-col justify-betweeen h-80">
        <div className="md:h-4/5 overflow-y-auto flex-col flex gap-4 border-b-2">
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
            <div>
              <h1 className="font-semibold text-md">Nombre profesor</h1>
              <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
            </div>
          </div>
        </div>
        <div className="h-1/5 flex pr-3 pl-3 pb-0 items-center gap-2 w-full rounded-2xl">          
          <button className="text-blue-400 text-start flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
            </svg>
            Nuevo estudiante
          </button>
        </div>
      </div>
    </div>
  )
}

export default Classroom;