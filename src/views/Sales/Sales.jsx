/* eslint-disable react/prop-types */
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Card from '../../Components/Card';
import CustomTable from '../../Components/CustomeTable.jsx';
import { SalesByAgeData, SalesByAgeOptions, channelsData, channelsOptions, productsCols, productsTable, revenueData, revenueOptions, salesByCountryCols, salesByCountryTable } from './utils.jsx';
ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    PointElement,
    LineElement, BarElement, Title,
    Tooltip, Legend);



const Sales = () => {
    return (
        <div className='pr-5 py-3 flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='lg:col-span-4 col-span-12'>
                    <Card title='Sales' date='6 May - 7 May'  >
                        <h3 className='text-2xl font-extrabold'>$24,000</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+55% <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <Card title='Customers' date='6 May - 7 May'  >
                        <h3 className='text-2xl font-extrabold'>3.200</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+12% <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <Card title='Avg, revenue' date='6 May - 7 May' >
                        <h3 className='text-2xl font-extrabold'>$1.200</h3>
                        <span className='text-base font-semibold text-[#4caf50]'>+$213 <span className='text-gray-400 font-medium'>Since last month</span></span>
                    </Card>
                </div>
            </div>
            {/* finish of the stats cards and start of the graphs */}
            <div id='graphs' className=' grid grid-cols-12 gap-5' >
                <div className='lg:col-span-5  col-span-12'>
                    <Card title='Sales' isDefaultColor={true} titleSize={'text-lg'}>
                        <div className=' h-80 flex justify-center my-3'>
                            <Pie data={channelsData} options={channelsOptions} className='h-3/4' />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-500 lg:w-3/4 w-[70%] text-wrap lg:text-base text-sm'>More than <b>1,200,000</b> sales are made using referral marketing, and <b>700,000</b> are from social media.</p>
                            <button className='bg-[#f0f2f5] px-5 rounded-lg uppercase font-bold lg:text-sm text-xs text-gray-500'>Read more </button>
                        </div>
                    </Card>
                </div>
                <div className='lg:col-span-7 col-span-12'>
                    <Card title='Revenue' isDefaultColor={true} titleSize={'text-lg'} className="flex flex-col h-[50vh]">
                        <div className='flex-1 h-96'>
                            <Line options={revenueOptions} data={revenueData} />
                        </div>
                    </Card>
                </div>

            </div >
            <div className='grid grid-cols-12 gap-5' >
                <div className='lg:col-span-8 col-span-12'>
                    <Card title='Revenue' isDefaultColor={true} titleSize={'text-lg'}>
                        <div className='h-96 w-full'>
                            <Bar options={SalesByAgeOptions} data={SalesByAgeData} />
                        </div>
                    </Card>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <Card title='Sales by Country' isDefaultColor={true} titleSize={'text-lg'}>
                        <div className='flex flex-col h-full w-full'>
                            <CustomTable data={salesByCountryTable} columns={salesByCountryCols} />
                        </div>
                    </Card>
                </div>
            </div>
            <div className='col-span-12'>
                <Card title='Sales by Country' isDefaultColor={true} titleSize={'text-lg'}>
                    <div className='flex flex-col h-full w-full pt-4'>
                        <CustomTable data={productsTable} columns={productsCols} />
                    </div>
                </Card>
            </div>
        </div >
    );
}

export default Sales;
