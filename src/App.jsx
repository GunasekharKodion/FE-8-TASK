import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Details from './Details'
import Adduser from './Adduser'
import Fulldetails from './Fulldetails'
import Updatepass from './Updatepass'
import Userlisting from './Userlisting'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>

      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
  <Route path='/adduser' element={<Adduser/>}></Route>
  <Route path='/fulldetails' element={<Fulldetails/>}></Route>
  <Route path='/updatepass' element={<Updatepass/>}></Route>
  <Route path='/userlisting' element={<Userlisting/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
