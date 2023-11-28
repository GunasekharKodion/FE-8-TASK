import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Slide from './Slide'
import Footer from './Footer'
import Blob from './assets/blob.png'
import { FaBell } from "react-icons/fa";
import Search from './Search'


const Profile = () => {


  const [eye, setEye] = useState(false)
  const [coneye, setConeye] = useState(false)



  const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://static.thenounproject.com/png/3192198-200.png');
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] =useState("")
  const [uname, setUname] = useState("")
  const [image, setImage] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {

    setEmail(localStorage.getItem('email'))
setPass(localStorage.getItem('password'))
  }, [email, pass])
  console.log("pass ",pass)

  useEffect(() => {
    const getter = JSON.parse(localStorage.getItem("adduser"))
    if (getter) {
      setData(getter)
    }

    data.map((user) => user.email === email && user.password === pass ? (
  setFname(user.firname),
  setLname(user.lasname),
  setUname(user.usename),
  setImage(user.imaged)
    ) : console.log("error: password", user.password))


  }, [email, pass])


return (
  <>
    <div className='min-h-screen w-full bg-slate-100 font-montserrat font-light '>
      <div className='flex flex-row justify-between items-center relative'>
        <div>
          <img src={Blob} className='absolute top-10 opacity-80'></img>
        </div>
        <div>
          <Nav></Nav>
        </div>


        {/* <div><Slide/></div> */}
        <div className='flex flex-col w-full h-screen'>
          <div className=''>
            <Search />
          </div>

          <div className='flex flex-row w-full relative h-screen justify-evenly items-center'>

            <div><p className='text-8xl font-semibold  mb-4'>User<br></br> Profile pROFIC</p></div>

            <div className='bg-white ring-0  ring-gray-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg m-5 p-6 flex flex-col justify-center items-center'>

              <div className='h-56 w-56 rounded-full object-contain drop-shadow-md overflow-hidden'>
                <img src={image} className='object-fill h-56 w-56'></img>
              </div>
              <p className='text-xl font-semibold mt-2'>{uname}</p>
              <div className='flex flex-col justify-start gap-2 mt-7'>
                <div className='bg-slate-100 text-lg py-1 pr-10 pl-5 rounded-lg ring-1 ring-slate-200'>
                  <p className='text-base text-gray-600'>Email</p>
                  <p>{email}</p>
                </div>
                <div className='bg-slate-100 text-lg py-1  pr-10 pl-5 rounded-lg ring-1 ring-slate-200'>
                  <p className='text-base text-gray-600'>Name</p>
                  <div className='flex gap-2 '>
                    <p>{fname}</p>
                    <p>{lname}</p>
                  </div>
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

export default Profile



{/* Forms to edit username email firstname lastname password */ }
{/* <input type='text' placeholder='First Name' maxLength={15} id='fname' value={val.fname} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <hr class="w-full mt-1"></hr>
                  {err && val.fname.length == 0 ?
                    <label className='text-red-500 text-xs'>First Name is required</label> : ""}
                  {err && val.fname.length > 0 && !alphaonly.test(val.fname) ?
                    <label className='text-red-500 text-xs'>First Name must be in alphabets only</label> : ""}
                  {err && val.fname.length > 0 && alphaonly.test(val.fname) && val.fname.length < 3 ?
                    <label className='text-red-500 text-xs'>First Name must be above 2 letters</label> : ""}
                </div>

                <div className='flex flex-col  w-full'>
                  <input type='text' placeholder='Last Name' maxLength={15} id='lname' value={val.lname} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <hr class="w-full mt-1"></hr>
                  {err && val.lname.length == 0 ?
                    <label className='text-red-500 text-xs'>Last Name is required</label> : ""}
                  {err && val.lname.length > 0 && !alphaonly.test(val.lname) ?
                    <label className='text-red-500 text-xs'>Last Name must be in alphabets only</label> : ""}
                  {err && val.lname.length > 0 && alphaonly.test(val.lname) && val.lname.length < 3 ?
                    <label className='text-red-500 text-xs'>Last Name must be above 2 letters</label> : ""}
                </div>

                <div className='flex flex-col  w-full'>
                  <input type='text' placeholder='Username' maxLength={15} id='uname' value={val.uname} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <hr class="w-full mt-1"></hr>
                  {err && val.uname.length == 0 ?
                    <label className='text-red-500 text-xs'>UserName is required</label> : ""}
                  {err && val.uname.length > 0 && !space.test(val.uname) ?
                    <label className='text-red-500 text-xs'>UserName must not contain blank spaces</label> : ""}
                  {err && val.uname.length > 0 && space.test(val.uname) && val.uname.length < 3 ?
                    <label className='text-red-500 text-xs'>UserName must be above 2 letters</label> : ""}
                </div>

                <div className='flex flex-col  w-full'>
                  <input type='email' placeholder='Email' maxLength={25} id='email' value={val.email} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <hr class="w-full mt-1"></hr>
                  {err && val.email.length == 0 ?
                    <label className='text-red-500 text-xs'>Email is required</label> : ""}
                  {err && val.email.length > 0 && !pattern.test(val.email) ?
                    <label className='text-red-500 text-xs'>Email is invalid</label> : ""}
                </div>

                <div className='flex flex-col relative  w-full'>
                  <input type={eye ? 'text' : 'password'} placeholder='Password' maxLength={15} id='password' value={val.password} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <div className='absolute right-1 top-0' onClick={() => setEye(!eye)}>{eye ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>
                  <hr class="w-full mt-1"></hr>
                  {err && val.password.length == 0 ?
                    <label className='text-red-500 text-xs'>Password is required</label> : ""}
                  {err && val.password.length > 0 && !lower.test(val.password) ?
                    <label className='text-red-500 text-xs'>Password must contain atleast one lowercase letter </label> : ""}
                  {err && val.password.length > 0 && lower.test(val.password) && !upper.test(val.password) ?
                    <label className='text-red-500 text-xs'>Password must contain atleast one uppercase letter </label> : ""}
                  {err && val.password.length > 0 && lower.test(val.password) && upper.test(val.password) && !digit.test(val.password) ?
                    <label className='text-red-500 text-xs'>Password must contain atleast one numeric digit </label> : ""}
                  {err && val.password.length > 0 && lower.test(val.password) && upper.test(val.password) && digit.test(val.password) && !specialcase.test(val.password) ?
                    <label className='text-red-500 text-xs'>Password must contain atleast one special character </label> : ""}
                  {err && val.password.length > 0 && lower.test(val.password) && upper.test(val.password) && digit.test(val.password) && specialcase.test(val.password) && val.password.length < 6 ?
                    <label className='text-red-500 text-xs'>Password must be above 5 digits </label> : ""}
                </div>

                <div className='flex flex-col relative  w-full'>
                  <input type={coneye ? 'text' : 'password'} placeholder='Confirm Password' maxLength={15} id='conpassword' value={val.conpassword} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                  <div className='absolute right-1 top-0' onClick={() => setConeye(!coneye)}>{coneye ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>
                  <hr class="w-full mt-1"></hr>
                  {err && val.conpassword == 0 ?
                    <label className='text-red-500 text-xs'>Confirm Password is required</label> : ""}
                  {err && val.conpassword > 0 && val.password !== val.conpassword ?
                    <label className='text-red-500 text-xs'>Password must match</label> : ""}
               */}