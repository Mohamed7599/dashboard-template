import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs({ tabs, value, onChange }) {

    return (
        <TabContext value={value}>
            <TabList onChange={onChange} aria-label="lab API tabs example" className={'bg-[#f8f9fa] px-3 rounded-2xl block'}>
                {tabs.map((tab, index) => {
                    return (<Tab label={tab} value={String(index + 1)} key={index} classsName={'bg-blue-600'} />)
                })}
            </TabList>
        </TabContext>
    );
}