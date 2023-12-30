import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Layout = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-4'>
                <div className="col-span-2">
                    <div className="sticky top-3 bottom-0 h-[calc(100vh-22px)] pr-5">
                        <Sidebar />
                    </div>
                </div>
                <div className="col-span-10 flex flex-col relative">
                    <Navbar />
                    <div className="flex-grow overflow-auto">
                        <Outlet />
                    </div>

                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Layout;