import React from 'react';
import { FaTelegram, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='bg-gray-950 p-10 flex flex-col justify-center items-center gap-5'>

      <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 text-center'>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 w-full'>
            <Link to="/about" className="text-gray-400 hover:text-gray-300">About </Link>
            <Link to="/events" className="text-gray-400 hover:text-gray-300">Events </Link>
            <Link to="/musollah" className="text-gray-400 hover:text-gray-300">Musollah</Link>
            <Link to="/contact" className="text-gray-400 hover:text-gray-300">Contact </Link>
        </div>

        <div className='mt-2 sm:mt-0'>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <IoArrowUpCircle color='white' size={50} />
            </button>
        </div>

      </div>

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

      <div>
            <p className='text-gray-400 text-xs'>&copy;2024 SIM MCMS All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;

