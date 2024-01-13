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
import postImage from '../../assets/Images/post-image.jpg';
import { BiSolidLike } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { IoMdSend } from "react-icons/io";
import LongMenu from '../../Components/Menu';
import { FaStar, FaRegStar } from "react-icons/fa";
import slack from '../../assets/icons/slack.png';
import invision from '../../assets/icons/invision.png';



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
    const CustomTextField = styled(TextField)(({ theme }) => ({
        '& .MuiInputLabel-root': {
            color: '#4b5563', // Change the color of the label
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#ec407a', // Change the color of the label when focused
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ec407a', // Change the underline color after clicking
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'lightgray !important', // Change the underline color in the normal state
        },
        '& .MuiInputBase-input': {
            color: 'black', // Change the text color in the normal state
        },

    }));

    return (
        <div className='pr-5 py-8 flex flex-col gap-5 '>
            <div className='discover-image'>

            </div>
            <div className='grid grid-cols-12'>
                {/* userInfo */}
                <Card className='flex flex-col col-span-12 gap-5 -mt-20 z-20 mx-8'>
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
                    <div className='grid grid-cols-12 lg:gap-16 gap-y-6 p-6'>
                        {/* Post part */}
                        <div className='col-span-12 lg:col-span-8 flex flex-col'>
                            <div className=''>
                                {/* post owner info */}
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-3 pb-5">
                                    <div className='flex lg:flex-row flex-col gap-3 items-center'>
                                        <img src={user5} alt="" width={52} height={52} className='rounded-full' />
                                        <div className='flex flex-col gap-y-1'>
                                            <p>John Snow</p>
                                            <span className='text-slate-500'>3 days ago</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='btn btn-bg-gradient-primary bg-gradient-primary text-white'>+ Follow</button>
                                    </div>
                                </div>
                                <hr />
                                {/* post content */}
                                <div className='flex flex-col gap-2 py-8 w-full'>
                                    {/* Post-data */}
                                    <p className='text-lg text-gray-600/70 font-light pb-3'>Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they should hire you.</p>
                                    <img src={postImage} alt="post-image" className='rounded-xl w-full' />
                                    <div className='flex justify-between py-3'>
                                        <div className='flex gap-3 items-center'>
                                            <button className='flex gap-1 text-gray-400'>
                                                <BiSolidLike size={20} />
                                                <span>150</span>
                                            </button>
                                            <button className='flex gap-1 text-gray-400'>
                                                <MdModeComment size={20} />
                                                <span>150</span>
                                            </button>
                                            <button className='flex  gap-1 text-gray-400'>
                                                <FaShare size={20} />
                                                <span>150</span>
                                            </button>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <div className='flex'>
                                                <img src={user2} alt="" width={30} className='rounded-full' />
                                                <img src={user3} alt="" width={30} className='rounded-full' />
                                                <img src={user4} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <span className='font-semibold text-slate-500'>and 30+ more</span>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* Comments */}
                                    <div className='flex flex-col gap-10 py-3'>
                                        <div className='flex gap-3 items-start'>
                                            <img src={user1} alt="user" width={52} className='rounded-full' />
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-lg font-semibold'>Richard Davis</p>
                                                <p className='text-gray-500'>I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!</p>
                                                <div className='flex gap-4 pt-3 '>
                                                    <button className='flex items-center gap-2 text-gray-400'>
                                                        <MdModeComment size={16} />
                                                        <span>3 Likes</span>
                                                    </button>
                                                    <button className='flex items-center  gap-2 text-gray-400'>
                                                        <FaShare size={16} />
                                                        <span>2 Shares</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 items-start'>
                                            <img src={user4} alt="user" width={52} className='rounded-full' />
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-lg font-semibold'>Jessica Stones</p>
                                                <p className='text-gray-500'>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy.</p>
                                                <div className='flex gap-4 pt-3 '>
                                                    <button className='flex items-center gap-2 text-gray-400'>
                                                        <MdModeComment size={16} />
                                                        <span>10 Likes</span>
                                                    </button>
                                                    <button className='flex items-center  gap-2 text-gray-400'>
                                                        <FaShare size={16} />
                                                        <span>1 Shares</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add Comment */}
                                    <div className='flex gap-4 items-start w-full pt-3 '>
                                        <img src={user9} alt="user" width={52} className='rounded-full' />
                                        <div className='flex items-end gap-5 w-full'>
                                            <CustomTextField id="standard-multiline-static"
                                                multiline
                                                rows={5}
                                                placeholder='Write your comment ...'
                                                variant="standard"
                                                className='w-full' />
                                            <button className='px-4 py-2 rounded-lg btn-bg-gradient-primary bg-gradient-primary text-white '><IoMdSend size={18} />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Right Side */}
                        <div className='col-span-12 lg:col-span-4 flex flex-col gap-16 py-5'>
                            {/* digitial marketing */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#ec407a] text-2xl font-semibold'>Digitial Marketing</h4>
                                    <LongMenu options={['Edit Team', 'Add Member', 'See Details', 'Remove Team']} />
                                </div>
                                <p className='text-slate-500 text-lg font-light'>A group of people who collectively are responsible for all of the work necessary to produce working, validated assets.
                                </p>
                                <div>
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Industry:</p>
                                        <span className="inline-flex items-center rounded-lg bg-gray-300 p-2 text-[#6C757D] ring-1 ring-inset ring-gray-300 uppercase text-sm font-semibold">Marketing Team</span>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Rating:</p>
                                        <div className='flex gap-1'>
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaRegStar size={16} className='text-[#6C757D]' />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Members:</p>
                                        <div className='flex'>
                                            <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                                <img src={user1} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                                <img src={user5} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <div className='border border-white rounded-full drop-shadow-md'>
                                                <img src={user8} alt="" width={30} className='rounded-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Design */}
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[#ec407a] text-2xl font-semibold'>Design</h4>
                                    <LongMenu options={['Edit Team', 'Add Member', 'See Details', 'Remove Team']} />
                                </div>
                                <p className='text-slate-500 text-lg font-light'>Because it’s about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
                                </p>
                                <div>
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Industry:</p>
                                        <span className="inline-flex items-center rounded-lg bg-gray-300 p-2 text-[#6C757D] ring-1 ring-inset ring-gray-300 uppercase text-sm font-semibold">Design Team</span>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Rating:</p>
                                        <div className='flex gap-1'>
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                            <FaStar size={16} className='text-[#6C757D]' />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between items-center py-3'>
                                        <p className='text-gray-400 text-lg font-light'>Members:</p>
                                        <div className='flex'>
                                            <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                                <img src={user4} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                                <img src={user3} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                                <img src={user10} alt="" width={30} className='rounded-full' />
                                            </div>
                                            <div className='border border-white rounded-full drop-shadow-md'>
                                                <img src={user9} alt="" width={30} className='rounded-full' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Invision */}
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-4'>
                                    <img src={slack} alt="slack-logo" width={50} />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-lg font-bold'>Slack Meet</p>
                                        <span className='text-gray-400 font-normal'>11:00 AM</span>
                                    </div>
                                </div>
                                <p className='text-lg text-slate-500 font-light'>You have an upcoming meet for Marketing Planning
                                </p>
                                <p className='text-lg font-semibold text-slate-500'>Meeting ID: <span className='font-light'>902-128-281</span></p>
                                <hr />
                                <div className='flex justify-between'>
                                    <button className='btn btn-bg-gradient-Dark bg-gradient-dark'>Join</button>
                                    <div className='flex'>
                                        <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                            <img src={user5} alt="" width={30} className='rounded-full' />
                                        </div>
                                        <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                            <img src={user2} alt="" width={30} className='rounded-full' />
                                        </div>
                                        <div className='border border-white rounded-full drop-shadow-md'>
                                            <img src={user8} alt="" width={30} className='rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-4'>
                                    <img src={invision} alt="slack-logo" width={50} />
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-lg font-bold'>Invision</p>
                                        <span className='text-gray-400 font-normal'>4:50 PM</span>
                                    </div>
                                </div>
                                <p className='text-lg text-slate-500 font-light'>You have an upcoming video call for <span className='text-[#ec407a]'>Material Design</span> at 5:00 PM.
                                </p>
                                <p className='text-lg font-semibold text-slate-500'>Meeting ID: <span className='font-light'>111-968-981</span></p>
                                <hr />
                                <div className='flex justify-between'>
                                    <button className='btn btn-bg-gradient-Dark bg-gradient-dark'>Join</button>
                                    <div className='flex'>
                                        <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                            <img src={user5} alt="" width={30} className='rounded-full' />
                                        </div>
                                        <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                            <img src={user10} alt="" width={30} className='rounded-full' />
                                        </div>
                                        <div className='border border-white rounded-full -mr-4 drop-shadow-md'>
                                            <img src={user3} alt="" width={30} className='rounded-full' />
                                        </div>
                                        <div className='border border-white rounded-full drop-shadow-md'>
                                            <img src={user8} alt="" width={30} className='rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    );
}

export default Discover;
