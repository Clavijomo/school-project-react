import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';
import Header from "./Header";
import Aside from './Aside';


const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-52">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout;