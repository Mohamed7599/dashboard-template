import Card from '../../Components/Card';
import CustomTable from '../../Components/CustomeTable.jsx';
import { salesByCountryCols, salesByCountryTable } from './utils.jsx';
import React from 'react';
import { TbWorld } from "react-icons/tb";
import Maps from './Map.jsx';
const Analytics = () => {
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-3'>
                <div className="col-span-12">
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'relative lg:grid lg:grid-cols-12 flex flex-col-reverse'} >
                        <div className='col-span-12 lg:col-span-6 pt-10'>
                            <div className=' absolute top-[10%] translate-y-[-90%] left-7 flex items-center gap-5'>
                                <span className='bg-gradient-success p-4 rounded-xl'>
                                    <TbWorld size={30} className='text-white rounded-lg ' />
                                </span>
                                <h3 className=' text-xl font-bold relative top-5'>
                                    Sales by Country
                                </h3>
                            </div>
                            <div className='h-full w-full '>
                                <CustomTable data={salesByCountryTable} columns={salesByCountryCols} />
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 h-96 pt-10 lg:pt-0 '>
                            <Maps />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
