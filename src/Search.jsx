import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaBell } from 'react-icons/fa';
import { RxCrossCircled } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Search = () => {
    const [serach, setSerach] = useState("")
    const [addu, setAddu] = useState([])
    const [image, setImage] = useState('')
    const [email, setEmail] = useState("")
    const [pass, setPass] =useState("")
    const [data, setData] = useState([])

    const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://static.thenounproject.com/png/3192198-200.png');

const navig=useNavigate()

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
     
     
      setImage(user.imaged)
        ) : console.log("password", user.password))
    
    
      }
       , [email, pass])


    useEffect(() => {

        setAddu(JSON.parse(localStorage.getItem('adddata')) || []);
    }, []);

   



    const empty = (e) => {
        setSerach("")
    }

    const searchn = () => {
        if (serach == "user profile") {
            navig('/profile')
        }
        else if (serach == "User Profile") {
            navig('/profile')
        } else if (serach == "USER PROFILE") {
            navig('/profile')
        }
        else if (serach == "edit profile") {
            navig('/details')
        }
        else if (serach == "Edit Profile") {
            navig('/details')
        }
        else if (serach == "EDIT PROFILE") {
            navig('/details')
        }
        else if (serach == "user details") {
            navig('/fulldetails')
        }
        else if (serach == "User Details") {
            navig('/fulldetails')
        }
        else if (serach == "USER DETAILS") {
            navig('/fulldetails')
        }
        else if (serach == "add people") {
            navig('/adduser')
        }
        else if (serach == "Add People") {
            navig('/adduser')
        }
        else if (serach == "ADD PEOPLE") {
            navig('/adduser')
        }
        else if (serach == "update password") {
            navig('/updatepass')
        }
        else if (serach == "Update Password") {
            navig('/updatepass')
        }
        else if (serach == "UPDATE PASSWORD") {
            navig('/updatepass')
        } else {
            Swal.fire({
                icon: "error",
                title: "Sorry, Nothing Matched",
                text: "Try again with some other keywords",
            });
            setSerach('')
        }
    }
    return (
        <>
            <div className='flex flex-row justify-end mr-4 mt-4  items-center gap-64 drop-shadow-lg '>

                <div className='bg-white pr-2 py-2 pl-2 rounded-lg'>
                    <div className='flex flex-row  items-center gap-4'>
                    <RxCrossCircled size={18} onClick={empty} onMouseOver={({ target }) => target.style.color = "red"} onMouseOut={({ target }) => target.style.color = "black"} />
                        <input type='text' placeholder='Search' value={serach} maxLength={20} className='bg-transparent focus:outline-none' onChange={e => setSerach(e.target.value)}></input>
                        <CiSearch size={20} onClick={searchn} onMouseOver={({ target }) => target.style.color = "dodgerblue"} onMouseOut={({ target }) => target.style.color = "black"} />
                       
                        {/* <p className='text-sm text-gray-500 '>Search</p> */}
                    </div>
                </div>
                <div className='flex  items-center ml-2'>
                {addu.length > 0 ? (
                    <FaBell size={18} className='animate-bounce' />
                ) : <FaBell size={18}/>}
<Link to='/fulldetails'>
             <div className='h-10 w-10 rounded-full ml-5 drop-shadow-md overflow-hidden'>
                <img src={image} className=' h-10 w-10'></img>
                </div>
                </Link>
                </div>
            </div>
        </>
    )
}

export default Search