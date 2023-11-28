import React, { useState, useEffect } from 'react'
import image from './assets/drone.jpg'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import image1 from './assets/google.png'
import image2 from './assets/instagramww.png'
import image3 from './assets/facebook.png'
import image4 from './assets/logoo.png'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

    
    const [err, setErr] = useState(false)
    const [eye, setEye] = useState(false)
    const [coneye, setConeye] = useState(false)
    const [box, setBox] = useState(false)
  
    const navigator = useNavigate()
    const space = /^\S*$/
    const alphaonly = /^[a-zA-Z]+$/
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const digit = /\d/
    const lower = /[a-z]/
    const upper = /[A-Z]/
    const specialcase = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/

    // Errors variable
    const [fnamech, setFnamech]=useState(false)
    const [lnamech, setLnamech]=useState(false)
    const [unamech, setUnamech]=useState(false)
    const [emailch, setEmailch]=useState(false)
    const [passch, setPassch]=useState(false)
    const [conpassch, setConpassch]=useState(false)
const [boxx, setBoxx]=useState(false)

    const [adduse,setAdduse]=useState([])
    
    const [values,setValues] =useState({
      fname:'',
      lname:'',
      uname:'',
      email:'',
    password:'',
    conpassword:'',
  imaged: 'https://static.thenounproject.com/png/3192198-200.png'
  })

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem('adduser')) || [];
    setAdduse(existingUsers);
  }, []);

//   adduse.map((user)=>user.email===values.email && 
//     setErr(true))

