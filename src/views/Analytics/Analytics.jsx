import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
} from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaCouch } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { MdEdit, MdLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Card from '../../Components/Card';
import CustomTable from '../../Components/CustomeTable.jsx';
import firstUnit from '../../assets/Images/product-1-min.jpg';
import scndUnit from '../../assets/Images/product-2-min.jpg';
import thrdUnit from '../../assets/Images/product-3-min.jpg';
import Maps from './Map.jsx';
import { CompletedTasksOptions, DailySalesData, DailySalesOptions, salesByCountryCols, salesByCountryTable, websiteViewsData, websiteViewsOptions } from './utils.jsx';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);
const Analytics = () => {
    return (
        <div className='py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-3'>
                <div className="col-span-12">
                    <Card className={'relative lg:grid lg:grid-cols-12 flex flex-col-reverse'} >
                        <div className='col-span-12 lg:col-span-6 pt-10'>
                            <div className=' absolute top-[10%] translate-y-[-90%] left-7 flex items-center gap-5'>
                                <span className='bg-gradient-success p-4 rounded-xl'>
                                    <TbWorld size={30} className='text-white rounded-lg ' />
                                </span>
                                <h3 className=' text-lg font-bold relative top-5'>
                                    Sales by Country
                                </h3>
                            </div>
                            <div className='h-full w-full overflow-hidden'>
                                <CustomTable data={salesByCountryTable} columns={salesByCountryCols} className />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 h-96 pt-10 lg:pt-0 '>
                            <Maps />
                        </div>
                    </Card>
                </div>
            </div>
            {/* graphs */}
            <div className='grid grid-cols-12 gap-3'>
                <Card className={'relative h-[280px] col-span-12 md:col-span-6 lg:col-span-4 mt-12'} >
                    <div className='flex flex-col justify-end h-full'>
                        <Card bgColor={'bg-gradient-primary absolute top-[-12%] left-5 right-5'}>
                            <div className=''>
                                <Bar data={websiteViewsData} options={websiteViewsOptions} />
                            </div>
                        </Card>
                        <div className='pl-3 flex flex-col gap-3'>
                            <div>
                                <h3 className='text-lg font-semibold'>Website Views</h3>
                                <span className='text-gray-600'>Last Campaign Performance
                                </span>
                            </div>
                            <hr />
                            <span className='text-gray-500 flex items-center gap-1'><LuClock2 />campaign sent 2 days ago
                            </span>
                        </div>
                    </div>
                </Card>
                <Card className={'relative h-[280px] col-span-12 md:col-span-6 lg:col-span-4 mt-12'} >
                    <div className='flex flex-col justify-end h-full'>
                        <Card bgColor={'bg-gradient-success absolute top-[-12%] left-5 right-5'}>
                            <div className=''>
                                <Line data={DailySalesData} options={DailySalesOptions} />
                            </div>
                        </Card>
                        <div className='pl-3 flex flex-col gap-3'>
                            <div>
                                <h3 className='text-lg font-semibold'>Daily Sales</h3>
                                <span className='text-gray-500 font-light'><b className='font-semibold'>(+15%)</b> increase in today sales.
                                </span>
                            </div>
                            <hr />
                            <span className='text-gray-500 flex items-center gap-1'><LuClock2 />updated 4 min ago
                            </span>
                        </div>
                    </div>
                </Card>
                <Card className={'relative h-[280px] col-span-12 lg:col-span-4 mt-12'} >
                    <div className='flex flex-col justify-end h-full'>
                        <Card bgColor={'bg-gradient-dark absolute top-[-12%] left-5 right-5'}>
                            <div className=''>
                                <Line data={DailySalesData} options={CompletedTasksOptions} />
                            </div>
                        </Card>
                        <div className='pl-3 flex flex-col gap-3'>
                            <div>
                                <h3 className='text-lg font-semibold'>Completed Tasks</h3>
                                <span className='text-gray-600'>Last Campaign Performance
                                </span>
                            </div>
                            <hr />
                            <span className='text-gray-500 flex items-center gap-1'><LuClock2 />Just Updated
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
            {/* about Section */}
            <div className='grid grid-cols-12 gap-5'>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-dark p-4 rounded-xl'>
                            <FaCouch size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Bookings
                            </h6>
                            <span className='font-bold text-3xl'>281</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+55%</span> than last week</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-primary p-4 rounded-xl'>
                            <BiSolidBarChartAlt2 size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Today&apos;s Users
                            </h6>
                            <span className='font-bold text-3xl'>2,300</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+3%</span> than last month</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-6 md:mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-success p-4 rounded-xl'>
                            <FaShop size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Revenue
                            </h6>
                            <span className='font-bold text-3xl'>34k</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+1%</span> than yesterday</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-6 lg:mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-info p-4 rounded-xl'>
                            <IoPersonAddSharp size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-end pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Followers
                            </h6>
                            <span className='font-bold text-3xl'>+91</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'>Just updated</span>
                </Card>
            </div>
            {/* Units */}
            <div className='grid grid-cols-12 gap-4 mt-10'>
                <Card className={' col-span-12 md:col-span-6 lg:col-span-4 relative group'}>
                    <div className='image-container relative '>
                        <img src={firstUnit} alt="apartment" className='rounded-xl z-50 translate-y-[-12%] w-full group-hover:-translate-y-24 transition-all duration-150 ease-in' />
                        <div className='absolute bottom-14 left-0 right-0 flex justify-center items-center gap-10 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <IoIosRefresh className='text-[#ec407a] cursor-pointer' size={20} />
                            <MdEdit className='text-[#1a73e8] cursor-pointer' size={20} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 pb-5 cursor-default'>
                        <h4 className='text-2xl hover:text-[#ec407a]'>Cozy 5 Stars Apartment</h4>
                        <p className='text-lg text-gray-500 text-center font-light'>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between px-3 pt-3'>
                        <span className='text-lg text-gray-400'>$8.99/night</span>
                        <span className='flex gap-2 items-center text-gray-500'><MdLocationOn size={18} /> Barcelona, Spain
                        </span>
                    </div>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-4 relative group mt-16 md:mt-0'}>
                    <div className='image-container relative '>
                        <img src={scndUnit} alt="apartment" className='rounded-xl z-50 translate-y-[-12%] w-full group-hover:-translate-y-24 transition-all duration-150 ease-in' />
                        <div className='absolute bottom-14 left-0 right-0 flex justify-center items-center gap-10 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <IoIosRefresh className='text-[#ec407a] cursor-pointer' size={20} />
                            <MdEdit className='text-[#1a73e8] cursor-pointer' size={20} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 pb-5 cursor-default'>
                        <h4 className='text-2xl hover:text-[#ec407a]'>Office Studio</h4>
                        <p className='text-lg text-gray-500 text-center font-light px-5'>The place is close to Metro Station and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the night life in London, UK.
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between px-3 pt-3'>
                        <span className='text-lg text-gray-400'>$1.119/night</span>
                        <span className='flex gap-2 items-center text-gray-500'><MdLocationOn size={18} /> London, UK
                        </span>
                    </div>
                </Card>
                <Card className={'col-span-12 lg:col-span-4 relative group mt-16 lg:mt-0'}>
                    <div className='image-container relative '>
                        <img src={thrdUnit} alt="apartment" className='rounded-xl z-50 translate-y-[-12%] w-full group-hover:-translate-y-24 transition-all duration-150 ease-in' />
                        <div className='absolute bottom-14 left-0 right-0 flex justify-center items-center gap-10 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <IoIosRefresh className='text-[#ec407a] cursor-pointer' size={20} />
                            <MdEdit className='text-[#1a73e8] cursor-pointer' size={20} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 pb-5 cursor-default'>
                        <h4 className='text-2xl hover:text-[#ec407a]'>Beautiful Castle</h4>
                        <p className='text-lg text-gray-500 text-center font-light px-5'>The place is close to Metro Station and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                         Milan.
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between px-3 pt-3'>
                        <span className='text-lg text-gray-400'>$459/night</span>
                        <span className='flex gap-2 items-center text-gray-500'><MdLocationOn size={18} /> Milan, Italy
                        </span>
                    </div>
                </Card>
            </div>
        </div>

    );
}

export default Analytics;
