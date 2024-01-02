import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

export default function Tabs({ tabs, value, onChange }) {

    return (
        <TabContext value={value} sx={{
            //change the height of the TABS
        }}
        >
            <TabList onChange={onChange} aria-label="lab API tabs example" indicatorColor='transparent' className={'bg-[#f8f9fa] p-5 rounded-2xl block'} sx={{
                minHeight: '20px'
            }}>
                {tabs.map((tab, index) => {
                    return (<Tab label={tab} value={String(index + 1)} key={index} sx={{
                        textTransform: 'capitalize',
                        minWidth: '100px',
                        margin: '0.5rem 0.5rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: '#344767',
                        display: 'flex',
                        '&.MuiButtonBase-root': {
                            padding: "0",
                            minHeight: '30px', // Adjust the height here
                        },
                        '&.Mui-selected ': {
                            color: '#344767',
                            fontWeight: '600',
                            backgroundColor: '#fff',
                            borderRadius: '0.5rem',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        },
                    }}


                    // Add this line
                    />)
                })}
            </TabList>
        </TabContext>
    );
}