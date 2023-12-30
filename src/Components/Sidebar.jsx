import Avatar from 'react-avatar';
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import Collapsible from 'react-collapsible';
import { useNavigate } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const CustomHeader = ({ isDashboardCollapsed }) => {
    return (
        <div className="flex gap-2 py-2 mt-2 items-center justify-between px-3 rounded-lg hover:bg-[#4e4e51]">
            <div className='flex gap-2 items-center'>
                <MdDashboard size={24} className='text-white' />
                <p className='text-base text-white'>Dashboards</p>
            </div>
            {isDashboardCollapsed ? <FaAngleDown size={18} className='text-white' /> : <FaAngleUp size={18} className='text-white' />}
        </div>
    )
}
export default function Sidebar() {
    const [isDashboardCollapsed, setIsDashboardCollapsed] = useState(true);
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
        <div className="h-[calc(100vh-20px)] bg-gradient-dark shadow-inner shadow-[#2c2c30] rounded-3xl w-full py-4 px-8 mx-4 cursor-default my-3">
            <div className=" py-3 flex gap-2 border-b border-gray-600 justify-center items-center">
                <img src="/src/assets/Images/logo-ct.png" width={32} alt="logo" />
                <h3 className="text-base font-semibold text-white">My Dashboard</h3>
            </div>
            <nav>
                <div className="flex gap-2 py-4 pl-2 items-center border-b border-gray-600">
                    <Avatar name="Mohamed Magdy" size="40" round={true} />
                    <p className='text-white'>Mohamed Magdy</p>
                </div>
                <Collapsible
                    trigger={<CustomHeader isCollapsed={isDashboardCollapsed} />}
                    onOpening={() => setIsDashboardCollapsed(false)}
                    onClosing={() => setIsDashboardCollapsed(true)}
                    className='collapsible'
                >
                    {dashboards.map((dashboard) =>
                    (
                        <div key={dashboard.name} className='flex gap-2 py-3 pl-3 items-center' ><span className='text-lg text-white'>{dashboard.icon}</span>
                            <span className='text-md text-white' onClick={() => { navigate(`/${dashboard.path}`) }}>{dashboard.name}</span>
                        </div>
                    )

                    )}
                </Collapsible>
            </nav >
            <div id="detail"></div>
        </div >
    );
}