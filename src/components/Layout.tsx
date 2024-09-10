import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '@/styles/Layout.css'

const Layout: React.FC = () => {

  return (
    <>
      <main className='main'>
        <Outlet />
      </main>
        
      <Navbar />
    </>
  );
}

export default Layout;