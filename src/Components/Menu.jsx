import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDotsVertical } from "react-icons/bs";
import Zoom from '@mui/material/Zoom';



const ITEM_HEIGHT = 48;

export default function LongMenu({ options }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <BsThreeDotsVertical />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                TransitionComponent={Zoom} // Add this line

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }} // Add this line
                transformOrigin={{ horizontal: 'right' }}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                        borderRadius: '10px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        onClick={handleClose}
                        style={
                            index === options.length - 1 // Check if it's the last option
                                ? { color: '#F44335' } // Apply different style for the last option
                                : { color: '#7B809A' }
                        }
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div >
    );
}