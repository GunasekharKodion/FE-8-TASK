import React from 'react';
import { MdEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const Slide = () => {
  return (
    <>
    <div className='min-h-screen border-x-2 border-black '>
    <div className='flex flex-row items-center'>
        <IoIosArrowBack/>
<p>Settings</p>
</div>
<div>
<p>Profile</p>
</div>
<div className='flex flex-row items-center'>
    <MdEdit/>
<p>Edit Profile</p>
</div>
<div>
<p>Personal Details</p>
</div>
<div>
<p>Add User</p>
</div>
<div>
<p>Update Password</p>
</div>

    </div>
    </>
  )
}

export default Slide