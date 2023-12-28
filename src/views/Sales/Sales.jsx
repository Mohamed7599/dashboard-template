import React from 'react';
import Card from '../../Components/Card';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { channelsData, channelsOptions, revenueData, revenueoptions } from './utils.jsx';
ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    PointElement,
    LineElement, Title,
    Tooltip, Legend);
const Sales = () => {
    return (
        <div className='pr-5 py-3 flex flex-col gap-5'>
            <div id='STATS' className='grid grid-cols-12 gap-3'>
                <div className='col-span-4'>
                    <Card title='Sales' date='6 May - 7 May'  >
                        <h3 className='text-2xl font-extrabold'>$24,000</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+55% <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
                <div className='col-span-4'>
                    <Card title='Customers' date='6 May - 7 May'  >
                        <h3 className='text-2xl font-extrabold'>3.200</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+12% <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
                <div className='col-span-4'>
                    <Card title='Avg, revenue' date='6 May - 7 May' >
                        <h3 className='text-2xl font-extrabold'>$1.200</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+$213 <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
            </div>
            {/* finish of the stats cards and start of the graphs */}
            <div id='graphs' className='py-3 grid grid-cols-12 gap-3' >
                <div className='col-span-4'>
                    <Card title='Sales' isDefaultColor={true}>
                        <div className=' h-64 flex justify-center my-3'>
                            <Pie data={channelsData} options={channelsOptions} className='h-3/4' />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-500 w-3/4 text-wrap'>More than <b>1,200,000</b> sales are made using referral marketing, and <b>700,000</b> are from social media.</p>
                            <button className='bg-[#f0f2f5] px-5 rounded-lg uppercase font-bold text-sm text-gray-500'>Read more </button>
                        </div>
                    </Card>
                </div>
                <div className='col-span-8'>
                    <Card title='Revenue' isDefaultColor={true}>
                        <div className='h-80'>
                            <Line options={revenueoptions} data={revenueData}  />
                        </div>
                    </Card>
                </div>
            </div >
        </div >
    );
}

export default Sales;
