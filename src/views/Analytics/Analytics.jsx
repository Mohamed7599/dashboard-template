import Card from '../../Components/Card';
import CustomTable from '../../Components/CustomeTable.jsx';
import { salesByCountryCols, salesByCountryTable } from './utils.jsx';
import React from 'react';
import { TfiWorld } from "react-icons/tfi";
const Analytics = () => {
    return (
        <div className='pr-5 py-8 flex flex-col gap-5'>
            <div className='grid grid-cols-12 gap-3'>
                <div className="col-span-12">
                    <Card isTitleDefaultColor={true} titleSize={'text-lg'} className={'h-full relative'} >
                        <div className='grid-cols-6'>
                            <div className=' absolute top-[10%] translate-y-[-50%] left-5 flex items-center gap-3 '>
                                <span className=' bg-gradient-success p-5 rounded-lg'>
                                    <TfiWorld size={30} className='text-white rounded-lg ' />
                                </span>
                                <h3 className=' text-lg font-semibold relative top-3'>
                                    Sales by Country
                                </h3>
                            </div>
                            <div className='flex h-full w-full col-span-6'>
                                <CustomTable data={salesByCountryTable} columns={salesByCountryCols} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
