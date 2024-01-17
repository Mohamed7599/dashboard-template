import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import CircularSliderWithChildren from 'react-circular-slider-svg';
import { FaDotCircle } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import Card from '../../Components/Card';
import Tabs from '../../Components/tabs';
import attic from '../../assets/Images/attic.jpg';
import sun from '../../assets/Images/icon-sun-cloud.webp';
import kitchen from '../../assets/Images/kitchen.jpg';
import living from '../../assets/Images/living.jpg';
import temperature from '../../assets/icons/icons8-high-temperature-100.png';
import humidity from '../../assets/icons/icons8-humidity-100.png';
import lights from '../../assets/icons/icons8-lights-100.png';
import snow from '../../assets/icons/icons8-snow-100.png';
import wifi from '../../assets/icons/icons8-wifi-100.png';
import { consumptionData, consumptionOptions, wheatherData, wheatherOptions } from './utils';



import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);
const SmartHome = () => {
    const [switchState, setSwitchState] = useState(true);
    const [value1, setValue1] = useState(21);
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSwitchToggle = () => {
        setSwitchState(prevState => !prevState);
    };

    const tabs = [{
        title: 'Kitchen',
    }, {

        title: 'Living',
    }, {

        title: 'Attic',
    }]
    const images = {
        '1': kitchen,
        '2': living,
        '3': attic,
    };
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 lg:gap-7 gap-y-28'>
                <div className='col-span-12 lg:col-span-7'>
                    <Card className={'h-full flex flex-col gap-5'} >
                        <div className='rounded-2xl relative h-[400px] -mt-10'>
                            <img src={images[value]} alt='room' className='rounded-2xl h-full w-full' />
                            <div className='absolute inset-0 bg-black bg-opacity-40 rounded-2xl h-full'></div>
                            <div className=' absolute top-1 w-full flex justify-between p-6 items-center'>
                                <span className='text-lg text-white'>17.05.2021 4:34PM</span>
                                <span className='text-sm bg-gray-300 text-gray-500 font-medium uppercase flex justify-center items-center p-1 rounded-lg gap-1'><FaDotCircle className='text-[#ec407a]' /> Recording</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h6 className='text-xl font-medium'>Cameras</h6>
                            <Tabs tabs={tabs} value={value} onChange={handleChange} />
                        </div>

                    </Card>
                </div>
                <div className='lg:col-span-5 col-span-12'>
                    <Card className={'relative h-full flex flex-col justify-between'}>
                        <Card bgColor={'bg-[#ec407a]'} className={'-mt-10'}>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='font-bold text-gray-400'>Weather Today</h3>
                                    <span className='text-white text-wrap text-2xl font-bold'>San Francisco - 29°C</span>
                                </div>
                                <div className='flex flex-col items-center '>
                                    <img src={sun} alt='sun' width={95} height={68} />
                                    <span className='text-xl font-semibold text-white'>Sunny</span>
                                </div>
                            </div>
                        </Card>
                        <div className='lg:h-[78%] h-[300px] mt-3'>
                            <Bar data={wheatherData} options={wheatherOptions} />
                        </div>
                    </Card>
                </div>

            </div >
            <div className='grid grid-cols-12 gap-x-6 gap-y-3'>
                <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                    <Card className={'h-full'}>
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
                    <Card className={'h-full'}>
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
                    <Card className={'h-full'}>
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
                    <Card className={'h-full'}>
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
                    <Card title={'Device Limit'} isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full'}>
                        <div className='grid grid-cols-12 items-center gap-2'>
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
                    <Card title={'Consumption by room'} isTitleDefaultColor={true} titleSize={'text-lg'} className={'flex flex-col justify-center gap-8 h-full'}>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-6 relative'>
                                <Doughnut data={consumptionData} options={consumptionOptions} />
                                <div className='absolute inset-0 top-[35%] flex flex-col items-center'>
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
            <hr className='my-6' />
            <div className='grid grid-cols-12 gap-5 items-stretch'>
                <div className=' col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full w-full'}>
                        <div className='p-2'>
                            <div className='flex justify-between px-1 items-center'>
                                <span className={`text-lg ${switchState ? 'text-white' : 'text-gray-400'}`}>
                                    {switchState ? 'On' : 'Off'}
                                </span>
                                <Switch onChange={handleSwitchToggle} checked={switchState} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img src={humidity} alt="humidity-icon" width={65} className='pl-3' />
                                <p className={`text-xl font-semibold text-gray-500 ${switchState ? 'text-white' : 'text-gray-400'}`}>Humidity</p>
                                <span className={`${switchState ? 'text-white' : 'text-gray-400'}`}>Inactive since: 2 days</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card bgColor={'bg-[#e91e63]'} className={'h-full w-full'}>
                        <div className='p-2'>
                            <div className='flex justify-between px-1 items-center'>
                                <span className=' text-lg text-white'>On</span>
                                <Switch defaultChecked className='checked-switch' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img src={temperature} alt="humidity-icon" width={65} className='pl-3' />
                                <p className='text-xl font-semibold text-white'>Temperature</p>
                                <span className='text-white'>active</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full w-full'}>
                        <div className='p-2'>
                            <div className='flex justify-between px-1 items-center'>
                                <span className=' text-lg text-gray-400'>Off</span>
                                <Switch />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img src={snow} alt="humidity-icon" width={65} className='pl-3' />
                                <p className='text-xl font-semibold text-gray-500'>Air Conditioner</p>
                                <span>Inactive since:1 hour</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className=' col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full w-full'}>
                        <div className='p-2'>
                            <div className='flex justify-between px-1 items-center'>
                                <span className=' text-lg text-gray-400'>Off</span>
                                <Switch />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img src={lights} alt="humidity-icon" width={65} className='pl-3' />
                                <p className='text-xl font-semibold text-gray-500'>Lights</p>
                                <span>Inactive since: w7 min</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className=' col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} bgColor={'bg-[#e91e63]'} className={'h-full w-full'}>
                        <div className='p-2'>
                            <div className='flex justify-between px-1 items-center'>
                                <span className=' text-lg text-white'>Off</span>
                                <Switch defaultChecked className='checked-switch' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <img src={wifi} alt="humidity-icon" width={65} className='pl-3' />
                                <p className='text-xl font-semibold text-white'>Wi-fi</p>
                                <span className='text-white'>Active</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className=' col-span-6 md:col-span-4 lg:col-span-2 flex flex-grow'>
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full w-full'}>
                        <div className='p-2 flex flex-col gap-2 justify-center items-center h-full'>
                            <TiPlus className='text-4xl text-gray-500' />
                            <p className='text-2xl font-bold text-gray-500 text-center'>New device</p>
                        </div>
                    </Card>
                </div>
            </div >
        </div >
    );
}

export default SmartHome;
