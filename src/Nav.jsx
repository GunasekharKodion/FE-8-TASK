import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLockReset } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import image1 from './assets/logoo.png'

const Nav = () => {
    const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://www.shutterstock.com/image-vector/user-account-profile-circle-flat-260nw-467503004.jpg');
    const navigation = useNavigate()

    const [logged, setLogged] = useState("")
    const [slide, setSlide] = useState(false)

    useEffect(() => {
        setLogged(localStorage.getItem('isLoggedIn'))
    }, [])

    

    const profile = useLocation().pathname === '/profile';
    const details = useLocation().pathname === '/details';
    const adduser = useLocation().pathname === '/adduser';
    const personal = useLocation().pathname === '/fulldetails';
    const updatepass = useLocation().pathname === '/updatepass';
    const userlist = useLocation().pathname === '/userlisting';
    const navig = useNavigate()

    if (!logged) {
        navig('/login')
    }

    const [email, setEmail] = useState("")
    const [pass, setPass] =useState("")
    const [uname, setUname] = useState("")
    const [image, setImage] = useState('')
    const [data, setData] = useState([])
  
    useEffect(() => {
  
      setEmail(localStorage.getItem('email'))
  setPass(localStorage.getItem('password'))
    }, [email, pass])
  
    useEffect(() => {
      const getter = JSON.parse(localStorage.getItem("adduser"))
      if (getter) {
        setData(getter)
      }
  
      data.map((user) => user.email === email && user.password === pass ? (
   
    setUname(user.usename),
    setImage(user.imaged)
      ) : console.log("password", user.password))
  
  
    }
     , [email, pass])

    const signout = (result) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: 'Logged Out!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1000,
                    })
                localStorage.removeItem("isLoggedIn")
                localStorage.removeItem("logged")
                navigation("/")
            }
        })

    }

    return (
        <>
            <div className='min-h-screen fixed z-10 top-0 bg-white drop-shadow-lg font-montserrat text-xl flex flex-row items-center justify-between '>
            <div className='bg-black text-white h-screen py-32 uppercase font-extralight font-oswald px-2'>
    d<br></br>
    r<br></br>
    o<br></br>
    n<br></br>
    e<br></br>
    <br></br>
    c<br></br>
    r<br></br>
    a<br></br>
    f<br></br>
    t<br></br>
    e<br></br>
    r<br></br>
    s<br></br>
     <br></br>
    
</div>
                <div className='flex flex-col justify-between min-h-screen items-center'>






                    <div className='flex flex-col justify-evenly gap-10 items-center'>
                        <div className='h-12 w-12 rounded-full drop-shadow-md overflow-hidden m-1 mt-4 mx-2 hover:opacity-70'>
                            <img src={image1} className='object-fill h-12 w-12 ' onClick={() => setSlide(!slide)}></img>
                        </div>
                        <Link to='/profile'>
                            {profile ? (
                                <CgProfile color='black' size={25}/>
                            ) : <CgProfile color='gray' size={25}/>}
                        </Link>
                        <Link to='/details'>
                            {
                                details ? (
                                    <MdEdit color='black' size={25}/>
                                ) : <MdEdit color='gray' size={25}/>

                            }
                        </Link>
                        <Link to='/fulldetails'>
                            {personal ? (
                                <TbListDetails color='black' size={25}/>
                            ) : <TbListDetails color='gray' size={25}/>}
                        </Link>
                        <Link to='/adduser'>
                            {
                                adduser ? (
                                    <IoMdPersonAdd color='black' size={25}/>
                                ) : <IoMdPersonAdd color='gray' size={25}/>}

                        </Link>
                        <Link to='/updatepass'>
                            {updatepass ? (
                                <MdLockReset color='black' size={30}/>
                            ) : <MdLockReset color='gray' size={30}/>}
                        </Link>
                    </div>

                    <div className='hover:text-gray-500 text-black mb-7 ml-2 cursor-pointer'>
                        <IoLogOut size={35} onClick={signout} />
                    </div>
                </div>


                {slide &&
                    <div className=' h-screen bg-slate-100 pt-7 flex flex-col justify-start gap-11 items-start px-4 py-2 text-base border-gray-300 border-l-2 '>
                        <div className='flex flex-row items-center gap-2 text-xl font-medium'>
                            {/* <IoIosArrowBack onClick={()=>setSlide(!slide)} className='hover:opacity-30'/> */}
                            <p>Settings</p>
                        </div>
                        <Link to='/profile'>
                        <div className='flex flex-row items-center gap-2 hover:underline hover:underline-offset-4'>
                            <CgProfile size={20} />
                            <p>Profile</p>
                        </div>
                        </Link>
                        <Link to='/details'>
                        <div className='flex flex-row items-center gap-2 hover:underline hover:underline-offset-4'>
                            <MdEdit size={20} />
                            <p>Edit Profile</p>
                        </div>
                        </Link>
                        <Link to='/fulldetails'>
                        <div className='flex flex-row items-center gap-2 hover:underline hover:underline-offset-4'>
                            <TbListDetails size={20} />
                            <p>Personal Details</p>
                        </div>
                        </Link>
                        <Link to='/adduser'>
                        <div className='flex flex-row items-center gap-2 hover:underline hover:underline-offset-4'>
                            <IoMdPersonAdd size={20} />
                            <p>Add People</p>
                        </div>
                        </Link>
                        <Link to='/updatepass'>
                        <div className='flex flex-row items-center gap-2  hover:underline hover:underline-offset-4'>
                            <MdLockReset size={25} />
                            <p>Update Password</p>
                        </div>
                        </Link>

                    </div>
                }
            </div>
        </>
    )
}

export default Nav

{/* 
                    {profile ? (
                        <Link to='/details'>
                            <div className='h-14 w-14 rounded-full overflow-hidden m-1 hover:opacity-70'>
                                <img src={imagel} className=' rounded-full '></img>
                            </div>
                        </Link>) : personal ? (
                            <div>
                                <Link to='/details'>
                                    <div className='text-white hover:text-gray-800'>
                                        <IoArrowBackSharp size={25} />
                                    </div>
                                </Link>
                            </div>) : updatepass ? (
                                <div>
                                    <Link to='/details'>
                                        <div className='text-white hover:text-gray-800'>
                                            <IoArrowBackSharp size={25} />
                                        </div>
                                    </Link>
                                </div>) :
                        <div>
                            <Link to='/profile'>
                                <div className='text-white hover:text-gray-800'>
                                    <IoArrowBackSharp size={25} />
                                </div>
                            </Link>
                        </div>
                    } */}