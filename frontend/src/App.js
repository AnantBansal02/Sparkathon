import { useState } from 'react'
import Signup from './Pages/SignUp'
import Navbar from './Components/NavBar'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <Navbar />
    <div className='p-4 h-screen flex items-center justify-center'>
      <Signup />
      {/* <Login /> */}
    </div>
    </>
  )
}

export default App
