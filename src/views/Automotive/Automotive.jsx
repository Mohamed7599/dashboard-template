import React from 'react';
import Card from '../../Components/Card';
import sun from '../../assets/Images/icon-sun-cloud.webp';
import { FaCarAlt } from "react-icons/fa";
import { MdBatteryFull, MdHeadset, MdWatch, MdModeComment } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoVolumeMedium, IoPlay, IoPower } from "react-icons/io5";
import tesla from '../../assets/Images/tesla-model-s.png';
import teslaLayer from '../../assets/Images/waves-white.svg';
import { IoMdMap } from "react-icons/io";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { IoIosSearch } from "react-icons/io";
import Locations from '../../Components/Locations';
import drake from '../../assets/Images/drake.jpg';
import spotify from '../../assets/Icons/spotify.png';
import { FaStepBackward, FaStepForward, FaPause } from "react-icons/fa";
import MuiSlider from '../../Components/MuiSlider';
import { TfiMenuAlt } from "react-icons/tfi";


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
        borderBottomColor: 'white !important', // Change the underline color in the normal state
    },

    '& .MuiInputBase-input': {
        color: 'white', // Change the text color in the normal state
    },

}));

const Automotive = () => {
    return (
        <div className='py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='lg:col-span-7 col-span-12 lg:h-full h-[420px]'>
                    <Card className="bg-gradient-dark relative h-full">
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${teslaLayer})`,
                            backgroundSize: 'cover',
                            opacity: 0.2,
                        }}></div>
                        <img src={tesla} alt="tesla car" className='car-image' />
                        <div className='flex justify-around absolute bottom-5 w-full'>
                            <div className='z-50 cursor-default'>
                                <p className='text-3xl text-[#eaeaea] font-bold px-4 pb-2'>Since Last Charge</p>
                                <hr />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-3 items-center pt-3'>
                                        <p className='text-lg text-[#eaeaea]'>Distance</p>
                                        <p className='text-2xl font-bold text-[#eaeaea]'>145 Km</p>
                                    </div>
                                    <div className='flex flex-col gap-3  items-center pt-3'>
                                        <p className='text-lg text-[#eaeaea]'>Average Energy</p>
                                        <p className='text-2xl font-bold text-[#eaeaea]'>300 Kw</p>
                                    </div>
                                </div>
                            </div>
                            <div className='z-50 cursor-default'>
                                <p className='text-3xl text-[#eaeaea] font-bold px-4 pb-2'>Nearest Charger</p>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-center pt-3'>
                                        <p className='text-xl font-bold text-[#eaeaea]'>Michelan, DW</p>
                                        <p className='text-xl font-bold text-[#eaeaea]'>891 Limarenda road</p>
                                    </div>
                                    <div className='rounded-full border flex justify-center items-center cursor-pointer p-2 bg-[#3f3f42] hover:bg-[#262626]'>
                                        <IoMdMap size={20} className='text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* wheather and about car */}
                <div className='lg:col-span-5 col-span-12'>
                    <Card className={'bg-gradient-dark'}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='font-bold text-gray-400'>Weather Today</h3>
                                <span className='text-white text-wrap text-2xl font-bold'>San Francisco - 29°C</span>
                            </div>
                            <div className='flex flex-col items-center'>

                                <img src={sun} alt='sun' width={95} height={68} />
                                <span className='text-xl font-semibold text-white'>Sunny</span>
                            </div>
                        </div>
                    </Card>
                    {/* about car */}
                    <div className='grid grid-cols-12 gap-x-5 gap-y-7 mt-12'>
                        <Card className={'col-span-12 md:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <FaCarAlt size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4 pr-3'>
                                    <h6 className='text-base xl:text-large text-gray-500 text-nowrap'>
                                        Today&apos;s Trip
                                    </h6>
                                    <span className='font-semibold text-2xl xl:text-3xl'>145 Km</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 md:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <MdBatteryFull size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4 pr-3'>
                                    <h6 className='text-base xl:text-large text-gray-500 text-nowrap'>
                                        Battery Health
                                    </h6>
                                    <span className='font-semibold text-2xl xl:text-3xl'>99 %</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 md:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <BsSpeedometer2 size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4 pr-3'>
                                    <h6 className='text-base xl:text-large text-gray-500 text-nowrap'>
                                        Avg. Speed
                                    </h6>
                                    <span className='font-semibold text-2xl xl:text-3xl text-nowrap'>56 Km/h</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 md:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <IoVolumeMedium size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4 pr-3 '>
                                    <h6 className='text-base xl:text-large text-gray-500 text-nowrap'>
                                        Music Volume
                                    </h6>
                                    <span className='font-semibold text-2xl xl:text-3xl'> 15/100</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            {/* mediaplayer and google maps section */}
            <div className='grid grid-cols-12'>
                <Card className={'col-span-12 bg-gradient-dark '}>
                    {/* Trip about */}
                    <div className="grid grid-cols-12 gap-y-4 pb-4 border-b border-slate-400 divide-slate-600">
                        <CustomTextField id="standard-basic" label="Search anything..." variant="standard" className='col-span-12 lg:col-span-3' InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <IoIosSearch className='text-gray-600' />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                        <div className='col-span-12 lg:col-span-9 flex justify-end items-center gap-5'>
                            <div className='flex gap-4 items-center'>
                                <MdHeadset className='text-white' size={20} />
                                <IoPlay className='text-white' size={20} />
                                <IoPower className='text-white' size={20} />
                                <MdWatch className='text-white' size={20} />
                            </div>
                            <p className='text-3xl font-extrabold text-white'>10:45</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 px-2 py-3 divide-slate-400 items-center m-3 gap-y-3'>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12 border-b pb-2 md:border-r flex lg:justify-start justify-center'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-4xl text-white font-extrabold'>11:13</p>
                                <span className='text-gray-400 text-lg'>Estimated arrival time</span>
                            </div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-6 col-span-12 pb-2 border-b lg:border-r flex justify-center'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-4xl text-white font-extrabold'>2.4<sup className='text-lg'>Km</sup></p>
                                <span className='text-gray-400 text-lg'>Turn right in 2.4 miles</span>
                            </div>
                        </div>
                        <div className='lg:col-span-4 col-span-12 flex lg:justify-end justify-center'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-4xl text-white font-extrabold'>6.3<sup className='text-lg'>Km</sup></p>
                                <span className='text-gray-400 text-lg '>Distance to Creative Tim</span>
                            </div>
                        </div>
                    </div>
                    {/* map */}
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 '>
                            {/* Use the LeafletMap component here */}
                            <Locations />
                        </div>
                        <div className='col-span-12 '>
                            <div className='grid grid-cols-12 items-center gap-y-4'>
                                {/* artist */}
                                <div className='lg:col-span-4 md:col-span-6 col-span-12 flex md:justify-start justify-center gap-4 items-center'>
                                    <div className='relative'>
                                        <img src={drake} alt="drake" width={58} className='rounded-full' />
                                        <img src={spotify} alt="spotify-logo" width={20} className='absolute left-[75%] bottom-[2%]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-white font-semibold'>Scorpion (feat Quavo)</p>
                                        <span className='text-slate-300 '>Drake - Hip-Hop </span>
                                    </div>
                                </div>
                                {/* controlers */}
                                <div className=' lg:col-span-4 md:col-span-6 col-span-12 flex justify-center lg:justify-center md:justify-end gap-8'>
                                    <div className='flex gap-2'>
                                        <div className='rounded-full p-2 flex items-center border border-gray-400 hover:bg-gray-600/30'>
                                            <FaStepBackward size={30} className='text-white p-2' />
                                        </div>
                                        <div className='rounded-full  p-2 flex items-center border border-gray-400 hover:bg-gray-600/30'>
                                            <FaPause size={30} className='text-white p-2' />
                                        </div>
                                        <div className='rounded-full  p-2 flex items-center border border-gray-400 hover:bg-gray-600/30'>
                                            <FaStepForward size={30} className='text-white p-2' />
                                        </div>
                                    </div>

                                </div>
                                {/* volume  */}
                                <div className='lg:col-span-2 col-span-8 flex flex-col items-center pl-5'>
                                    <p className='text-white text-lg'>Volume</p>
                                    <MuiSlider />
                                </div>
                                {/* interact */}
                                <div className='lg:col-span-2 col-span-4 flex lg:justify-center justify-end gap-4 pr-5'>
                                    <TfiMenuAlt size={24} className='text-white' />
                                    <MdModeComment size={24} className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    );
}

export default Automotive;
