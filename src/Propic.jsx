import React from 'react'
import { useState } from 'react';

const Propic = () => {
    const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://www.shutterstock.com/image-vector/user-account-profile-circle-flat-260nw-467503004.jpg');
  return (
    <>
    <div className='w-full h-screen relative'>
    <div className='h-10 w-10 top-0 right-3 absolute rounded-full drop-shadow-md overflow-hidden m-1 mt-4 hover:opacity-70'>
                            <img src={imagel} className=' rounded-full '></img>
                        </div>
                        </div>
    </>
  )
}

export default Propic