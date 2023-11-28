import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import moment from 'moment/moment'
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import Blob from './assets/blob.png'
import Footer from './Footer';
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";


const Userlisting = () => {
const navig=useNavigate()
    const [addu, setAddu] = useState([])
    const [editData, setEditData] = useState(null);
    const [err2, setErr2] = useState(false)
    const [bg, setBg] = useState(false)
    const [close, setClose] = useState(true)
    const maleRadioref = useRef(null)
  const femaleRadioref = useRef(null)
  const otherRadioref = useRef(null)
  const prevGenderRef = useRef(null)
    const space = /^\S*$/
  const alphaonly = /^[a-zA-Z]+$/
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const digit = /\d/
  const digitsonly = /^\d+$/
  const lower = /[a-z]/
  const upper = /[A-Z]/
  const specialcase = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/


    useEffect(() => {

        setAddu(JSON.parse(localStorage.getItem('adddata')) || []);
      }, []);
    
    const deleterr = (id) => {

        Swal.fire({
          title: 'Are you sure?',
          text: "You want to delete this data?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete!'
        }).then((result) => {
          if (result.isConfirmed) {
            const updatedArray = addu.filter(user => user.id !== id);
            setAddu(updatedArray);
            localStorage.setItem('adddata', JSON.stringify(updatedArray));
  
    
            Swal.fire(
              {
                title: 'Deleted!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000,
              })
              updatedArray.length === 0 ?
              navig('/adduser') : " "
          }
        })
      };

    const editHandler = (user) => {

        setEditData(user);
        setClose(true);
        setBg(true)
      };
    
      const saveEditHandler = (e) => {
        if (editData) {
          if (editData.name.length == 0) {
            setErr2(true)
          }
          else if (editData.name.length < 3) {
            setErr2(true)
          }
          else if (!alphaonly.test(editData.name)) {
            setErr2(true)
          }
          else if (editData.email.length == 0) {
            setErr2(true)
          }
          else if (!pattern.test(editData.email)) {
            setErr2(true)
          }
          else if (addu.some((user) => user.id !== editData.id && user.email === editData.email)) {
            setErr2(true);
    
          }
          else if (editData.contact.length == 0) {
            setErr2(true)
          }
          else if (editData.contact.length != 10) {
            setErr2(true)
          }
          else if (!digitsonly.test(editData.contact)) {
            setErr2(true)
          }
          else if (addu.some((user) => user.id !== editData.id && user.contact === editData.contact)) {
            setErr2(true);
    
          }
    
          else {
            setErr2(false)
            const indexToEdit = addu.findIndex((user) => user.id === editData.id);
            if (indexToEdit !== -1) {
              const updatedArray = [...addu];
    
              updatedArray[indexToEdit] = editData;
              setAddu(updatedArray);
              localStorage.setItem('adddata', JSON.stringify(updatedArray));
              Swal.fire({ icon: 'success', title: 'Success', text: 'Update Successful', })
              setEditData(null);
            }
          }
        };
      }

  return (
    <>
    <div className='min-h-screen relative w-full bg-slate-100'>
    <div>
            <img src={Blob} className='absolute -top-32 right-0 opacity-80'></img>
          </div>
 {addu.length > 0 && (
<div className='flex flex-col justify-center drop-shadow-lg items-center pb-5'>
            <div className='bg-white ring-2 ring-gray-500 w-auto drop-shadow-lg p-2 m-6 mt-14 rounded-lg'>
            <div className='bg-slate-200 w-full py-2 rounded-lg mb-3 bg-opacity-50'>
              <Link to='/adduser'>
              <IoArrowBack size={30} className='m-5 text-black hover:text-gray-500'/>
              </Link>
              
                <h1 className='text-4xl font-semibold text-center mt-4 mb-6'>People Added</h1>
              </div>
              <div>
                <table>
                  <thead className='font-thin text-base tracking-wide  border-b-2 border-gray-300 bg-gray-200'>
                  <th className='font-medium'>No.</th>
                    <th className='font-medium'>Name</th>
                    <th className='font-medium'>Email</th>
                    <th className='font-medium'>Contact</th>
                    <th className='font-medium'>DOB</th>
                    <th className='font-medium'>Gender</th>
                    <th className='font-medium'>Actions</th>
                  </thead>
                 
                  <tbody>
                    {addu.map((user, ind) => (
                      <tr key={user.id} className='odd:bg-white even:bg-slate-100 text-sm text-gray-600'>
                        <td className=' p-6 bg-slate-200   bg-opacity-50'>{ind+1+"."}</td>
                        <td className=' p-6'>{user.name}</td>
                        <td className=' p-6 text-sky-600'>{user.email}</td>
                        <td className=' p-6'>{user.contact}</td>
                        <td className=' p-6'>{user.date}</td>
                        <td className=' p-6'>{user.gender}</td>
                        <div className='flex my-3'>
                        <div onClick={() => editHandler(user)} className='flex items-center gap-1 mx-2  mt-1  py-1 ring-1 ring-sky-400 rounded-lg px-3 cursor-pointer hover:bg-sky-100'><RiEdit2Line color='dodgerblue' size={15}/> <span className='text-sky-500 font-normal text-xs'>Edit</span></div>
                        {/* <button onClick={() => editHandler(user)} className='mx-2 mt-1  py-1 ring-1 ring-gray-400 rounded-lg px-3'><RiEdit2Line color='dodgerblue' size={20}/> <span className='text-sky-500'>Delete</span></button> */}
                        <div onClick={() => deleterr(user.id)} className='flex items-center gap-1 mx-2  mt-1  py-1 ring-1 ring-red-400 rounded-lg px-3 cursor-pointer hover:bg-red-100'><MdDeleteOutline color='red'  size={15}/><span className='text-red-500 font-normal text-xs' >Delete</span></div>
                        {/* <button onClick={() => deleterr(user.id)} className='bg-red-500 px-3 rounded-full py-2'><MdDelete color='white' /></button> */}
                        </div>
                      </tr>

                    ))}
                    
                  </tbody>
                  
                </table>
                
              </div>
            </div>
          </div>)}

          {editData && close  && (
          <div className="flex flex-col justify-center absolute z-20 h-full w-full overflow-hidden bg-black bg-opacity-60 top-0 left-0 items-center text-center">
            <div className="  bg-white ring-1 px-10 py-7 mb-5 rounded-md  mt-10  drop-shadow-xl">
              <div className='w-full items-end justify-end flex mb-3 ml-5'>
              <ImCross onClick={()=>setClose(!close)} className=' text-black hover:text-gray-500'/>
              </div>
              <div className="mb-5 px-4  font-sans text-3xl font-bold drop-shadow-lg ">
                <p>Edit Person</p>
              </div>

              <div className="flex flex-col gap-7 text-left">

                {/* Name of user added */}
                <div className="flex flex-col gap-0">
                  <input
                    type='text'
                    placeholder='Name'
                    maxLength={15}
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"
                  />
                  
                  {err2 && editData.name.length == 0 ?
                    <label className="text-red-500 text-xs">Username is required</label> : " "
                  }
                  {err2 && editData.name.length > 0 && !alphaonly.test(editData.name) ?
                    <label className="text-red-500 text-xs">Username must be in alphabets only</label> : " "
                  }
                  {err2 && editData.name.length > 0 && alphaonly.test(editData.name) && editData.name.length < 3 ?
                    <label className="text-red-500 text-xs">Username must be above 2 characters</label> : " "
                  }
                </div>


                {/* <h1 className='text-2xl'>User : {editData.name}</h1> */}
                <div className="flex flex-col gap-0">
                  <input
                    type='text'
                    placeholder='Email'
                    value={editData.email}
                    disabled
                    className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"
                  />
                 
                  {err2 && editData.email.length == 0 ?
                    <label className="text-red-500 text-xs">Email is required</label> : " "
                  }
                  {err2 && editData.email.length > 0 && !pattern.test(editData.email) ?
                    <label className="text-red-500 text-xs">Invalid Email</label> : " "
                  }
                  {err2 && editData.email.length > 0 && pattern.test(editData.email) && addu.some((user) => user.email === editData.email && user.id !== editData.id) ?
                    <label className="text-red-500 text-xs">Already entered email</label> : " "
                  }
                </div>
                <div className="flex flex-col gap-0">
                  <input
                    type='text'
                    placeholder='Contact'
                    maxLength={10}
                    value={editData.contact}
                    onChange={(e) => setEditData({ ...editData, contact: e.target.value })}
                    className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"
                  />
                
                  {err2 && editData.contact.length == 0 ?
                    <label className="text-red-500 text-xs">Contact No is required</label> : " "
                  }
                  {err2 && editData.contact.length > 0 && !digitsonly.test(editData.contact) ?
                    <label className="text-red-500 text-xs">Contact No must be of numeric digits</label> : " "
                  }
                  {err2 && editData.contact.length > 0 && digitsonly.test(editData.contact) && editData.contact.length != 10 ?
                    <label className="text-red-500 text-xs">Contact No must be of 10 digits</label> : " "
                  }
                  {err2 && editData.contact.length > 0 && editData.contact.length == 10 && addu.some((user) => user.id !== editData.id && user.contact === editData.contact) ?
                    <label className="text-red-500 text-xs">Already entered contact</label> : " "
                  }
                </div>

                {/* Date of birth  and Gender of people but they can't change for people */}
                <div className="flex flex-col gap-0">
                  <input
                    type='date'
                    placeholder='DOB'
                    value={editData.date}
                    max={moment().format("YYYY-MM-DD")}
                    onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                    className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"
                  />
                 
                </div>
                <div className="flex flex-col gap-0">
                  <input
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    id='gender'
                    value={editData.gender}
                    disabled
                    className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"
                  />
                 
                </div>
                <div className='flex flex-row gap-4'>
                  <div className='flex gap-1'>
                  <input
                    type='radio'
                    placeholder='Gender'
                    name='gender'
                    id='gender'
                    value='Male'
                    onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                    ref={maleRadioref}
                    checked={editData.gender === 'Male'}
                  /><span className=''>Male</span>
                  </div>

<div className='flex gap-1'>
                  <input
                    type='radio'
                    placeholder='Gender'
                    name='gender'
                    id='gender'
                    value='Female'
                    onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                    ref={femaleRadioref}
                    checked={editData.gender === 'Female'}
                  /><span className=''>Female</span>
                  </div>

<div className='flex gap-1'>
                  <input
                    type='radio'
                    placeholder='Gender'
                    name='gender'
                    id='gender'
                    value='Others'
                    onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                    ref={otherRadioref}
                    checked={editData.gender === 'Others'}
                  /><span className=''>Others</span></div>
                </div>
                <button onClick={saveEditHandler} className=" bg-blue-500 text-white py-1 px-5 text-sm rounded-full hover:bg-blue-700">Save</button>
              </div>

            </div>
          </div>)}
          </div>
          <Footer/>
    </>
  )
}

export default Userlisting