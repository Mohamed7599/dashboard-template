import Card from '../../Components/Card';
import React, { useState } from 'react';
import sun from '../../assets/Images/icon-sun-cloud.webp';
import kitchen from '../../assets/Images/kitchen.jpg';
import { wheatherData, wheatherOptions, consumptionData, consumptionOptions } from './utils';
import { Bar, Doughnut } from 'react-chartjs-2';
import Tabs from '../../Components/tabs';
import attic from '../../assets/Images/attic.jpg';
import living from '../../assets/Images/living.jpg';
import CircularSliderWithChildren from 'react-circular-slider-svg';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Chart as ChartJS,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);
const SmartHome = () => {
    const [value1, setValue1] = useState(21);
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
            {/* <div className='grid grid-cols-12 lg:gap-3 gap-y-10'>
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

            </div > */}
            <div className='grid grid-cols-12 gap-x-6 gap-y-3'>
                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                    <Card>
                        <div className='flex flex-col justify-center items-center gap-2 p-3'>
                            <p className='text-6xl font-semibold text-[#ec407a]'>25<small className='text-lg'> &deg;C</small></p>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-lg font-medium'>Living Room </h3>
                                <span className='text-gray-400'>Temprature</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                    <Card>
                        <div className='flex flex-col justify-center items-center gap-2 p-3'>
                            <p className='text-6xl font-semibold text-[#ec407a]'>44<small className='text-lg'> %</small></p>
                            <div className='flex flex-col items-center '>
                                <h3 className='text-lg font-medium'>Outside</h3>
                                <span className='text-gray-400 text-center'>Humidity</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                    <Card>
                        <div className='flex flex-col justify-center items-center gap-2 p-3'>
                            <p className='text-6xl font-semibold text-[#ec407a]'>87<small className='text-lg'>m<sup>3</sup></small></p>
                            <div className=' flex flex-col items-center'>
                                <h3 className='text-lg font-medium'>Water </h3>
                                <span className='text-gray-400 text-center'>Consumption</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                    <Card>
                        <div className='flex flex-col justify-center items-center gap-2 p-3'>
                            <p className='text-6xl font-semibold text-[#ec407a]'>417<small className='text-lg'>GB</small></p>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-lg font-medium'>Internet</h3>
                                <span className='text-gray-400 text-center'>All devices</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-x-6 gap-y-3'>
                <div className='col-span-12 lg:col-span-6'>
                    <Card title={'Device Limit'} isDefaultColor={true} titleSize={'text-lg'}>
                        <div className='grid grid-cols-12 items-center gap-2 p-3'>
                            <div className='relative cursor-default col-span-12 lg:col-span-6 mx-auto'>
                                <CircularSliderWithChildren

                                    size={240}
                                    trackWidth={6}
                                    minValue={16}
                                    maxValue={38}
                                    startAngle={50}
                                    endAngle={310}
                                    angleType={{
                                        direction: "cw",
                                        axis: "-y"
                                    }}
                                    handle1={{
                                        value: value1,
                                        onChange: (v) => setValue1(v),
                                    }}
                                    arcColor='#ec407a'
                                >

                                </CircularSliderWithChildren>
                                <p className='text-4xl font-bold absolute top-28 left-24' style={{ textAlign: "center" }}>
                                    {Math.ceil(value1)}<span className='text-gray-400'>&deg;C</span>
                                </p>
                                <div className='relative'>
                                    <div className='absolute bottom-6 left-10 w-full'>
                                        <span className='text-lg text-gray-400'>16 &deg;C</span>
                                        <span className='text-lg  px-2 relative bottom-6'>Temprature</span>
                                        <span className='text-lg text-gray-400'>38 &deg;C</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='flex justify-between pr-4 py-2'>
                                    <p className='font-bold'>Current Temprature</p>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                                <hr />
                                <div className='flex justify-between pr-4 py-2'>
                                    <p className='font-bold'>Humidity</p>
                                    <span className='text-gray-400 font-normal'>57%</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                    <Card title={'Consumption by room'} isDefaultColor={true} titleSize={'text-lg'} className={'flex flex-col justify-start gap-8'}>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-6 relative'>
                                <Doughnut data={consumptionData} options={consumptionOptions} />
                                <div className='absolute bottom-16 left-44 flex flex-col items-center'>
                                    <p className='text-3xl font-bold'>417.3</p>
                                    <span className='text-gray-400 text-lg font-semibold'>WATTS</span>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
                                <div className='flex justify-between pr-4 py-2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='legend bg-[#e91e63]'></span>
                                        <p className='font-bold '>living Room</p>
                                    </div>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                                <hr />
                                <div className='flex justify-between pr-4 py-2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='legend bg-[#646c7b]'></span>
                                        <p className='font-bold '>living Room</p>
                                    </div>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                                <hr />
                                <div className='flex justify-between pr-4 py-2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='legend bg-[#2a84eb]'></span>
                                        <p className='font-bold '>living Room</p>
                                    </div>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                                <hr />
                                <div className='flex justify-between pr-4 py-2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='legend bg-[#5cb360]'></span>
                                        <p className='font-bold'>living Room</p>
                                    </div>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                                <hr />
                                <div className='flex justify-between pr-4 py-2'>
                                    <div className='flex items-center gap-2'>
                                        <span className='legend bg-[#fe9e19]'></span>
                                        <p className='font-bold '>living Room</p>
                                    </div>
                                    <span className='text-gray-400 font-normal'>21&deg;C</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div >
        </div >
    );
}

export default SmartHome;
