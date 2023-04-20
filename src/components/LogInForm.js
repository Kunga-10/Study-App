import React, { useState } from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LogInForm = ({setIsLoginIn}) => {
    const[formData,setFormData]= useState({email:"", password:""})
    const[showPassword,setShowPassword]= useState(false)
    const navigate= useNavigate();

    function ChangeHandler(event)
    {
         setFormData((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
         ))
    }
    function submitHandler(event){
      event.preventDefault();
      setIsLoginIn(true)
      toast.success("Logged In");
      navigate("/dashboard");
      console.log("printing lohin data")
       console.log(formData)

    }
  return (
   <form onSubmit={submitHandler}
   className='flex flex-col w-full gap-y-4 mt-2'>
    <label>
        <p className='text-[.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
            Email Address<sup className='text-red-700'>*</sup>
        </p>
        <input 
        className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full p-[12px] shadow-red-600'
        required
        type="email"
        value={formData.email}
        placeholder='Enter an email'
        onChange={ChangeHandler}
        name="email"
         />
    </label>

    <label>
        <p className='text-[.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
          Passowrd<sup>*</sup>
        </p>
        <div className='flex relative'>
        <input 
        className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
         p-[12px] shadow-red-600'
        required
        type={showPassword ? ("text") : ("password")}
        value={formData.password}
        placeholder='Enter passowrd'
        onChange={ChangeHandler}
        name='password'
         />
         <span className="absolute right-4 top-4" onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
         </span>
         </div>
         
         <Link to="#">
            <p className=' flex justify-end text-[0.75rem] text-[blue] 
            right-2 leading-[1.375rem]'>Forget Password</p>
         </Link>
    </label>

    <button className='w-full 
         bg-purple-700 py-[8px] px-[12px] rounded-md border-red-100
          gap-x-2 gap-y-2 mt-3 mb-4'>Sign In</button>
   </form>
    
  )
}

export default LogInForm