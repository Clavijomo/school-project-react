import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layouts/Layout';
import CreateStudent from './pages/CreateStudent';
import { CreateTeacher } from './pages/CreateTeacher';
import DashboardStudents from "./pages/DashboardStudents";
import DashboardTeachers from './pages/DashboardTeachers';

const App = () => {
  return (   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<DashboardStudents/>} />        
            <Route path="/teachers" element={<DashboardTeachers/>} />        
            <Route path="/create-student" element={<CreateStudent/>} />     
            <Route path="/create-teacher" element={<CreateTeacher/>} />     
          </Route>          
        </Routes>
      </BrowserRouter>    
    </div> 
  )
}

export default App;