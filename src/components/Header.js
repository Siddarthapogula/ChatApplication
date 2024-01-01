import React from 'react'
import Logo from "../assets/logo.webp"


const Header = () => {
  return (
    <div className='w-full shadow-md  flex justify-evenly bg-gradient-to-b from-black '>
        <img className=' rounded-full w-20 p-2' src={Logo}/>
        <h1 className='p-5 text-3xl text-black'>Who are Anonymous !!</h1>

    </div>
  )
}

export default Header