import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../subComponents/NavBar';

const MainLayout = () => {
    return (
        <>
        <nav>
            <NavBar/>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    );
};

export default MainLayout;