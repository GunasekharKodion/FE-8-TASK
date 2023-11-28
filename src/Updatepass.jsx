import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { GrFormPreviousLink } from 'react-icons/gr'
import Nav from './Nav'
import Footer from './Footer'
import Blob from './assets/blob.png'
import Search from './Search'


const Updatepass = () => {

    const [oldpass, setOldpass] = useState('')
    const [newpass, setNewpass] = useState('')
    const [newconpass, setNewconpass] = useState('')
    const [err, setErr] = useState(false)
    const navigator = useNavigate()
    const [curvisible, setCurvisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const [convisible, setConvisible] = useState(false)
    const [passadd, setPassadd] = useState([])
    const [echeck, setEcheck] = useState('')
    const [pcheck, setPcheck] = useState('')
    const [acheck, setAcheck] = useState(false)
    const [passcheck, setPasscheck] = useState(false)
    const digit = /\d/
    const lower = /[a-z]/
    const upper = /[A-Z]/
    const specialcase = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/
    

    useEffect(() => {
      localStorage.setItem("passcheck",passcheck)
    }, [passcheck])
    

    useEffect(() => {
        setEcheck(localStorage.getItem("email"))
        setPcheck(localStorage.getItem("password"))
    }, [])

    useEffect(() => {
        const getter = JSON.parse(localStorage.getItem("adduser"))
        if (getter) {
            setPassadd(getter)
        }
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()

        if (newpass.length == 0) {
            setErr(true)
        }

        else if (newpass.length < 6) {
            setErr(true)
        }

        else if (newconpass.length == 0) {
            setErr(true)
        }

        else if (newpass !== newconpass) {
            setErr(true)
        }
        else if (!digit.test(newpass)) {
            setErr(true)

        } else if (!lower.test(newpass)) {
            setErr(true)

        } else if (!upper.test(newpass)) {
            setErr(true)

        } else if (!specialcase.test(newpass)) {
            setErr(true)

        }

        else {
            setPassadd((prev) => {
                const newSetpass = prev.map((user) => {
                    if (user.email === echeck && user.password === oldpass) {
                        const a = { ...user, password: newpass }
                        return a;
                    }
                    else {
                        return user;

                    }
                }
                )

                const adcheck = newSetpass.some((user) => user.email === echeck && user.password === newpass);

                if (adcheck) {
                    Swal.fire({ icon: 'success', title: 'Success', text: 'Password Updated', })
                    localStorage.setItem('adduser', JSON.stringify([...newSetpass]));
                    console.log(newSetpass.password)
                    localStorage.setItem('password',newpass)
                    setPasscheck(true)
                    setErr(false)
                    setOldpass("")
                    setNewpass("")
                    setNewconpass("")
                    return newSetpass;
                } else {
                    Swal.fire({ icon: 'error', title: 'Error', text: 'Incorrect Old Password', });
                    return prev;
                }

            }
            );
            //  localStorage.setItem('adduser', JSON.stringify([...passadd]))

            // if (oldpass === pcheck) {
            //     localStorage.setItem("newpassword", newpass)
            //     localStorage.setItem("password", newpass)
            //     Swal.fire({ icon: 'success', title: 'Success', text: 'Password Updated', })
            //     navigator("/profile")
            //     setOldpass("")
            //     setNewpass("")
            //     setNewconpass("")
            // } else {
            //     console.log("incorrect old password")
            // }
        }
    }


    return (
        <>

            <div className='min-h-screen w-full bg-slate-100 font-montserrat relative font-light'>
                <div className='flex flex-row relative'>
                <div>
            <img src={Blob} className='absolute top-40 right-32 opacity-80'></img>
          </div>
                    <div>
                        <Nav />
                    </div>
                    <div className='flex flex-col w-full h-screen'>
            <div className=''>
              <Search />
            </div>
                    <div className="flex flex-row w-full h-screen justify-evenly items-center">
                    <p className='text-7xl font-semibold mb-4 ml-7'>Update<br></br> Password</p>
                        <div className="bg-white ring-0  ring-gray-950 m-5 p-10 mb-20 rounded-lg drop-shadow-lg">
                            
                            <form className="flex flex-col justify-start items-start bg-transparent gap-5 " onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-0 relative w-full">
                                    <input type={curvisible ? "text" : "password"} placeholder="Current password" value={oldpass} maxLength={25} onChange={(e) => setOldpass(e.target.value)} className="pr-8 py-1 px-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                                    <div className='absolute right-1 top-2' onClick={() => setCurvisible(!curvisible)}>{curvisible ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>

                                    {err && oldpass.length == 0 ?
                                        <label className="text-red-500 text-xs">Old Password is required</label> : " "
                                    }


                                </div>
                                <div className="flex flex-col gap-0 relative w-full">
                                    <input type={visible ? "text" : "password"} placeholder="New password" value={newpass} maxLength={25} onChange={(e) => setNewpass(e.target.value)} className="pr-8 py-1 px-1  focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>
                                    <div className='absolute right-1 top-2' onClick={() => setVisible(!visible)}>{visible ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>

                                    {err && newpass.length == 0 ?
                                        <label className="text-red-500 text-xs">New Password is required</label> : " "
                                    }
                                    {err && newpass.length > 0 && newpass.length < 4 ?
                                        <label className="text-red-500 text-xs">Password must be above 5 characters</label> : " "
                                    }
                                    {err && newpass.length > 3 && !lower.test(newpass) ?
                                        <label className="text-red-500 text-xs">Password must contain at least one lowercase letter</label> : " "
                                    }
                                    {err && newpass.length > 3 && lower.test(newpass) && !upper.test(newpass) ?
                                        <label className="text-red-500 text-xs">Password must contain at least one uppercase letter</label> : " "
                                    }
                                    {err && newpass.length > 3 && upper.test(newpass) && lower.test(newpass) && !digit.test(newpass) ?
                                        <label className="text-red-500 text-xs">Password must contain at least one digit</label> : " "
                                    }
                                    {err && newpass.length > 3 && digit.test(newpass) && !specialcase.test(newpass) ?
                                        <label className="text-red-500 text-xs">Password must contain at least one special character</label> : " "
                                    }
                                    {err && newpass.length > 3 && digit.test(newpass) && specialcase.test(newpass) && lower.test(newpass) && upper.test(newpass) && newpass.length < 6 ?
                                        <label className="text-red-500 text-xs">Password must be above 5 characters</label> : " "
                                    }
                                </div>
                                <div className="flex flex-col relative w-full">
                                    <input type={convisible ? "text" : "password"} placeholder="Confirm new password" value={newconpass} maxLength={25} onChange={(e) => setNewconpass(e.target.value)} className="pr-8 px-1  py-1 focus:bg-transparent rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>
                                    <div className='absolute right-1 top-2' onClick={() => setConvisible(!convisible)}>{convisible ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>

                                    {err && newconpass.length == 0 ?
                                        <label className="text-red-500 text-xs">Confirm Password is required</label> : " "
                                    }
                                    {err && newconpass.length > 0 && newpass !== newconpass ?
                                        <label className="text-red-500 text-xs">Password Must Match</label> : " "
                                    }
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-5 mx-auto text-sm rounded-full hover:bg-blue-700">Update Password</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Updatepass