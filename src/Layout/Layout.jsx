import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarManuallyCollapsed, setIsSidebarManuallyCollapsed] = useState(false);
    const maxSidebarWidth = '250px';

    const toggleSidebar = () => {
        const newIsSidebarOpen = !isSidebarOpen;
        setIsSidebarOpen(newIsSidebarOpen);
        setIsSidebarManuallyCollapsed(!newIsSidebarOpen);
    }

    const handleMouseEnter = () => {
        if (isSidebarManuallyCollapsed) {
            setIsSidebarOpen(true);
        }
    }

    const handleMouseLeave = () => {
        if (isSidebarManuallyCollapsed) { // Check if the sidebar is collapsed
            setIsSidebarOpen(false);
        }
    }


    const sidebarStyle = {
        width: isSidebarOpen ? maxSidebarWidth : '122px',
        transition: 'all 0.3s ease-in-out',
    };


    // Rest of the code...

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: `${isSidebarOpen ? maxSidebarWidth : '122px'} auto`, transition: 'grid-template-columns 0.3s ease-in-out' }}>
                <div style={sidebarStyle} className={`sticky top-3 bottom-0 h-[calc(100vh-22px)]`} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                </div>
                <div className="flex-grow">
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