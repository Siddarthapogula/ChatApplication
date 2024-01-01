import { Link } from "react-router-dom"
import BG_IMG from "../assets/V-for-vendetta-mask-wallpaper-army30.jpg"
import React from 'react'

const Login = () => {
  return (
    <div className=' relative bg-gradient-to-b  from-white '>
      <img className=' absolute -z-10' src={BG_IMG} />
        <div className=''>
        <form onSubmit={(e)=>e.preventDefault()} className=' text-white absolute  
     w-4/12  my-32 mx-auto  right-[9rem] rounded-sm p-16 '>
        <h1 className=" text-xl">Let's start</h1>
      {/* <input  type='text' placeholder='User Name' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' /> */}

      <input  type='text' placeholder='Email Address' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' />

      <Link to="/"><button className=' p-2 my-6   bg-red-700 py-2 w-full rounded-sm' 
      >login</button></Link>

    </form>
        </div>
    </div>
  )
}

export default Login