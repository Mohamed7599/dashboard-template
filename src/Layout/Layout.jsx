import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Layout = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-4 relative'>
                <div className="col-span-2 ">
                    <Sidebar />
                </div>
                <div className="col-span-10 relative">
                    <Navbar className="absolute top-0 left-0 right-0" />
                    <Outlet />
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Layout;