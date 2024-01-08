import React from 'react';
import Card from '../../Components/Card';
import sun from '../../assets/Images/icon-sun-cloud.webp';
import { FaCarAlt } from "react-icons/fa";
import { MdBatteryFull } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoVolumeMedium } from "react-icons/io5";
import tesla from '../../assets/Images/tesla-model-s.png';
import teslaLayer from '../../assets/Images/waves-white.svg';
import { IoMdMap } from "react-icons/io";

const Automotive = () => {
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
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
                        <img src={tesla} alt="tesla car" className='absolute -translate-y-32 left-56  h-auto' />
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
                        <Card className={'col-span-12 lg:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <FaCarAlt size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                                    <h6 className='text-lg text-gray-500'>
                                        Today&apos;s Trip
                                    </h6>
                                    <span className='font-semibold text-3xl'>145 Km</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 lg:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <MdBatteryFull size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                                    <h6 className='text-lg text-gray-500'>
                                        Battery Health
                                    </h6>
                                    <span className='font-semibold text-3xl'>99 %</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 lg:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <BsSpeedometer2 size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                                    <h6 className='text-lg text-gray-500'>
                                        Average Speed
                                    </h6>
                                    <span className='font-semibold text-3xl'>56 Km/h</span>
                                </div>
                            </div>
                        </Card>
                        <Card className={'col-span-12 lg:col-span-6'}>
                            <div className='flex items-center justify-between gap-5 relative bottom-[50%]  '>
                                <span className='bg-gradient-dark p-4 rounded-xl'>
                                    <IoVolumeMedium size={30} className='text-white rounded-lg ' />
                                </span>
                                <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                                    <h6 className='text-lg text-gray-500'>
                                        Music Volume
                                    </h6>
                                    <span className='font-semibold text-3xl'> 15/100</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Automotive;
