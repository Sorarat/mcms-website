import React from 'react';
import { FaTelegram, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-gray-950 p-10 flex flex-col justify-center items-center gap-5'>
      <div className='flex justify-center items-center w-full'>
        {/* About & Events Section */}
        <div className='flex justify-center space-x-14 flex-grow'> {/* Added flex-grow */}
          <p className='text-gray-400 hover:text-gray-300'>About</p>
          <p className='text-gray-400 hover:text-gray-300'>Events</p>
        </div>

        {/* Arrow Icon in its own column */}
        <div> {/* Removed ml-auto */}
          <IoArrowUpCircle color='white' size={50} />
        </div>
      </div>

      {/* Musollah & Contact Section */}
      <div className='flex justify-center space-x-14'>
        <p className='text-gray-400 hover:text-gray-300'>Musollah</p>
        <p className='text-gray-400 hover:text-gray-300'>Contact</p>
      </div>

      {/* Social Media Icons */}
      <div className='flex gap-x-3'>
        <a href="https://t.me/simmcms" target="_blank" rel="noopener noreferrer" className="group">
          <FaTelegram size={20} color="white" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        </a>
        <a href="https://www.instagram.com/simmcms/" target="_blank" rel="noopener noreferrer" className="group"> 
          <FaInstagram size={20} color="white" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="group">
          <FaTiktok size={20} color="white" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        </a>
        <a href="https://www.linkedin.com/company/simmcms/" target="_blank" className="group">
          <FaLinkedin size={20} color="white" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
        </a>
      </div>

      {/* Copyright */}
      <div>
        <p className='text-gray-400 text-xs'>&copy;2024 SIM MCMS All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;