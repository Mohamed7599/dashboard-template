import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const maxSidebarWidth = '280px'; // Set your maximum expected width here

    const sidebarStyle = {
        width: isSidebarOpen ? maxSidebarWidth : '140px',
        // marginRight: isSidebarOpen ? '0px' : '24px',
        transition: 'all 0.3s ease-in-out',
    };
    return (
        <>
            <div className={`flex justify-between gap-2`}>
                <div style={sidebarStyle} className={`sticky top-3 bottom-0 h-[calc(100vh-22px)] min-h-screen`}>
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                </div>
                <div className="flex-grow flex flex-col">
                    <Navbar className='flex-grow' isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Layout;