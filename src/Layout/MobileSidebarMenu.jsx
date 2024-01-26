import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { HiMenu } from "react-icons/hi";
import Avatar from 'react-avatar';
import Collapsible from 'react-collapsible';
import { MdDashboard } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from '../assets/Images/logo.png';
const dashboards = [
    {
        name: 'Analytics',
        icon: 'A',
        path: 'analytics'
    },
    {
        name: 'Discover',
        icon: 'D',
        path: 'discover'
    },
    {
        name: 'Sales',
        icon: 'S',
        path: 'sales'
    },
    {
        name: 'Automotive',
        icon: 'A',
        path: 'automotive'
    },
    {
        name: 'Smart Home',
        icon: 'S',
        path: 'smart-home'
    },
];

const CustomHeader = ({ isDashboardCollapsed, }) => {
    return (
        <div className={`flex gap-2 py-2 mt-2 mx-2 items-center transition-all duration-500 overflow-hidden justify-between px-3 ${isDashboardCollapsed === false && 'bg-[#4e4e51]'} rounded-lg hover:bg-[#4e4e51]`}>
            <div className='flex gap-2 items-center'>
                <MdDashboard size={24} className='text-white' />
                <p className={`text-white text-nowrap block`}>Dashboards</p>
            </div>
            {isDashboardCollapsed ? (
                <FaAngleDown size={18} className='text-white' />
            ) : (
                <FaAngleUp size={18} className='text-white' />
            )}

        </div>
    )
}
export default function MobileSidebarMenu() {
    const [isDashboardCollapsed, setIsDashboardCollapsed] = useState(true);
    const [selectedDashboard, setSelectedDashboard] = useState('Analytics');
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };
    const list = () => (
        <Box
            className=' bg-gradient-dark  text-white'
            sx={{ width: 250, height: '100%', overflowY: 'auto' }}
            role="presentation"
        >
            <List className=''>
                <div className="py-3 flex gap-2 border-b border-gray-600 justify-center items-center transition-all duration-500 overflow-hidden">
                    <div className='flex justify-center gap-2'>
                        <img src={logo} width={24.5} height={24.5} alt="logo" />
                        <p className={`text-white font-bold text-nowrap`}>My Dashboard</p>
                    </div>
                </div>
                <div className='border-b border-gray-600'>
                    <div className={`flex justify-center gap-2 py-2 mt-2 mx-2  items-center transition-all duration-500 overflow-hidden rounded-lg`}>
                        <Avatar name="Mohamed Magdy" size="30" round={true} />
                        <p className={`text-white text-nowrap`}>Mohamed Magdy</p>
                    </div>
                </div>
                <Collapsible
                    trigger={<CustomHeader isDashboardCollapsed={isDashboardCollapsed} />}
                    onOpening={() => setIsDashboardCollapsed(false)}
                    onClosing={() => setIsDashboardCollapsed(true)}
                    className='collapsible'
                >

                    {dashboards.map((dashboard) => (
                        <div key={dashboard.name} className={`flex gap-2 py-2 mt-2 px-5 mx-2 items-center rounded-lg cursor-pointer hover:bg-[#4e4e51] ${selectedDashboard === dashboard.name ? 'bg-[#e91e63] hover:bg-[#e91e63]' : ''}`}
                            onClick={() => {
                                setSelectedDashboard(dashboard.name);
                                navigate(`/${dashboard.path}`);
                            }}>
                            <span className='text-lg text-white'>{dashboard.icon}</span>
                            <span
                                className={`text-md text-white`}
                                onClick={() => {
                                    setSelectedDashboard(dashboard.name);
                                    navigate(`/${dashboard.path}`);
                                    setIsDrawerOpen(false);
                                }}
                            >
                                {dashboard.name}
                            </span>
                        </div>

                    ))
                    }

                </Collapsible>
            </List >
        </Box >
    );

    return (
        <>
            <button onClick={toggleDrawer(true)}><HiMenu size={32} className='' />
            </button>
            <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                style={{
                    width: '250px',
                    position: 'absolute',
                    top: '10px',
                    bottom: '10px',
                    left: '10px'
                }}
            >
                {list("left")}
            </Drawer>
            {isDrawerOpen && <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={{ position: 'fixed', top: '5%', bottom: 5, left: 0, width: '100%', height: '100%', padding: '20px' }} />}
        </>
    );
}