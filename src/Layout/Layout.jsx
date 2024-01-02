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
        width: isSidebarOpen ? maxSidebarWidth : '32px',
        marginRight: isSidebarOpen ? '0px' : '24px',
        transition: 'all 0.5s ease-in-out',
    };
    return (
        <>
            <div className={`flex justify-between ${isSidebarOpen ? 'gap-2' : 'gap-8'}`}>
                <div style={sidebarStyle} className={`sticky top-3 bottom-0 h-[calc(100vh-22px)]`}>
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                </div>
                <div className="flex-grow flex flex-col">
                    <Navbar className='flex-grow overflow-auto' isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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