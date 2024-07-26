import React, {useState} from 'react';
import {logo, menu, close} from "../assets";

const Navbar = () => {

    const [toggle, setToogle]=useState(true);
    const handleClick = () => setToogle(!toggle);

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240] m-auto'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className="ml-10 opacity-[75%] w-full h-[80px]"/>
            </div>

            <div className='flex items-center'>
                <ul className='hidden sm:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                </ul>
            </div>

            <div className='hidden sm:flex mr-10'>
                <button className='px-8 py-3 md:mr-10'>Log In</button>
            </div>

            <div className='sm:hidden' onClick={handleClick}>
                <img src={toggle?menu:close} alt='menu' className='w-[33px] h-[33px] object-contain mr-10' />
            </div>
        </div>
        
        {/* toggled nav */}
        <ul className={!toggle?'absolute bg-white w-full text-center px-8 sm:hidden':'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <div className='flex flex-col my-4'>
                    <button className='px-8 py-3 md:mr-10'>Log In</button>
                </div>
        </ul>
    </div>
  )
}

export default Navbar;