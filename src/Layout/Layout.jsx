import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarManuallyCollapsed, setIsSidebarManuallyCollapsed] = useState(false);
    const maxSidebarWidth = '250px';
    const mediumScreenBreakpoint = 1024;
    const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(window.innerWidth > mediumScreenBreakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarDisplayed(window.innerWidth > mediumScreenBreakpoint);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
        opacity: isSidebarDisplayed ? '1' : '0',
        transition: 'all 0.3s ease-in-out',
    };

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `${isSidebarDisplayed ? (isSidebarOpen ? maxSidebarWidth : '122px') : '0'} auto`,
                    transition: 'grid-template-columns 0.3s ease-in-out',
                }}
            >
                <div
                    style={sidebarStyle}
                    className={`sticky top-3 bottom-0 h-[calc(100vh-22px)]`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Sidebar isSidebarOpen={isSidebarOpen} isSidebarDisplayed={isSidebarDisplayed} />
                </div>
                <div className="flex-grow px-5">
                    <Navbar
                        className="flex-grow"
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                        isSidebarDisplayed={isSidebarDisplayed}
                    />
                    <div className={`flex-grow `}>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
