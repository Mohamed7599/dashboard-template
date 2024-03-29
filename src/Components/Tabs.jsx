import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Tabs({ tabs, value, onChange }) {
    const customLabels = (tabs) => {
        return tabs.map((tab, index) => (
            <span key={index} className='flex gap-2'>{tab?.icon ? tab.icon : ''} {tab.title}</span>
        ));
    }
    const isSmallScreen = useMediaQuery('(max-width:1024px)');

    
    return (
        <TabContext value={value} sx={{
            //change the height of the TABS
        }}
        >
            <TabList
                onChange={onChange}
                aria-label="lab API tabs example"
                indicatorColor='transparent'
                className={'bg-[#f8f9fa] p-5 rounded-2xl'}
                orientation={isSmallScreen === true ? 'vertical' : 'horizontal'}  // Set orientation to "vertical" on small screens
                sx={{
                    minHeight: '30px',
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab
                        label={customLabels(tabs)[index]}
                        value={String(index + 1)}
                        key={index}
                        sx={{
                            textTransform: 'capitalize',
                            minWidth: '100px',
                            margin: '0.5rem 0.5rem',
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#344767',
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
                    />
                ))}
            </TabList>
        </TabContext>
    );
}
