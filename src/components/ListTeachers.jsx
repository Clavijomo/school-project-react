import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Teacher from '../app/Teacher';

const ListTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const teacherState = useSelector(state => state.teachers);
  useEffect(() => {
    setTeachers(teacherState);
  }, [])
  
  return (
    <div className="bg-zinc-100 rounded-2xl p-5 pr-5 pl-5 w-full pb-0 h-full mt-8 md:mt-0">
      <div className="flex items-center justify-between mb-5">
        <h1 className="md:block md:text-md">Profesor</h1>                
        <p>Acciones</p>
      </div>
      <div className="flex flex-col justify-betweeen h-80 relative">
        <div className="h-4/5 overflow-y-auto flex-col flex gap-4 border-b-2">
          {teacherState && teacherState.map((teacher, index) => (
            <Teacher 
              teacher={teacher}
              key={index}
            />
          ))}
        </div>
        <div className="absolute bottom-2 md:bottom-0 bg-zinc-200 md:bg-transparent w-full md:w-max p-3 shadow-md md:shadow-none rounded-full md:rounded-none">          
          <Link to={"/create-teacher"} className="text-blue-400 text-start flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            <h1>Añadir profesor</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListTeachers
