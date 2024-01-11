import React from 'react';
import Card from '../../Components/Card';
import user1 from '../../assets/Images/users/bruce-mars.jpg';
import Tabs from '../../Components/tabs';
import { FaHome, FaEnvelope } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import user2 from '../../assets/Images/users/team-1.jpg';
import user3 from '../../assets/Images/users/team-2.jpg';
import user4 from '../../assets/Images/users/team-3.jpg';
import user5 from '../../assets/Images/users/team-4.jpg';
import user6 from '../../assets/Images/users/team-5.jpg';
import user7 from '../../assets/Images/users/team-6.jpg';
import user8 from '../../assets/Images/users/team-7.jpg';
import user9 from '../../assets/Images/users/team-8.jpg';
import user10 from '../../assets/Images/users/team-9.jpg';
import user11 from '../../assets/Images/users/team-10.jpg';



const Discover = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const friends = [
        {
            name: 'John Smith',
            avatar: user2
        }, {
            name: 'Jane Doe',
            avatar: user3
        }, {
            name: 'Michael Johnson',
            avatar: user4
        }, {

            name: 'Emily Brown',
            avatar: user1
        },
        {
            name: 'David Wilson',
            avatar: user5
        }, {
            name: 'Olivia Davis',
            avatar: user6
        }, {
            name: 'Sophia Thompson',
            avatar: user7
        }, {
            name: 'James Anderson',
            avatar: user8
        }, {
            name: 'Emma Martinez',
            avatar: user9
        }, {
            name: 'William Taylor',
            avatar: user10
        }
        , {
            name: 'Tom Smith',
            avatar: user11
        }
    ];
    const tabs = [{
        title: 'App',
        icon: <FaHome />
    }, {
        title: 'Message',
        icon: < FaEnvelope />
    }, {
        title: 'Settings',
        icon: <IoMdSettings />
    }]

    return (
        <div className='pr-5 py-8 flex flex-col gap-5 '>
            <div className='discover-image'>
                {/* userInfo */}
                <Card className='flex flex-col gap-5 absolute top-[85%] inset-x-10'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-4 items-center'>
                            <img src={user1} alt="user" width={75} className='rounded-lg' />
                            <div className='flex flex-col'>
                                <p className='text-xl font-semibold'>Richard Davis</p>
                                <span className='text-slate-500'>CEO / Co-Founder</span>
                            </div>
                        </div>
                        <div>
                            <Tabs tabs={tabs} value={value} onChange={handleChange} />
                        </div>
                    </div>
                    {/* userFriendsStories */}
                    <div className='flex justify-between gap-3 px-8 py-3 items-center overflow-x-auto'>
                        <div className=' flex flex-col justify-center items-center gap-2'>
                            <div className='add-Story flex justify-center items-center'>
                                <FaPlus className='text-slate-600 cursor-pointer' />
                            </div>
                            <p className='text-center text-sm'>Add Story</p>
                        </div>
                        {friends.map((friend, index) => (
                            <div key={index} className='flex flex-col justify-center items-center gap-2'>
                                <div key={index} className='rounded-full w-20 h-20 border p-1 border-[#ec407a]'>
                                    <img src={friend.avatar} alt="user" className='rounded-full w-full h-full' />
                                </div>
                                <p className='text-center text-sm whitespace-nowrap'>{friend.name}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>


        </div>
    );
}

export default Discover;
