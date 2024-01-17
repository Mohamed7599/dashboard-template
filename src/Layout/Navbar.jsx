import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoIosSearch } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { HiMenuAlt3, HiMenu } from "react-icons/hi";




const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
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
        <div className={`flex justify-between py-4 items-center mr-5 px-4 rounded-3xl drop-shadow-lg background-blur-lg transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white bg-opacity-90 sticky top-5 z-30' : ''}`}>
            <div className='flex gap-3 items-center'>
                {isSidebarOpen ? <HiMenuAlt3 size={32} className='' onClick={() => { toggleSidebar() }} /> : <HiMenu size={32} className='' onClick={() => { toggleSidebar() }} />}
                <div className='flex flex-col'>
                    <span className='font-semibold hidden lg:block'>Home / Dashboard / {pathName === "/" ? "Analytics" : pathName.slice(1)}
                    </span>
                    <h3 className='text-xl font-semibold pt-1'>{pathName === "/" ? "Analytics" : pathName.slice(1)}</h3>
                </div>
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
