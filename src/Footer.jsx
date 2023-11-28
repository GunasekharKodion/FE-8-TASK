import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <div className='bg-zinc-900 h-auto text-white font-extralight flex flex-col gap-7 justify-center items-center '>
                    <div className='flex gap-5 mt-14'>
                        <div className=' bg-white hover:bg-sky-600 p-2 rounded-full'>
                            <FaFacebook color='black' />
                        </div>
                        <div className=' bg-white hover:bg-red-500 p-2 rounded-full'>
                            <FiInstagram color='black' />
                        </div>
                        <div className=' bg-white hover:bg-sky-500 p-2 rounded-full'>
                            <FaTwitter color='black' />
                        </div>
                        <div className=' bg-white hover:bg-orange-500 p-2 rounded-full'>
                            <FaGooglePlus color='black' />
                        </div>
                        <div className=' bg-white hover:bg-red-600 p-2 rounded-full'>
                            <FaYoutube color='black' />
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center  mb-10 '>
                    <Link to='/profile'>
                        <p className='hover:underline hover:underline-offset-4'>User Profile</p>
                        </Link>
                        <Link to='/details'>
                        <p className='hover:underline hover:underline-offset-4'>Edit Profile</p>
                        </Link>
                        <Link to='/fulldetails'>
                        <p className='hover:underline hover:underline-offset-4'>Personal Details</p>
                        </Link>
                        <Link to='/adduser'>
                        <p className='hover:underline hover:underline-offset-4'>Add People</p>
                        </Link>
                        <Link to='/updatepass'>
                        <p className='hover:underline hover:underline-offset-4'>Update Password</p>
                        </Link>
                    </div>
                </div>
                <div className='bg-black h-12 text-white font-extralight text-center text-sm flex items-center justify-center'>
                    Copyright ©2023 | Designed by Drone Crafters
                </div>
            </div>
        </>
    )
}

export default Footer