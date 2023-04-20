import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoginIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] mx-auto py-12 justify-between gap-y-0'>
       <div className='w-11/12 max-w-[450px]'>
         <h1 className='text-[1.785rem] text-richblack-5 font-semibold leading-[2.375rem]'>{title}</h1> 

         <p className='text-[1.125rem] mt-4 leading-[1.625rem]'>
          <span className='text-richblack-100'>{desc1}</span>
          <br/>
          <span className='text-blue-100 italic'>{desc2}</span>
         </p>
         <br/>

         {formtype==="signup" ?(<SignupForm setIsLoginIn={setIsLoginIn}/>):
         (<LogInForm setIsLoginIn={setIsLoginIn}/>)}

         <div className='flex w-full items-centermy-4 gap-x-2'>
          <div className='w-full h-[1px] bg-purple-700'></div>
          <p className='text-richblack-700 font-medium leading-[1.325rem]'>OR</p>
          <div className='w-full h-[1px] bg-purple-700'></div>
         </div>

         <button className='flex w-full justify-center items-center 
         bg-purple-700 py-[8px] px-[12px] rounded-md border-red-100 gap-x-2 gap-y-2 mt-3'>
         <FcGoogle/>
         <p className='text-[1.125rem] gap-8'>SignUp with Google</p>
         </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img  src={frameImage} alt='Pattern' height={504} 
            width={558} loading='lazy'></img>

           <img 
           className="absolute -top-4 right-4" 
           src={image} alt='Students'
            height={490} 
            width={558} 
            loading='lazy'></img>
        </div>
       

    </div>
  )
}

export default Template