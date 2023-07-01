import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [size] = useState(screen.width);
    
  return (
    <div>
      <div style={{ display: size < 768 ? "none" : "flex" }} className="bg-zinc-100 p-4 rounded-2xl md:w-full md:flex md:items-center md:justify-between">      
        <div className="flex gap-3 items-center md:flex sm:hidden">
          <img className="w-12 border-1 border rounded-full" src="https://cdn-icons-png.flaticon.com/512/2784/2784518.png" alt=""/>
          <div>
            <h1 className="font-semibold text-md">Nombre profesor</h1>
            <p className="text-zinc-400 font-thin text-sm">Clases y materias</p>
          </div>
        </div>
        <div className="md:block sm:hidden">
          <h3 className="text-sm text-zinc-500">Administrador</h3>
        </div>
      </div>
      <div className="md:hidden">
        <nav className="w-full py-5 flex justify-evenly">
        <Link 
            to={'/'}
            className={`${location.pathname === '/' ? 'text-md font-semibold bg-blue-500 text-white' : 'font-normal'} p-3 hover:bg-blue-500 hover:text-white w-max transition rounded-2xl text-md flex gap-3 items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
            </svg>
              Estudiantes
          </Link>     
          <Link
            to={'/teachers'}
            className={`${location.pathname === '/teachers' ? 'text-md font-semibold bg-blue-500 text-white' : 'font-normal'} p-3 hover:bg-blue-500 hover:text-white w-max transition rounded-2xl text-md flex gap-3 items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chalkboard" width="22" height="22" viewBox="0 0 24 24"    strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" />
                <path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>
              Profesores
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
