import React from 'react';
import Card from '../../Components/Card';
import uk from '../../assets/icons/united-kingdom.png';
import us from '../../assets/icons/united-states.png';
import germany from '../../assets/icons/germany.png';
import canada from '../../assets/icons/canada.png';
import france from '../../assets/icons/france.png';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
} from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { channelsData, channelsOptions, revenueData, revenueOptions, SalesByAgeData, SalesByAgeOptions } from './utils.jsx';
import { data } from 'autoprefixer';
ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    PointElement,
    LineElement, BarElement, Title,
    Tooltip, Legend);
const table = [
    {
        img: us,
        country: 'United States',
        sales: 720,
        bounce: 20
    },
    {
        img: uk,
        country: 'United Kingdom',
        sales: 620,
        bounce: 30
    },
    {
        img: germany,
        country: 'Germany',
        sales: 520,
        bounce: 40
    },
    {
        img: canada,
        country: 'Canada',
        sales: 420,
        bounce: 50
    },
    {
        img: france,
        country: 'France',
        sales: 320,
        bounce: 60
    }
];
const cols = [
    {
        Header: 'Country',
        accessor: 'country',
        Cell: ({ row }) => {
            return (
                <div className='flex gap-2 pl-2'>
                    <img src={row.img} alt={row.country} width={24} />
                    <span className='text-lg font-medium'>{row.country}</span>
                </div>
            )
        },
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        Cell: ({ row }) => {
            return (
                <span className='text-lg font-medium'>{row.sales}</span>
            )
        },
    },
    // Add other columns as needed...

    {
        Header: 'Bounce',
        accessor: 'bounce',
        Cell: ({ row }) => {
            return (
                <span className='text-lg font-medium'>{row.bounce}</span>
            )
        },
    },
];

const Sales = () => {
    return (
        <div className='pr-5 py-3 flex flex-col gap-5'>
            <div id='STATS' className='grid grid-cols-12 gap-3'>
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
                    <Card title='Sales' isDefaultColor={true}>
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
                    <Card title='Revenue' isDefaultColor={true} className="flex flex-col h-[50vh]">
                        <div className='flex-1 h-96'>
                            <Line options={revenueOptions} data={revenueData} />
                        </div>
                    </Card>
                </div>

            </div >
            <div className='grid grid-cols-12 gap-5' >
                <div className='lg:col-span-8 col-span-12'>
                    <Card title='Revenue' isDefaultColor={true}>
                        <div className='h-96 w-full'>
                            <Bar options={SalesByAgeOptions} data={SalesByAgeData} />
                        </div>
                    </Card>
                </div>
                <div className='lg:col-span-4 col-span-12'>
                    <Card title='Sales by Country' isDefaultColor={true}>
                        <div className='flex flex-col h-full w-full'>
                            <table className='w-full my-2 flex-grow'>
                                <thead>
                                    <tr>
                                        {cols.map((col) => (
                                            <th className='text-center first:text-left first:pl-2 w-fit border-b border-gray-300 pb-2' key={col.Header}>{col.Header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='flex-grow'>
                                    {table.map((row, index) => (
                                        <tr key={index} className='flex-grow border-b border-dashed border-gray-300 last:border-none'>
                                            {cols.map((col) => (
                                                <td key={col.accessor} className='first:text-left text-center'>{col.Cell ? col.Cell({ row }) : row[col.accessor]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

            </div>
        </div >
    );
}

export default Sales;
