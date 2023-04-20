import React, { useState } from 'react'
import {AiOutlineEyeInvisible ,AiOutlineEye} from 'react-icons/ai'
import { Link ,Navigate ,useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast'

const SignupForm = ({setIsLoginIn}) => {
    const[formData,setFormData]=useState({firstName:"" 
    ,lastName:""
    ,email:"", 
    password:"" 
    ,confirmPassword:""
   

})

    const navigate= useNavigate();
    const[accountType,setAccountType]= useState("student")
    const[showPassword,setShowPassword]= useState(false)
    const[showConfirmPassword,setshowConfirmPassword]= useState(false)
    const changeHandler=(event)=>{
        setFormData((prev)=>(
        {
            ...prev,
            [event.target.name]:event.target.value
        }))

    }
    
    
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("passowrd does not match");
            return;
        }
        const accountData={
            ...formData
        }
        const finalData={
            ...accountData, accountType
        }

        setIsLoginIn(true)
        toast.success("Account created");
        console.log("printing signup data")
       console.log(finalData)
        navigate("/dashboard");
        
  
      }

  return (
    <div>
        <div className='flex bg-purple-700 my-6 gap-x-1 rounded-full max-w-max'>
            <button 
            value={formData.accountType}
            className={`${accountType==="student" ?
            "bg-red-700 text-richblack-25" :
            "bg-transparent text-richblack-100"} py-2 px-5 rounded-full  transition-all
             duration-200`}
            onClick={()=>{
                setAccountType("student")
            }}
            >Student</button>

            <button 

          
            className={`${accountType==="instructor" ?
            "bg-red-700 text-richblack-25" :
            "bg-transparent text-richblack-100"} py-2 px-5 rounded-full  transition-all
             duration-200`}
            onClick={()=>{
                setAccountType("instructor")
            }}
           >Instructor</button>
        </div>

        <form onSubmit={submitHandler}>

            <div className='flex justify-between items-center gap-x-4'>
             <label>
                <p  className='text-[0.875rem] text-richblack-5  leading-[1.375rem]'
                >First Name<sup className='text-red-700'>*</sup></p>
                <input type='text'
                 className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
                 p-[12px] shadow-red-600'
                required
                placeholder='Enter first name'
                
                name='firstName'
                onChange={changeHandler}
                />
             </label>

             <label>
                <p  className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'
                >Last Name<sup className='text-[red]'>*</sup></p>
                <input type='text'
                 className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
                  p-[12px] shadow-red-600'
                required
                placeholder='Enter last name'
                value={formData.lastName}
                name='lastName'
                onChange={changeHandler}
                />
             </label>
            </div>

            <label>
                <p  className='text-[.875rem] text-richblack-5 mt-1 leading-[1.375rem]'
                >Email Address<sup className='text-[red]'>*</sup></p>
                <input type='email'
                 className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
                 p-[12px] shadow-red-600'
                required
                placeholder='Enter email address'
                value={formData.email}
                name='email'
                onChange={changeHandler}
                />
             </label>

            <div className='flex justify-between items-center gap-x-4' >
             <label>
                <p  className='text-[.875rem] text-richblack-5 mt-1 leading-[1.375rem]'
                >Create Password<sup className='text-[red]'>*</sup></p>
                <div className='flex relative'>
                <input type={showPassword ? ("text"):("password")}
                 className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
         p-[12px] shadow-red-600'
                required
                placeholder='Enter passowrd'
                value={formData.password}
                name='password'
                onChange={changeHandler}
                />
                <span className="absolute right-4 top-4" onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                </div>
             </label>

             <label>
                <p  className='text-[.875rem] text-richblack-5 mt-1 leading-[1.375rem]'
                >Confirm Password<sup className='text-[red]'>*</sup></p>
                <div className='flex relative'>
                <input type={showConfirmPassword ? ("text"):("password")}
                 className='bg-richblack-800 rounded-[0.58rem] text-richblack-100 w-full
                  p-[12px] shadow-red-600'
                required
                placeholder='Enter passowrd'
                value={formData.confirmPassword}
                name='confirmPassword'
                onChange={changeHandler}
                />
                <span className="absolute right-4 top-4" onClick={()=>
                setshowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>
                </div>
             </label>

             </div>
             <button className='w-full 
         bg-purple-700 py-[8px] px-[12px] rounded-md border-red-100
          gap-x-2 gap-y-2 mt-3 mb-4'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm