import Avatar from 'react-avatar';
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import Collapsible from 'react-collapsible';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import logo from '../assets/images/logo-g6uAbWac.png';
// eslint-disable-next-line react/prop-types
const CustomHeader = ({ isDashboardCollapsed, isSidebarOpen }) => {
    return (
        <div className={`flex gap-2 py-2 mt-2 items-center transition-all duration-500 overflow-hidden ${isSidebarOpen ? 'justify-between px-3' : 'justify-center'} ${isDashboardCollapsed === false && 'bg-[#4e4e51]'} rounded-lg hover:bg-[#4e4e51]`}>
            <div className='flex gap-2 items-center'>
                <MdDashboard size={24} className='text-white' />
                <p className={`text-white text-nowrap ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboards</p>
            </div>
            {isSidebarOpen && (
                <>
                    {isDashboardCollapsed ? (
                        <FaAngleDown size={18} className='text-white' />
                    ) : (
                        <FaAngleUp size={18} className='text-white' />
                    )}
                </>
            )}
        </div>
    )
}
export default function Sidebar({ isSidebarOpen, isSidebarDisplayed }) {
    const [isDashboardCollapsed, setIsDashboardCollapsed] = useState(true);
    const [selectedDashboard, setSelectedDashboard] = useState('Analytics');

    const navigate = useNavigate();

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
    ]
    return (
        <div
            className={`h-[calc(100vh-20px)] bg-gradient-dark shadow-inner rounded-2xl  shadow-[#2c2c30] ${isSidebarOpen ? '' : 'items-center'} ${isSidebarDisplayed ? 'flex flex-col' : 'hidden'}  py-4 px-8 ml-4 cursor-default `}
        >
            <div className="py-3 flex gap-2 border-b border-gray-600 justify-center items-center transition-all duration-500 overflow-hidden">
                <div className='flex justify-center gap-2'>
                    <img src={logo} width={24.5} height={24.5} alt="logo" />
                    <p className={`text-white font-bold text-nowrap ${isSidebarOpen ? 'block' : 'hidden'}`}>My Dashboard</p>
                </div>
            </div>
            <nav>
                <div className='border-b border-gray-600'>
                    <div className={`flex gap-2 py-2 mt-2  items-center transition-all duration-500 overflow-hidden ${isSidebarOpen ? 'justify-start px-3' : 'justify-center'} rounded-lg`}>
                        <Avatar name="Mohamed Magdy" size="30" round={true} />
                        <p className={`text-white text-nowrap ${isSidebarOpen ? 'block' : 'hidden'}`}>Mohamed Magdy</p>
                    </div>
                </div>

                <Collapsible
                    trigger={<CustomHeader isDashboardCollapsed={isDashboardCollapsed} isSidebarOpen={isSidebarOpen} />}
                    onOpening={() => setIsDashboardCollapsed(false)}
                    onClosing={() => setIsDashboardCollapsed(true)}
                    className='collapsible'
                >
                    {isSidebarOpen ? (
                        dashboards.map((dashboard) => (
                            <div key={dashboard.name} className={`flex gap-2 py-2 mt-2 px-5 items-center rounded-lg cursor-pointer hover:bg-[#4e4e51] ${selectedDashboard === dashboard.name ? 'bg-[#e91e63] hover:bg-[#e91e63]' : ''}`}
                                onClick={() => {
                                    setSelectedDashboard(dashboard.name);
                                    navigate(`/${dashboard.path}`);
                                }}>
                                <span className='text-lg text-white'>{dashboard.icon}</span>
                                <span
                                    className={`text-md text-white `}
                                    onClick={() => {
                                        setSelectedDashboard(dashboard.name);
                                        navigate(`/${dashboard.path}`);
                                    }}
                                >
                                    {dashboard.name}
                                </span>
                            </div>
                        ))
                    ) : (
                        dashboards.map((dashboard) => (
                            <div key={dashboard.name} className={`flex gap-2 py-3 mt-2 px-7 items-center justify-center rounded-lg cursor-pointer hover:bg-[#4e4e51] ${selectedDashboard === dashboard.name ? 'bg-[#e91e63] hover:bg-[#e91e63]' : ''}`}
                                onClick={() => {
                                    setSelectedDashboard(dashboard.name);
                                    navigate(`/${dashboard.path}`);
                                }}>
                                <span className='text-lg text-white'>
                                    {dashboard.icon}</span>
                            </div>
                        ))
                    )}
                </Collapsible>
            </nav >
            <div id="detail"></div>
        </ div >
    );
}