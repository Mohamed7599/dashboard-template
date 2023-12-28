import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




const Footer = () => {
    return (
        <div className='py-3 px-3 absolute bottom-0 w-full'>
            <div className='flex  justify-between w-full'>
                <span className='text-[#9095ab] text-sm'>2023, Cloned By <b className='text-[#344767]'>Mohamed Magdy</b></span>
                <div className='flex gap-4 '>
                    <FaGithub size={24} onClick={() => { window.open('https://github.com/Mohamed7599') }} className='text-[#344767] cursor-pointer' />
                    <BiLogoGmail size={24} onClick={() => { window.open('mailto:mohamedmagdy7599@gmail.com') }} className='text-[#344767] cursor-pointer' />
                    <FaLinkedin size={24} onClick={() => { window.open('https://www.linkedin.com/in/mohamed-magdy-16723a17a/') }} className='text-[#344767] cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
