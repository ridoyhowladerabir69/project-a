import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../subComponents/NavBar';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <>
        <nav>
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