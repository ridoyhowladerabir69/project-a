import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../subComponents/NavBar';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <>
        <nav className='fixed w-full z-50 top-0 left-0'>
            <NavBar/>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer className='mt-[80px]'>
            <Footer/>
        </footer> 
        </>
    );
};

export default MainLayout;