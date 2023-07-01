import React from 'react'

const ListTeachers = () => {
  return (
    <div className="bg-zinc-100 rounded-2xl p-5 pr-5 pl-5 w-full pb-0 h-full mt-8 md:mt-0">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg">Profesores</h1>
        <p className="lg:block">10 profesor(es)</p>      
        <p>Acciones</p>
      </div>
      <div className="flex flex-col justify-betweeen h-80">
        <div className="h-4/5 overflow-y-auto flex-col flex gap-4 border-b-2 pb-3">
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
          <button className="text-blue-400 hover:text-blue-300 items-center text-start flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#67a9f4" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"/>
            </svg>
            Nuevo profesor/a
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListTeachers
