import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Swal from 'sweetalert2'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import image2 from './assets/dslr.png'
import Footer from './Footer'
import Blob from './assets/blob.png'
import Search from './Search'

const Details = () => {

  const [emaild, setEmaild] = useState("")
  const [signindata, setSignindata] = useState([])
  const [unamed, setUnamed] = useState("")
  const [fnamed, setFnamed] = useState("")
  const [lnamed, setLnamed] = useState("")

  useEffect(() => {



    setEmaild(localStorage.getItem('email'))

    setPassd(localStorage.getItem('password'))
  }, [])

  useEffect(() => {
    const getter = JSON.parse(localStorage.getItem("adduser"))
    if (getter) {
      setSignindata(getter)
    }

    signindata.map((user) => setUnamed(user.usename))
    signindata.map((user) => setFnamed(user.firname))
    signindata.map((user) => setLnamed(user.lasname))

  }, [emaild])

  console.log("fnamed ", fnamed)

  const [val, setVal] = useState({
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

    const currentUser = signindata.find((user) => user.email === emaild && user.password === passd);

    if (currentUser) {
      setVal({
        fname: currentUser.firname,
        lname: currentUser.lasname,
        uname: currentUser.usename,
        dob: currentUser.date || '',
        age: currentUser.age || '',
        contact: currentUser.contact || '',
        address: currentUser.address || '',
        state: currentUser.state || '',
        country: currentUser.country || '',
        pincode: currentUser.pincode || '',
        gender: currentUser.gender || '',
        imagec: currentUser.imaged
      });
    }
  }, [emaild, signindata]);


  const data = ["India", "Pakistan", "Nepal", "Bangladesh", "Srilanka", "China", "USA", "Australia", "Japan"]
  const [countryy, setCountryy] = useState('India')
  const [image, setImage] = useState(null);
  const [err, setErr] = useState(false)

  const maleRadioref = useRef(null)
  const femaleRadioref = useRef(null)
  const otherRadioref = useRef(null)
  const prevGenderRef = useRef(null)
  const [passd, setPassd] = useState("")
  const space = /^\S*$/
  const alphaonly = /^[a-zA-Z]+$/
  const digitsonly = /^\d+$/
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const digit = /\d/
  const lower = /[a-z]/
  const upper = /[A-Z]/
  const specialcase = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/


  const [edit, setEdit] = useState(false)

  const [addingdet, setAddingdet] = useState([])
  const [month, setMonth] = useState(false)
  const [c, setC] = useState({ year: null, month: null })






  // useEffect(() => {
  //   console.log("signed data", signindata)
  // }, [signindata])


  //const a= moment()

  // console.log("Days ", a.diff(b,'DAYS'))
  useEffect(() => {
    var a = new Date()
    const b = new Date(val.dob)

    let years = a.getFullYear() - b.getFullYear()
    console.log(a.getFullYear())
    console.log("a",a.getMonth())
    console.log("b",b.getMonth())
    console.log(years)
    let months = a.getMonth() - b.getMonth()

    if (months < 0) {
      years--;
      months += 12;
    }
    
    console.log(months)
    setC({ year: years, month: months })
  }, [val.dob])


  // Imageportion


  const [imagel, setImagel] = useState(localStorage.getItem('profileImage') || 'https://static.thenounproject.com/png/3192198-200.png');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageData = event.target.result;
        setImagel(imageData);
        localStorage.setItem('profileImage', imageData);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {

    fileInputRef.current.click();
  };




  const onChanj = (e) => {
    const { id, value } = e.target;
    setVal((prev) => ({
      ...prev,
      [id]: value,
    }));
    const onGenderChange = (e) => {
      const newGender = e.target.value;
      prevGenderRef.current = newGender;
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault()
    if (val.fname.length == 0) {
      setErr(true)
    }
    else if (!alphaonly.test(val.fname)) {
      setErr(true)
    }
    else if (val.fname.length < 3) {
      setErr(true)
    }
    else if (val.lname.length == 0) {
      setErr(true)
    }
    else if (!alphaonly.test(val.lname)) {
      setErr(true)
    }
    else if (val.lname.length < 3) {
      setErr(true)
    }
    else if (val.uname.length == 0) {
      setErr(true)
    }

    else if (!space.test(val.uname)) {
      setErr(true)
    }
    else if (val.uname.length < 3) {
      setErr(true)
    }

    else if (val.contact.length == 0) {
      setErr(true)

    }
    else if (!digitsonly.test(val.contact)) {
      setErr(true)

    }
    else if (val.contact.length != 10) {
      setErr(true)

    }

    else if (val.state.length == 0) {
      setErr(true)
    }
    else if (val.state.length < 3) {
      setErr(true)
    }
    else if (!alphaonly.test(val.state)) {
      setErr(true)
    }


    else if (val.address.length == 0) {
      setErr(true)
    }
    else if (val.address.length < 5) {
      setErr(true)
    }
    else if (val.pincode.length == 0) {
      setErr(true)

    }
    else if (!digitsonly.test(val.pincode)) {
      setErr(true)

    }
    else if (val.pincode.length != 6) {
      setErr(true)

    }

    else if (val.dob.length == 0) {
      setErr(true)
    }
    else if (val.gender.length == 0) {
      setErr(true)

    }

    else {


      setErr(false)
      const copydetail = {

        firname: val.fname,
        lasname: val.lname,
        usename: val.uname,
        contact: val.contact,
        address: val.address,
        state: val.state,
        country: countryy,
        pincode: val.pincode,
        date: val.dob,
        age: Object.entries(c),
        gender: val.gender,
        imaged: imagel,
      };

      console.log("age ", copydetail.age)

      setSignindata((prev) => {
        const newSigninData = prev.map((user) =>
          user.email === emaild && user.password === passd ? { ...user, ...copydetail } : user
        )
        localStorage.setItem('adduser', JSON.stringify([...newSigninData]));
        return newSigninData;
      }
      );





      Swal.fire({ icon: 'success', title: 'Success', text: 'Submitted Successfully', })
      console.log("Contact " + val.contact + " Address " + val.address + " State " + val.state + " Country " + copydetail.country + " Pincode " + val.pincode)
      setVal({ fname: "", lname: "", uname: "", contact: "", dob: "", email: "", state: "", country: "", pincode: "", address: "", age: "" })
      maleRadioref.current.checked = false
      femaleRadioref.current.checked = false
      otherRadioref.current.checked = false
    }

  }

  return (
    <>
      <div className='min-h-screen w-full bg-slate-100 relative  font-montserrat font-light'>

        <div className='flex flex-row '>

          <div>
            <Nav />
          </div>
          <div className='flex flex-col w-full min-h-screen'>
            <div className=''>
              <Search />
            </div>
            <div>
              <img src={Blob} className='absolute -top-40  -left-40 overflow-hidden'></img>
            </div>
            {/* <div className='flex flex-row justify-center min-h-screen w-full items-center'> */}
            <div className='flex flex-row w-full min-h-screen  justify-evenly items-center'>
              <div className='bg-white ring-0 drop-shadow-lg p-5 m-4 mt-14 mb-6 rounded-lg ring-gray-950'>
                <div className='flex flex-row gap-3 mb-4 justify-between items-center'>
                  <p className='text-4xl font-semibold'>Edit Profile</p>
                  <div className='relative  m-2'>
                    <div>
                      <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
                    </div>

                    <div className='absolute z-10 bg-white p-2 ring-1 ring-black drop-shadow-md bottom-0 left-20 rounded-full cursor-pointer'>
                      {val.imagec && <img src={image2} onClick={handleButtonClick} className='h-5 w-5 '></img>}
                    </div>


                    <div className='h-32 w-32 rounded-full drop-shadow-md object-cover overflow-hidden'>
                      <img src={val.imagec} className='object-fill h-32 w-32'></img>
                    </div>
                  </div>
                </div>
                <form className='flex flex-col justify-start items-start bg-transparent gap-4 ' onSubmit={handleSubmit}>

                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-row '>
                      <div className='flex flex-col '>
                        <input type='text' placeholder='First Name' maxLength={15} id='fname' value={val.fname} onChange={onChanj} className="px-2 py-1 bg-transparent focus:bg-sky-50 rounded-md ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                        {err && val.fname.length == 0 ?
                          <label className='text-red-500 text-xs'>First Name is required</label> : ""}
                        {err && val.fname.length > 0 && !alphaonly.test(val.fname) ?
                          <label className='text-red-500 text-xs'>First Name must be in alphabets only</label> : ""}
                        {err && val.fname.length > 0 && alphaonly.test(val.fname) && val.fname.length < 3 ?
                          <label className='text-red-500 text-xs'>First Name must be above 2 letters</label> : ""}
                      </div>

                      <div className='flex flex-col ml-4'>
                        <input type='text' placeholder='Last Name' maxLength={15} id='lname' value={val.lname} onChange={onChanj} className='px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1  ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black'></input>

                        {err && val.lname.length == 0 ?
                          <label className='text-red-500 text-xs'>Last Name is required</label> : ""}
                        {err && val.lname.length > 0 && !alphaonly.test(val.lname) ?
                          <label className='text-red-500 text-xs'>Last Name must be in alphabets only</label> : ""}
                        {err && val.lname.length > 0 && alphaonly.test(val.lname) && val.lname.length < 3 ?
                          <label className='text-red-500 text-xs'>Last Name must be above 2 letters</label> : ""}
                      </div>
                    </div>
                    <div className='flex flex-col '>
                      <input type='text' placeholder='Username' maxLength={15} id='uname' value={val.uname} onChange={onChanj} className='px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black'></input>

                      {err && val.uname.length == 0 ?
                        <label className='text-red-500 text-xs'>UserName is required</label> : ""}
                      {err && val.uname.length > 0 && !space.test(val.uname) ?
                        <label className='text-red-500 text-xs'>UserName must not contain blank spaces</label> : ""}
                      {err && val.uname.length > 0 && space.test(val.uname) && val.uname.length < 3 ?
                        <label className='text-red-500 text-xs'>UserName must be above 2 letters</label> : ""}
                    </div>




                    <div className='flex flex-col'>
                      <input type="text" placeholder="Enter Contact Number" maxLength={10} id='contact' value={val.contact} onChange={onChanj} className="px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                      {err && val.contact.length == 0 ?
                        <label className="text-red-500 text-xs">Contact No is required</label> : " "
                      }
                      {err && val.contact.length > 0 && !digitsonly.test(val.contact) ?
                        <label className="text-red-500 text-xs">Contact No must be of numeric digits</label> : " "
                      }
                      {err && val.contact.length > 0 && digitsonly.test(val.contact) && val.contact.length != 10 ?
                        <label className="text-red-500 text-xs">Contact No must be of 10 digits</label> : " "
                      }
                    </div>
                    <div className='flex flex-row gap-2 '>
                      <div className="flex flex-col ">
                        <input type="date" placeholder="Enter Date of Birth" id='dob' value={val.dob} onChange={onChanj} max={moment().format("YYYY-MM-DD")} className="px-2 py-1 pr-16 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                        {err && val.dob.length == 0 ?
                          <label className="text-red-500 text-xs">Date of Birth is required</label> : " "
                        }
                      </div>
                      {console.log(val.dob)}
                      <div className='flex flex-col ml-2'>
                        <input type='text' placeholder='Age' maxLength={3} id='age' value={c && !isNaN(c.year) && !isNaN(c.month) ? `${c.year} years ${c.month} months` : " Age"
                        } readOnly className='px-2 py-1 bg-transparent rounded-md ring-1 focus:bg-sky-50 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black'></input>


                      </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <div className='flex flex-col '>
                        <input type='text' placeholder='Address' maxLength={25} id='address' value={val.address} onChange={onChanj} className='px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black'></input>

                        {err && val.address.length == 0 ?
                          <label className='text-red-500 text-xs'>Address is required</label> : ""}

                        {err && val.address.length > 0 && val.address.length < 5 ?
                          <label className='text-red-500 text-xs'>Address must be above 4 letters</label> : ""}
                      </div>

                      <div className='flex flex-col ml-2'>
                        <input type='text' placeholder='State' maxLength={15} id='state' value={val.state} onChange={onChanj} className='px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black'></input>

                        {err && val.state.length == 0 ?
                          <label className='text-red-500 text-xs'>State Name is required</label> : ""}
                        {err && val.state.length > 0 && !alphaonly.test(val.state) ?
                          <label className='text-red-500 text-xs'>State Name must be in alphabets only</label> : ""}
                        {err && val.state.length > 0 && alphaonly.test(val.state) && val.state.length < 3 ?
                          <label className='text-red-500 text-xs'>State Name must be above 2 letters</label> : ""}
                      </div>
                    </div>
                    <div className=''>
                      <select value={countryy} onChange={e => setCountryy(e.target.value)}>
                        {data.map((count) => (
                          <option>{count}</option>))}
                      </select>

                    </div>


                    <div className='flex flex-col'>
                      <input type="text" placeholder="Pincode" maxLength={6} id='pincode' value={val.pincode} onChange={onChanj} className="px-2 py-1 bg-transparent rounded-md focus:bg-sky-50 ring-1 ring-gray-500 focus:outline-none  text-base drop-shadow-md text-black"></input>

                      {err && val.pincode.length == 0 ?
                        <label className="text-red-500 text-xs">Pincode is required</label> : " "
                      }
                      {err && val.pincode.length > 0 && !digitsonly.test(val.pincode) ?
                        <label className="text-red-500 text-xs">Pincode must be of numeric digits</label> : " "
                      }
                      {err && val.pincode.length > 0 && digitsonly.test(val.pincode) && val.pincode.length != 6 ?
                        <label className="text-red-500 text-xs">Pincode must be of 6 digits</label> : " "
                      }


                    </div>
                    <div >
                      <input type='radio' name='gender' id='gender' value='Male' onChange={onChanj} ref={maleRadioref} checked={val.gender === 'Male'}/><span className='font-light'> Male</span>
                      <input type='radio' name='gender' id='gender' value='Female' onChange={onChanj} ref={femaleRadioref} checked={val.gender === 'Female'} className='ml-10' /><span className='font-light'> Female</span>
                      <input type='radio' name='gender' id='gender' value='Others' onChange={onChanj} ref={otherRadioref} checked={val.gender === 'Others'} className='ml-10' /><span className='font-light'> Others</span>
                      <br></br>

                      {err && val.gender.length == 0 ?
                        <label className="text-red-500 text-xs">Gender is required</label> : " "
                      }
                    </div>

                    <div className='flex flex-row justify-center mt-1 items-center gap-10'>
                      <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 text-sm rounded-full'>Update</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Details


{/* User Pic and username details */ }
{/* <div className='flex flex-col justify-center items-center'>
              <div className='bg-white drop-shadow-lg rounded-lg mb-6 mt-4 py-7 px-8 flex flex-col justify-center items-center'>

                <p className='text-lg font-semibold'>{unamed}</p>
                <div className='flex flex-col justify-start gap-2 mt-7'>
                  <div className='bg-slate-100 text-sm py-1 px-10 rounded-lg ring-1 ring-slate-200'>
                    <p className='text-xs text-gray-400'>Email</p>
                    <p>{emaild}</p>
                  </div>
                  <div className='bg-slate-100 text-sm py-1 px-10 rounded-lg ring-1 ring-slate-200'>
                    <p className='text-xs text-gray-400'>Name</p>
                    <div className='flex gap-2'>
                      <p>{fnamed}</p>
                      <p>{lnamed}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>  */}