const onChanj = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.fname.length == 0) {
            setErr(true)
        }
        else if (values.fname.length < 3) {
            setErr(true)
        }
        else if (!alphaonly.test(values.fname)) {
            setErr(true)
        }
        else if (!alphaonly.test(values.lname)) {
            setErr(true)
        }
        else if (values.lname.length == 0) {
            setErr(true)
        }
        else if (values.lname.length < 3) {
            setErr(true)
        }
        else if (values.uname.length == 0) {
            setErr(true)
        }
        else if (values.uname.length < 3) {
            setErr(true)
        }
        else if (!space.test(values.uname)) {
            setErr(true)
        }
        else if(adduse.some((user) => user.usename === values.uname)){
            setErr(true)
        }
        else if (values.email.length == 0) {
            setErr(true)
        }
        else if (!pattern.test(values.email)) {
            setErr(true)
        }
        else if(adduse.some((user) => user.email === values.email)){
            setErr(true)
        }
        else if (values.password.length == 0) {
            setErr(true)
        }
        else if (values.password.length < 6) {
            setErr(true)
        }
        
        else if (!lower.test(values.password)) {
            setErr(true)
        }
         else if (!upper.test(values.password)) {
             setErr(true)
         }
         else if (!digit.test(values.password)) {
             setErr(true)
         }
         else if (!specialcase.test(values.password)) {
             setErr(true)
         } else if (values.conpassword.length == 0){
            setErr(true)
        }
        else if (values.password !== values.conpassword) {
            setErr(true)
        }

     else if (box !== true) {
            setErr(true)
         }
        else {
           // if(!unamech && !lnamech && !fnamech && !emailch && !passch && !conpassch){
                console.log("iaiiabc")
                const newUser = {
                  id: uuidv4(),
                  firname: values.fname,
                  lasname: values.lname,
                  usename: values.uname,
                  email: values.email,
                 password: values.password,
                 conpassword: values.conpassword,
                 imaged: values.imaged
                };
             
              navigator("/login")
              setAdduse([...adduse, newUser])
      
              localStorage.setItem('adduser',JSON.stringify([...adduse, newUser]))
                Swal.fire({ icon: 'success', title: 'Success', text: 'Signup Successful', })
                console.log("fNAME " + newUser.firname + " lNAME " + newUser.lasname + " uNAME " + newUser.usename + "EMAIL " + newUser.email + " PASSWORD " + newUser.password + " CONPASSWORD " + newUser.conpassword)
              
                setBox(!box)
                setEye(false)
                setConeye(false)
          //  }
            
         
         }
    }
    return (
        <>
            <div className='max-h-screen w-full bg-white font-montserrat font-light '>
                <div className='flex flex-row items-center justify-center '>
                    <div className='basis-1/2 '>
                        <div className='flex flex-col gap-3 justify-start items-start  mx-16'>
                            <div >
                                <img src={image4} className=' bg-slate-200 h-12 w-12 drop-shadow-lg '></img>
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-medium'>Welcome to Drone Crafters!</h1>
                                <h1 className='text-2xl font-medium'>Sign Up</h1> 
                            </div>
                          
                            <div>
                               
                            </div>
                            <div>
                                <form className='flex flex-col justify-start items-start bg-transparent gap-3 ' onSubmit={handleSubmit}>
                                    <div className='flex flex-col  w-full'>
                                        <input type='text' placeholder='First Name' maxLength={15} id='fname' value={values.fname}  onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.fname.length == 0 ?
                                            <label className='text-red-500 text-xs'>First Name is required</label> : ""}
                                        {err && values.fname.length > 0 && !alphaonly.test(values.fname) ?
                                            <label className='text-red-500 text-xs'>First Name must be in alphabets only</label> : ""}
                                        {err && values.fname.length > 0 && alphaonly.test(values.fname) && values.fname.length < 3 ?
                                            <label className='text-red-500 text-xs'>First Name must be above 2 letters</label> : ""}
                                    </div>

                                    <div className='flex flex-col  w-full'>
                                        <input type='text' placeholder='Last Name' maxLength={15} id='lname' value={values.lname} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.lname.length == 0 ?
                                            <label className='text-red-500 text-xs'>Last Name is required</label> : ""}
                                        {err && values.lname.length > 0 && !alphaonly.test(values.lname) ?
                                            <label className='text-red-500 text-xs'>Last Name must be in alphabets only</label> : ""}
                                        {err && values.lname.length > 0 && alphaonly.test(values.lname) && values.lname.length < 3 ?
                                            <label className='text-red-500 text-xs'>Last Name must be above 2 letters</label> : ""}
                                    </div>

                                    <div className='flex flex-col  w-full'>
                                        <input type='text' placeholder='Username' maxLength={15} id='uname' value={values.uname} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.uname.length == 0 ?
                                            <label className='text-red-500 text-xs'>UserName is required</label> : ""}
                                        {err && values.uname.length > 0 && !space.test(values.uname) ?
                                            <label className='text-red-500 text-xs'>UserName must not contain blank spaces</label> : ""}
                                            {err && values.uname.length > 0 && space.test(values.uname) && adduse.some((user) => user.usename === values.uname) ?
                                            <label className='text-red-500 text-xs'>Already entered username</label> : ""}
                                        {err && values.uname.length > 0 && space.test(values.uname) && adduse.some((user) => user.usename !== values.uname) && values.uname.length < 3 ?
                                            <label className='text-red-500 text-xs'>UserName must be above 2 letters</label> : ""}
                                            
                                    </div>

                                    <div className='flex flex-col  w-full'>
                                        <input type='email' placeholder='Email' maxLength={25} id='email' value={values.email} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.email.length == 0 ?
                                            <label className='text-red-500 text-xs'>Email is required</label> : ""}
                                        {err && values.email.length > 0 && !pattern.test(values.email) ?
                                            <label className='text-red-500 text-xs'>Email is invalid</label> : ""}
                                            {err && values.email.length > 0 && pattern.test(values.email) && adduse.some((user) => user.email === values.email) ?
                                            <label className='text-red-500 text-xs'>Already entered email </label> : ""} 
                                    </div>

                                    <div className='flex flex-col relative  w-full'>
                                        <input type={eye ? 'text' : 'password'} placeholder='Password' maxLength={15} id='password' value={values.password} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <div className='absolute right-1 top-0' onClick={() => setEye(!eye)}>{eye ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.password.length == 0 ?
                                            <label className='text-red-500 text-xs'>Password is required</label> : ""}
                                        {err && values.password.length > 0 && !lower.test(values.password) ?
                                            <label className='text-red-500 text-xs'>Password must contain atleast one lowercase letter </label> : ""}
                                        {err && values.password.length > 0 && lower.test(values.password) && !upper.test(values.password) ?
                                            <label className='text-red-500 text-xs'>Password must contain atleast one uppercase letter </label> : ""}
                                        {err && values.password.length > 0 && lower.test(values.password) && upper.test(values.password) && !digit.test(values.password) ?
                                            <label className='text-red-500 text-xs'>Password must contain atleast one numeric digit </label> : ""}
                                        {err && values.password.length > 0 && lower.test(values.password) && upper.test(values.password) && digit.test(values.password) && !specialcase.test(values.password) ?
                                            <label className='text-red-500 text-xs'>Password must contain atleast one special character </label> : ""}
                                        {err && values.password.length > 0 && lower.test(values.password) && upper.test(values.password) && digit.test(values.password) && specialcase.test(values.password) && values.password.length < 6 ?
                                            <label className='text-red-500 text-xs'>Password must be above 5 digits </label> : ""}
                                    </div>

                                    <div className='flex flex-col relative  w-full'>
                                        <input type={coneye ? 'text' : 'password'} placeholder='Confirm Password' maxLength={15} id='conpassword' value={values.conpassword} onChange={onChanj} className='bg-transparent focus:outline-none'></input>
                                        <div className='absolute right-1 top-0' onClick={() => setConeye(!coneye)}>{coneye ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>
                                        <hr class="w-full mt-1"></hr>
                                        {err && values.conpassword.length == 0 ?
                                            <label className='text-red-500 text-xs'>Confirm Password is required</label> : ""}
                                        {err && values.conpassword.length > 0 && values.password !== values.conpassword ?
                                            <label className='text-red-500 text-xs'>Password must match</label> : ""}
                                    </div>
                                    <div className='flex flex-col'>
                                    <div className='flex flex-row gap-3'>
                                        <input type='checkbox' checked={box} onClick={() => setBox(!box)} ></input>
                                        <p>I agree with <span className='text-blue-600 font-medium'>terms and conditions</span></p>
                                        </div>
                                       {err && box !== true ?
                                        <label className='text-red-500 text-xs'>T&C not agreed</label> : ""}
                                    </div>
                                    <div className='flex flex-row justify-center mt-1 items-center gap-10'>
                                        <button className='bg-blue-500 text-white py-2 px-5 text-sm rounded-full'>Sign Up</button>
                                        <p className='text-xs'>I already have an account <span className='text-base font-medium text-blue-600 cursor-pointer'><Link to='/login'>Log In</Link></span></p>
                                    </div>
                                </form>

                            </div>
                            <div className='flex flex-row justify-center items-center gap-3 mx-auto'>
                                <hr className='w-10'></hr>
                                <p>or</p>
                                <hr className='w-10'></hr>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-6 mx-auto'>
                                <img src={image1} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer'></img>
                                <img src={image2} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer  p-2'></img>
                                <img src={image3} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer p-3'></img>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 object-cover overflow-hidden relative'>
                        <p className='absolute text-3xl text-white top-1/2 bottom-1/2 left-10 uppercase text-center'>Hire the best drone service <br></br>provider</p>
                        <img src={image} className='h-screen object-cover overflow-hidden'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

//   const fName = (e) => {
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if (values.fname.length == 0) {
//         setFnamech(true)
//     }
//     else if (values.fname.length < 3) {
//         setFnamech(true)
//     } 
//     else if (!alphaonly.test(values.fname)){
//         setFnamech(true)
//     }
//     else{
//         setFnamech(false)
//     }
//   };

//   const lName = (e) => {
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if (values.lname.length == 0) {
//         setLnamech(true)
//     }
//     else if (values.lname.length < 3) {
//         setLnamech(true)
//     }
//      else if (!alphaonly.test(values.lname)){
//         setLnamech(true)
//     }
//     else{
//         setLnamech(false)
//     }
//   };

//   const UName = (e) => {
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if (values.uname.length == 0) {
//         setUnamech(true)
//     }
//     else if (values.uname.length < 3) {
//         setUnamech(true)
//     } 
//     else if (!alphaonly.test(values.uname)){
//         setUnamech(true)
//     }
//     else if(!space.test(values.uname)){
//         setUnamech(true)
//     }
//     else{
//         setUnamech(false)
//     }
//   };


//   const Emailll=(e)=>{
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if(values.email.length == 0){
// setEmailch(true)
//     } 
//     else if(!pattern.test(values.email)){
//         setEmailch(true)
//     }
//     else{
//         setEmailch(false)
//     }
//   }

//   const Passch=(e)=>{
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if(values.password.length == 0){
//         setPassch(true)
//     }
//     else if(values.password.length < 6){
//         setPassch(true)
//     }
//     else if(!lower.test(values.password)){
//         setPassch(true)
//     }
//     else if(!upper.test(values.password)){
//         setPassch(true)
//     }
//     else if(!digit.test(values.password)){
//         setPassch(true)
//     }
//     else if(!specialcase.test(values.password)){
//         setPassch(true)
//     }
//     else{
//         setPassch(false)
//     }
//   }
  
//   const Conpass=(e)=>{
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//     if(values.conpassword,length === 0){
//         setConpassch(true)
//     } else if(values.conpassword !== values.password ){
//         setConpassch(true)
//     }
//     else{
//         setConpassch(false)
//     }
//   }

//   const Box=(e)=>{
//     if(box !== true){
//         setBoxx(true)
//     }
//     else{
//         setBoxx(false)
//     }
//   }