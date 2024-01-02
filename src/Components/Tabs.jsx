import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs({ tabs, value, onChange }) {

    return (
        <TabContext value={value} sx={{
            //change the height of the TABS
        }}
            >
            <TabList onChange={onChange} aria-label="lab API tabs example" className={'bg-[#f8f9fa] px-3 rounded-2xl block'}>
                {tabs.map((tab, index) => {
                    return (<Tab label={tab} value={String(index + 1)} key={index} sx={{
                        textTransform: 'capitalize',
                        minWidth: '120px',
                        padding: '0.5rem 1rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: '#344767',
                        height: '20px', // Adjust the height as needed
                        '&.Mui-selected': {
                            color: '#344767',
                            fontWeight: '600',
                            backgroundColor: '#fff',
                            borderRadius: '0.5rem',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        },
                        '&.MuiTabs-flexContainer': {
                            justifyContent: 'space-between',
                        },
                    }}


                    // Add this line
                    />)
                })}
            </TabList>
        </TabContext>
    );
}