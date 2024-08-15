import { useState } from "react";
import Signup from "./Pages/SignUp";
import Navbar from "./Components/NavBar";
import Login from "./Pages/Login";
import SideDesign from "./Components/SideDesign";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="h-screen flex items-center justify-center">
        <SideDesign />
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
