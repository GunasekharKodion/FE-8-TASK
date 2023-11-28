import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from './Footer';
import Blob2 from './assets/blob2.png'
import Blob from './assets/blob.png'
import Search from './Search';

const Fulldetails = () => {
  const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://static.thenounproject.com/png/3192198-200.png');
  const [emailf, setEmailf] = useState("")
  const [passf, setPassf] = useState("")
  const [getdetail, setGetdetail] = useState([])
  const [matchingUser, setMatchingUser] = useState([])
  
  const [detail, setDetail] = useState({
    fname: '',
    lname: '',
    uname: '',
    email: '',
    dob: '',
    age: '',
    contact: '',
    address: '',
    state: '',
    country: '',
    pincode: '',
    gender: '',
    imagec: '',
  })

  useEffect(() => {
    setEmailf(localStorage.getItem('email'))
    setPassf(localStorage.getItem('password'))
  }, [emailf, passf])
  console.log("passf",passf)
  

  useEffect(() => {

    const getter = JSON.parse(localStorage.getItem("adduser"))
    if (getter) {
      setGetdetail(getter)
    }


    getdetail.map((user) => user.email === emailf && user.password === passf ? setDetail({
      fname: user.firname,
      lname: user.lasname,
      uname: user.usename,
      email: user.email,
      dob: user.date,
      age: user.age,
      contact: user.contact,
      address: user.address,
      state: user.state,
      country: user.country,
      pincode: user.pincode,
      gender: user.gender,
      imagec: user.imaged,
    }) : console.log("password", user.password))
console.log("passf",passf)

  }, [emailf, passf])

  return (
    <>
      <div className='min-h-screen w-full bg-slate-100 font-montserrat font-light'>
        <div className='flex flex-row relative'>
        <div>
            <img src={Blob} className='absolute -top-20 left-20 opacity-80'></img>
          </div>
          <div>
            <Nav />
          </div>
          <div className='flex flex-col w-full min-h-screen'>
            <div className=''>
              <Search />
            </div>
          <div className='bg-white shadow-lg ring-0 ring-gray-950 drop-shadow-lg rounded-lg m-4 p-6 px-10 mt-14 mb-7 flex flex-col justify-center items-center mx-auto'>
            <div className='flex flex-col justify-start items-start text-right gap-2 '>
            
              <div className='flex gap-7 text-center items-center justify-center'>
              
                <p className='text-4xl font-semibold'>User Details</p>
                <div className='h-32 w-32 rounded-full drop-shadow-md overflow-hidden'>
                  <img src={detail.imagec} className='object-fill h-32 w-32'></img>
                </div>
              </div>
              <div className='flex  justify-between w-full mt-4 flex-row  '>
              <div className='flex flex-col w-3/4  items-start'>
                  <p className='text-base'>User Name</p>
                  <p className='text-sm text-gray-600 text-start'>{detail.uname}</p>
                  {console.log(detail)}
                </div>
                <div className='flex  flex-col w-3/6 items-start'>
                  <p className='text-base'>Gender</p>
                  <p className='text-sm text-gray-600'>{detail.gender}</p>
                </div>
                </div>
              <hr className='w-full'></hr>
              
              <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-col w-3/4  items-start'>
                  <p className='text-base'>First Name</p>
                  <p className='text-sm text-gray-600'>{detail.fname}</p>
                </div>
                <div className='flex flex-col w-3/6 items-start'>
                  <p className='text-base'>Last Name</p>
                  <p className='text-sm text-gray-600'>{detail.lname}</p>
                </div>
              </div>
             
                <hr className='w-full'></hr>
                <div className='flex flex-row justify-around w-full'>
                <div className='flex flex-col w-3/4 items-start'>
                  <p className='text-base'>Email</p>
                  <p className='text-sm text-sky-600'>{detail.email}</p>
                </div>
                <div className='flex flex-col w-3/6 items-start'>
                  <p className='text-base'>Contact</p>
                  <p className='text-sm text-gray-600'>{detail.contact}</p>
                </div>
                </div>
                <hr className='w-full'></hr>
                <div className='flex flex-row justify-around w-full'>
                <div className='flex flex-col w-3/4 items-start'>
                  <p className='text-base'>Date of Birth</p>
                  <p className='text-sm text-gray-600'>{detail.dob}</p>
                </div>
                <div className='flex flex-col w-3/6 items-start '>
                  <p className='text-base'>Age</p>
                 
                  <p className='text-sm text-gray-600'>  {detail.age && detail.age[0] && detail.age[1] ? 
    `${detail.age[0][1]} ${detail.age[0][0]} ${detail.age[1][1]} ${detail.age[1][0]}` :
    []}</p>
                
                </div>
                </div>
                <hr className='w-full'></hr>
                <div className='flex flex-row justify-around w-full'>
                <div className='flex flex-col w-3/4  items-start'>
                  <p className='text-base'>Address</p>
                  <p className='text-sm text-gray-600'>{detail.address}</p>
                </div>
                <div className='flex flex-col w-3/6 items-start'>
                  <p className='text-base'>State</p>
                  <p className='text-sm text-gray-600'>{detail.state}</p>
                </div>
                </div>
                <div className='flex flex-row justify-around w-full'>
                <div className='flex flex-col w-3/4 items-start'>
                  <p className='text-base'>Country</p>
                  <p className='text-sm text-gray-600'>{detail.country}</p>
                </div>
                <div className='flex flex-col w-3/6 items-start'>
                  <p className='text-base'>Pincode</p>
                  <p className='text-sm text-gray-600'>{detail.pincode}</p>
                </div>
                </div>
           
                
             </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Fulldetails