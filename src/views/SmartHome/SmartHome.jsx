import Card from '../../Components/Card';
import React from 'react';
import sun from '../../assets/Images/icon-sun-cloud.webp';
const SmartHome = () => {
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 lg:gap-3 gap-y-10'>
                <div className='lg:col-span-7 col-span-12 py-3'>
                    <Card>

                    </Card>
                </div>
                <div className='lg:col-span-5 col-span-12 py-3'>
                    <div className='flex flex-col gap-y-4 '>
                        <Card>
                            <div className='flex flex-col'
                                style={{
                                    backgroundImage: 'linear-gradient(195deg, #ec407a, #d81b60)',
                                    borderRadius: '10px',
                                    boxShadow: '0 5px 5px rgba(236, 64, 122, 0.5)',
                                    padding: '20px',
                                    marginBottom: '20px',
                                    position: 'relative',
                                    top: '40%',
                                    transform: 'translateY(-40%)'
                                }}
                            >
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='font-bold text-gray-400'>wheather Today</h3>
                                        <span className='text-white text-wrap text-2xl font-bold'>San Francisco - 29°C</span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <img src={sun} alt='sun' width={95} height={68} />
                                        <span className='text-xl font-semibold text-white'>Sunny</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div>

                        </div>

                    </div>
                </div>

            </div >
        </div >
    );
}

export default SmartHome;
