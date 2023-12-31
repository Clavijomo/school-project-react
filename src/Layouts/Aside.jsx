import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from "react-router-dom"

const Aside = () => {
  const location = useLocation();
  const [sizeScreen] = useState(screen.width);
  return (
    <div className="md:w-full flex md:p-10 md:bg-zinc-200 mx-auto h-screen gap-3">
      <aside style={{ display: sizeScreen < 500 ? "none" : "block" }} className="md:w-1/5 md:flex-col md:gap-2 md:rounded-2xl md:p-5 md:bg-zinc-100 md:block">
        <h1 className="text-2xl md:text-blue-400 md:font-normal">Dashboard School</h1>
        <div className="space-y-3 md:mt-5 md:block">
          <Link 
            to={'/'}
            className={`${location.pathname === '/' ? 'text-md font-semibold bg-blue-500 text-white' : 'font-normal'} p-3 hover:bg-blue-500 hover:text-white w-full transition rounded-2xl text-md flex gap-3 items-center`}
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
            className={`${location.pathname === '/teachers' ? 'text-md font-semibold bg-blue-500 text-white' : 'font-normal'} p-3 hover:bg-blue-500 hover:text-white w-full transition rounded-2xl text-md flex gap-3 items-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chalkboard" width="22" height="22" viewBox="0 0 24 24"    strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1" />
                <path d="M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>
              Profesores
          </Link>
        </div>
      </aside>      
    </div>
  )
}

export default Aside;