import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { TbWorld } from "react-icons/tb";
import Card from '../../Components/Card';
import { FaCouch } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";

import CustomTable from '../../Components/CustomeTable.jsx';
import { salesByCountryCols, salesByCountryTable, websiteViewsData, websiteViewsOptions, DailySalesData, DailySalesOptions, CompletedTasksOptions } from './utils.jsx';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
} from 'chart.js';
import Maps from './Map.jsx';
import { LuClock2 } from "react-icons/lu";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);
const Analytics = () => {
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
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
            <div className='grid grid-cols-12 gap-5'>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-dark p-4 rounded-xl'>
                            <FaCouch size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-center pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Rooms
                            </h6>
                            <span className='font-bold text-3xl'>350</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+55%</span> than last week</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-primary p-4 rounded-xl'>
                            <BiSolidBarChartAlt2 size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-center pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Today&apos;s Users
                            </h6>
                            <span className='font-bold text-3xl'>2,300</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+3%</span> than last month</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-success p-4 rounded-xl'>
                            <FaShop size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-center pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Revenue
                            </h6>
                            <span className='font-bold text-3xl'>34k</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'><span className='text-[#4caf50] font-semibold'>+1%</span> than yesterday</span>
                </Card>
                <Card className={'col-span-12 md:col-span-6 lg:col-span-3 mt-12'}>
                    <div className='flex items-center justify-between gap-5 relative bottom-[40%]  '>
                        <span className='bg-gradient-info p-4 rounded-xl'>
                            <IoPersonAddSharp size={30} className='text-white rounded-lg ' />
                        </span>
                        <div className='flex flex-col gap-1 relative top-12 items-center pb-4'>
                            <h6 className='text-lg text-gray-500'>
                                Bookings
                            </h6>
                            <span className='font-bold text-3xl'>281</span>
                        </div>
                    </div>
                    <hr className='pb-3' />
                    <span className='text-lg font-light text-gray-400'>Just updated</span>
                </Card>
            </div>
        </div>

    );
}

export default Analytics;
