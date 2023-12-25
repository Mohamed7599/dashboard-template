import Avatar from 'react-avatar';
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import Collapsible from 'react-collapsible';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const CustomHeader = ({ isCollapsed }) => {
    return (
        <div className="flex gap-2 py-4 items-center justify-between border-b border-gray-600">
            <div className='flex gap-2 items-center'>
                <MdDashboard size={24} />
                <p>Dashboards</p>
            </div>
            {isCollapsed ? <FaAngleDown size={24} /> : <FaAngleUp size={24} />}
        </div>
    )
}
export default function Root() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const dashboards = [
        {
            name: 'Analytics',
            icon: 'A',
            path: '/analytics'
        },
        {
            name: 'Discover',
            icon: 'D',
            path: '/discover'
        },
        {
            name: 'Sales',
            icon: 'S',
            path: '/sales'
        },
        {
            name: 'Automotive',
            icon: 'A',
            path: '/automotive'
        },
        {
            name: 'Smart Home',
            icon: 'S',
            path: '/smart-home'
        },
    ]
    return (
        <>
            <div className="fixed top-0 bottom-0 bg-gradient-dark  shadow-inner shadow-[#2c2c30] rounded-3xl py-4 px-8 mx-4 cursor-default my-3">
                <div className=" py-3 flex gap-2 border-b border-gray-600 ">
                    <img src="/src/assets/Images/logo-ct.png" width={32} alt="logo" />
                    <h3 className="text-lg">My Dashboard</h3>
                </div>
                <nav>
                    <div className="flex gap-2 py-4 items-center border-b border-gray-600">
                        <Avatar name="Mohamed Magdy" size="40" round={true} />
                        <p>Mohamed Magdy</p>
                    </div>
                    <Collapsible
                        trigger={<CustomHeader isCollapsed={isCollapsed} />}
                        onOpening={() => setIsCollapsed(false)}
                        onClosing={() => setIsCollapsed(true)}
                    >
                        {dashboards.map((dashboard) =>
                        (
                            <div key={dashboard.name} className='flex gap-2 py-3 items-center' ><span className='text-lg'>{dashboard.icon}</span>
                                <span className='text-md font-thin'>{dashboard.name}</span>
                            </div>
                        )

                        )}
                    </Collapsible>
                </nav >
            </div >
            <div id="detail"></div>
        </>
    );
}