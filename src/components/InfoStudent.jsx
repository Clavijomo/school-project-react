import React, {useState} from 'react';

const InfoStudent = () => {
  const [size, setSize] = useState(screen.width);
  return (
    <div className="bg-zinc-100 rounded-2xl h-full shadow-xl">
      <div className="bg-blue-500 rounded-t-2xl p-10">
        <div className="px-5 w-full flex-col flex items-center text-center justify-center gap-3">
          <div>
            <img className="w-32 rounded-full shadow-2xl bg-white" src="https://cdn-icons-png.flaticon.com/512/509/509720.png" alt=""/>
          </div>
          <div>
            <div className="space-y-2">
              <h1 className="font-semibold md:text-xl text-white">Nombre del estudiante</h1>
              <p className="text-zinc-200 text-sm">Teléfono, edad</p>
            </div>
          </div>        
        </div>                
      </div>
      <h1 className="text-center mt-3 font-semibold">Información básica</h1>
      <div className="p-5">          
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="shadow-md border rounded-xl p-4">
            <h1 className="text-lg">Colegio</h1>
            <p className="text-sm text-zinc-400">School</p>
          </div>
          <div className="shadow-md border rounded-xl p-4">
            <h1 className="md:text-lg">Dirección de residencia</h1>
            <p className="text-sm text-zinc-400">School</p>
          </div>
          <div className="shadow-md border rounded-xl p-4">
            <h1 className="text-lg">Materias inscritas</h1>
            <p className="text-sm text-zinc-400">School</p>
          </div>
          <div className="shadow-md border rounded-xl p-4">
            <h1 className="text-lg">Teléfono</h1>
            <p className="text-sm text-zinc-400">School</p>
          </div>
          <div className="shadow-md border rounded-xl p-4">
            <h1 className="text-lg">Edad</h1>
            <p className="text-sm text-zinc-400">School</p>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default InfoStudent;