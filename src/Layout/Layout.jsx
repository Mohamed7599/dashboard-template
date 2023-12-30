import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <>
            <div className='flex'>
                <div className={`transition-all duration-500 ease-in-out sticky top-3 bottom-0 h-[calc(100vh-22px)] pr-5 ${isSidebarOpen ? 'w-96' : 'w-36'}`}>
                    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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