import { useState } from 'react'
import Signup from './Pages/SignUp'
import Navbar from './Components/NavBar'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';
import SupplierApplication from './Components/SupplierApplication';

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
    <Navbar />
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        {/* <Route path='/' element={<SupplierApplication/>} /> */}
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signUp' element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </div>
    </>
  )
}

export default App
