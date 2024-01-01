import Card from '../../Components/Card';
import React from 'react';
import sun from '../../assets/Images/icon-sun-cloud.webp';
import kitchen from '../../assets/Images/kitchen.jpg';
import { wheatherData, wheatherOptions } from './utils';
import { Bar } from 'react-chartjs-2';
import Tabs from '../../Components/tabs';
import attic from '../../assets/Images/attic.jpg';
import living from '../../assets/Images/living.jpg';
import {
    BarElement,
    CategoryScale,
    LinearScale,
    Chart as ChartJS,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement);
const SmartHome = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const images = {
        '1': kitchen,
        '2': living,
        '3': attic,
    };
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 lg:gap-3 gap-y-10'>
                <div className='lg:col-span-7 col-span-12 py-3'>
                    <Card>
                        <div className='flex flex-col relative h-full pb-8'>
                            <img src={images[value]} alt='room' className='rounded-2xl image h-[380px] shadow-lg' />
                            <div className='absolute bottom-0 w-full flex flex-col justify-between'>
                                <div className='flex justify-between items-center'>
                                    <h6 className='text-xl font-medium'>Cameras</h6>
                                    <Tabs tabs={['Kitchen', 'Living', 'Attic']} value={value} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Weather Card */}
                <div className='lg:col-span-5 col-span-12 py-3'>
                    <div className='flex flex-col gap-y-4 h-full'>
                        <Card >
                            <div className='flex flex-col relative h-full'>
                                <div className='wheather-card p-4'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h3 className='font-bold text-gray-400'>Weather Today</h3>
                                            <span className='text-white text-wrap text-2xl font-bold'>San Francisco - 29°C</span>
                                        </div>
                                        <div className='flex flex-col items-center '>
                                            <img src={sun} alt='sun' width={95} height={68} />
                                            <span className='text-xl font-semibold text-white'>Sunny</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-80 absolute bottom-0 w-full'>
                                    <Bar options={wheatherOptions} data={wheatherData} />
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>

            </div >
        </div >
    );
}

export default SmartHome;
