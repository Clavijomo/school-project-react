import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layouts/Layout';
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
          </Route>          
        </Routes>
      </BrowserRouter>    
    </div> 
  )
}

export default App;