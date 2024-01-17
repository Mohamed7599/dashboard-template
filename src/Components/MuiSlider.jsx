import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import { styled } from '@mui/system';


const StyledSlider = styled(Slider)({
    '& .MuiSlider-track': {
        backgroundColor: '#ec407a',
        border: 'transparent',

    },
    '& .MuiSlider-rail': {
        backgroundColor: 'white',
        opacity: 1, // Add this line
    },
    '& .MuiSlider-thumb': {
        border: '1px solid #ec407a',
        backgroundColor: 'white',
        boxShadow: 'none', // Add this line to remove the shadow
        width: 15,
        height: 15,

    },
});


export default function MuiSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <StyledSlider value={value} onChange={handleChange} size='small' />

        </Box>
    );
}