import { useSelector } from 'react-redux';
import Classroom from '../components/Classroom';
import InfoStudent from '../components/InfoStudent';
import SchoolGrades from "../components/SchoolGrades";


const Dashboard = () => {  
  const infoStudent = useSelector(state => state.studentInfo);  
  return (
    <div className="space-y-5 md:flex md:flex-col sm:h-full sm:w-full">      
      <div className="h-full">
        <div className="md:grid md:grid-cols-2 md:gap-5 h-full">
          <div>  
            <InfoStudent               
              infoStudent={infoStudent ? infoStudent : {}}
            />        
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-1/2">
              <Classroom />                                    
            </div>          
            <div className="h-1/2">            
              <SchoolGrades />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;