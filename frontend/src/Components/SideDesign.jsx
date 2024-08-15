import React from 'react'
import Signup from '../Pages/SignUp'
import Logo from "../assets/walmartlogo2.png"

function SideDesign() {
  return (
    <>
        <div className='hidden md:block md:w-1/3 h-screen' style={{
            marginLeft: '0px',
            alignContent: 'center',
            backgroundColor: 'rgb(51,114,186)',
        }}>
            <img src={Logo} alt='random' style={{
                width: '80%',
                margin: 'auto',
            }}/>
        </div>
        <Signup />
    </>
  )
}

export default SideDesign