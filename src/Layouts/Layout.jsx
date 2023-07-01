import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';
import Header from "./Header";
import Aside from './Aside';


const Layout = () => {
  return (
    <>
      <div className="flex gap-3 h-screen p-5">
        <div className="md:w-1/5 h-full">
          <Sidebar />      
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col space-y-5 sm:h-full">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;