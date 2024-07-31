import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        {/* 1 */}
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-2'>
            {/* LINKS */}
            <div>
                <h6 className='font-bold uppercase py-3'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-3'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-3'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-3'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            {/* SUBSCRIBE */}
            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold uppercase'>Suscribe to our Newsletter</p>
                <p className='py-4'>The latest news, articles, and resources that we sent to your inbox weekly.</p>
                
                <form className='flex flex-col md:flex-row'>
                    <input className='w-full p-2 m-3 rounded-md' type="email" placeholder='index@example.com' />
                    <button className='p-2 m-3 bg-[#00B86E]'>Subscribe</button>
                </form>
            </div>


        </div>
        {/* 2 */}
        <div className='flex flex-col md:flex-row text-center text-gray-500 max-w-[1240px] px-2 py-4 m-auto justify-between item-center'>
            <p className='p-4'>MND, MEUTF</p>
            <div className='flex justify-between md:w-[300px] p-4 text-2xl'>
                <FaFacebook />
                <FaGithub />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
    </div>
  )
}

export default Footer