import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Navbar from './components/Aside';
import './index.css'
import DashboardStudents from './pages/DashboardStudents';
import DashboardTeachers from './pages/DashboardTeachers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [      
      {
        index: true,
        element: <DashboardStudents />
      },
      {
        path: '/teachers',
        element: <DashboardTeachers />
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />          
  </React.StrictMode>,
)
