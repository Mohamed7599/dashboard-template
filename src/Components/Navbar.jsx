import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoIosSearch } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaUserCircle, FaBell } from "react-icons/fa";




const Navbar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);

    return (
        <div className={`flex justify-between py-4 items-center mx-6 px-4 rounded-3xl drop-shadow-lg background-blur-sm  ${isScrolled ? 'bg-white bg-opacity-80' : 'bg-transparent'}`}>
            <div >
                <span className='font-semibold'>Home / Dashbord / {pathName.slice(1)}</span>
                <h3 className='text-xl font-semibold pt-1'>{pathName.slice(1)}</h3>
            </div >
            <div className='flex gap-4 items-center'>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IoIosSearch />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className='flex gap-4 pr-3'>
                    <FaGear size={20} />
                    <FaUserCircle size={20} />
                    <FaBell size={20} />



                </div>

            </div>
        </div >
    );
}

export default Navbar;
