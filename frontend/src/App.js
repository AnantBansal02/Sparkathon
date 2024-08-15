import { useState } from 'react'
import Signup from './Pages/SignUp'
import Navbar from './Components/NavBar'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';
import SupplierApplication from './Components/SupplierApplication';
import SideDesign from "./Components/SideDesign";

function App() {
  const { authUser } = useAuthContext();
  const path = window.location.pathname;
  path.toLowerCase();
  return (
    <>
      {path === "/login" || path === "/signup" ? null : <Navbar />}
      <div
        className="flex items-center justify-center"
      >
        {path === "/login" || path === "/signup" ? <SideDesign /> : null}
        <Routes>
          <Route path='/' element={<SupplierApplication />} />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
