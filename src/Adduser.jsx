import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Nav from './Nav'
import moment from 'moment/moment'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Userlisting from './Userlisting'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Image from './assets/empty.png'
import Image2 from './assets/full.png'
import Blob from './assets/blob.png'
import Search from './Search'

const Adduser = () => {


  const [addus, setAddus] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    gender: '',
  })

  const maleRadioref = useRef(null)
  const femaleRadioref = useRef(null)

  const [err, setErr] = useState(false)
  const [err2, setErr2] = useState(false)
  const [addu, setAddu] = useState([])
  const [editData, setEditData] = useState(null);
  const [bg, setBg] = useState(false)
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


  const onChanj = (e) => {
    const { id, value } = e.target;
    setAddus((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

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

      }
    })
  };

  const editHandler = (user) => {

    setEditData(user);
    setBg(true)
  };

  const saveEditHandler = (e) => {
    if (editData) {
      if (editData.name.length == 0) {
        setErr2(true)
      }
      else if (editData.name.length < 6) {
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
      else if (!digitsonly.test(editData.contact)) {
        setErr2(true)
      }
      else if (editData.contact.length != 10) {
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


  const handleSubmit = (e) => {
    e.preventDefault()
    if (addus.name.length == 0) {
      setErr(true)
    }
    else if (!alphaonly.test(addus.name)) {
      setErr(true)
    }
    else if (addus.name.length < 3) {
      setErr(true)
    }
   
    else if (addus.contact.length == 0) {
      setErr(true)

    }
    else if (!digitsonly.test(addus.contact)) {
      setErr(true)

    }
    else if (addus.contact.length != 10) {
      setErr(true)

    }
    else if (addus.email.length == 0) {
      setErr(true)

    }

    else if (!pattern.test(addus.email)) {
      setErr(true)

    }
    else if (addu.some((user) => user.id !== addus.id && user.email === addus.email)) {
      setErr(true);

    }
    else if (addu.some((user) => user.id !== addus.id && user.contact === addus.contact)) {
      setErr(true);

    }
    else if (addus.date.length == 0) {
      setErr(true)

    }
    else if (addus.gender.length == 0) {
      setErr(true)

    }
    else {
      setErr(false)
      const newUserr = {
        id: uuidv4(),
        name: addus.name,
        email: addus.email,
        contact: addus.contact,
        gender: addus.gender,
        date: addus.date,
      };

      setAddu([...addu, newUserr])
    
      localStorage.setItem('adddata', JSON.stringify([...addu, newUserr]))
      
      Swal.fire({ icon: 'success', title: 'Success', text: 'Submit Successful', })
      console.log("Contact " + addus.contact + " Email " + addus.email + " Name " + addus.name + " DOB " + addus.dob + " Gender " + addus.gender)
      setAddus({ name: "", email: "", contact: "", date: "", gender: "" })
      maleRadioref.current.checked = false
      femaleRadioref.current.checked = false

    }
  }

  return (
    <>
      <div className='min-h-screen w-full flex flex-row justify-center items-center bg-slate-100 font-montserrat relative font-light'>

        <div>
          <img src={Blob} className='absolute -top-12 -right-0 opacity-80'></img>
        </div>
        <div>
          <Nav />
        </div>
        <div className='flex flex-col w-full h-screen'>
          <div className=''>
           <Search/>
          </div>
        <div className='flex flex-row w-full h-screen justify-center items-center '>
          <p className='text-8xl font-semibold mb-44 ml-32 text-left'>Add People</p>
          <div className='flex flex-col w-full h-screen justify-evenly items-center'>

            <div className='bg-white mb-32 ring-0  ring-gray-950 m-5 p-7 rounded-lg drop-shadow-lg'>

              <form className='flex flex-col justify-start items-start bg-transparent gap-3 ' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-0  w-full">
                  <input type="text" onChange={onChanj} placeholder="Enter username" maxLength={15} id='name' value={addus.name} className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                  {err && addus.name.length == 0 ?
                    <label className="text-red-500 text-xs">Username is required</label> : " "
                  }
                   {err && addus.name.length > 0 && !alphaonly.test(addus.name) ?
                    <label className="text-red-500 text-xs">Username must be in alphabets only</label> : " "
                  }
                  {err && addus.name.length > 0 && alphaonly.test(addus.name) && addus.name.length < 3 ?
                    <label className="text-red-500 text-xs">Username must be above 2 characters</label> : " "
                  }
                </div>




                <div className='flex flex-col w-full'>
                  <input type="text" placeholder="Enter Contact Number" maxLength={10} id='contact' value={addus.contact} onChange={onChanj} className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                  {err && addus.contact.length == 0 ?
                    <label className="text-red-500 text-xs">Contact No is required</label> : " "
                  }
                  {err && addus.contact.length > 0 && !digitsonly.test(addus.contact) ?
                    <label className="text-red-500 text-xs">Contact No must be of numeric digits</label> : " "
                  }
                  {err && addus.contact.length > 0 && digitsonly.test(addus.contact) && addus.contact.length != 10 ?
                    <label className="text-red-500 text-xs">Contact No must be of 10 digits</label> : " "
                  }
                  {err && addus.contact.length > 0 && digitsonly.test(addus.contact) && addus.contact.length == 10 && addu.some((user) => user.id !== addus.id && user.contact === addus.contact) ?
                    <label className="text-red-500 text-xs">Already entered contact</label> : " "
                  }

                </div>

                <div className="flex flex-col gap-0 w-full">
                  <input type="text" placeholder="Enter email" value={addus.email} id='email' maxLength={25} onChange={onChanj} className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                  {err && addus.email.length == 0 ?
                    <label className="text-red-500 text-xs">Email is required</label> : " "
                  }
                  {err && addus.email.length > 0 && !pattern.test(addus.email) ?
                    <label className="text-red-500 text-xs">Invalid Email</label> : " "
                  }
                  {err && addus.email.length > 0 && pattern.test(addus.email) && addu.some((user) => user.email === addus.email && user.id !== addus.id) ?
                    <label className="text-red-500 text-xs">Already entered email</label> : " "
                  }
                </div>
                <div className="flex flex-col gap-0 w-full">

                  <input type="date" placeholder="Enter Date of Birth" id='date' value={addus.date} onChange={onChanj} max={moment().format("YYYY-MM-DD")} className="py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                  {err && addus.date.length == 0 ?
                    <label className="text-red-500 text-xs">Date of Birth is required</label> : " "
                  }

                </div>
                <div>
                  <input type='radio' name='gender' id='gender' value='Male' onChange={onChanj} ref={maleRadioref} /><span className='font-light'>  Male</span>
                  <input type='radio' name='gender' id='gender' value='Female' onChange={onChanj} ref={femaleRadioref} className='ml-10' /><span className='font-light'>  Female</span>
                  <input type='radio' name='gender' id='gender' value='Others' onChange={onChanj} ref={femaleRadioref} className='ml-10' /><span className='font-light'>  Others</span>
                  <br></br>

                  {err && addus.gender.length == 0 ?
                    <label className="text-red-500 text-xs">Gender is required</label> : " "
                  }
                </div>

                
                  <button type='submit' className='bg-blue-500 text-white py-2 px-5 text-sm rounded-full mx-auto hover:bg-blue-700'>Add People</button>
                

              </form>
            </div>
            {addu.length > 0 ? (

              <Link to='/userlisting'>
                <div className='flex flex-col absolute bottom-10 ml-10 left-1/4'>
                  <img src={Image2} className='h-72 w-72'></img>
                  <div className='flex absolute z-20 bottom-1 ml-4'>
                    <button className='bg-blue-500 text-white py-1 px-20 mb-5 text-md rounded-full drop-shadow-md hover:bg-blue-700'>People Listing</button>
                  </div>
                </div>
              </Link>)
              : <div className='flex flex-col items-center absolute -bottom-0 left-1/3 '>

                <img src={Image} className='h-64 w-64'></img>

              </div>
            }
          </div>


          </div>
        </div>
        </div>
        {/* <Footer /> */}
      </>
      )
}

      export default Adduser