import { useSelector } from 'react-redux';
import CalificationTeachers from '../components/CalificationTeachers';
import InfoTeacher from '../components/InfoTeacher';
import ListTeachers from '../components/ListTeachers';

const Teachers = () => {
  const infoTeacher = useSelector(state => state.teacherInfo);
  const students = useSelector(state => state.students);


  return (
    <div className="space-y-5 md:flex md:flex-col sm:h-full sm:w-full">      
      <div className="h-full">
        <div className="md:grid md:grid-cols-2 md:gap-5 h-full">
          <div className="h-full">  
            <InfoTeacher 
              infoTeacher={infoTeacher ? infoTeacher : {}}
            />       
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-1/2">
              <ListTeachers />                                    
            </div>          
            <div className="h-1/2">            
              <CalificationTeachers 
                students={students}
                infoTeacher={infoTeacher}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers;