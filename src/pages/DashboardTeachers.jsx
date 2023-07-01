import React from 'react'
import Navbar from '../components/Navbar';
import InfoTeacher from '../components/InfoTeacher';
import ListTeachers from '../components/ListTeachers';
import SchoolGrades from "../components/SchoolGrades";

const Teachers = () => {
  return (
    <div className="space-y-5 md:flex md:flex-col sm:h-full sm:w-full">      
      <div className="h-full">
        <div className="md:grid md:grid-cols-2 md:gap-5 h-full">
          <div>  
            <InfoTeacher />       
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-1/2">
              <ListTeachers />                                    
            </div>          
            <div className="h-1/2">            
              <SchoolGrades />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers;