import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import About from './About'
import Contact from './Contact'

const Navbar = (props) => {
    const islogin=props.islogin;
    const setIsLogIn=props.setIsLogIn;
  return (
    <div className='flex justify-between items-center w-full bg-purple-700
    mx-auto py-4  pt-3 pb-3'>
        <Link to="/">
            <img src={Logo} width={160} height={32} loading="lazy" />
        </Link>

        <nav>
            <ul className=' text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
        {/* login,siugnup,logout,dashboard */}

        <div className='flex  ml-5 mr-3 gap-3'>

        { !islogin &&
            <Link to="/about">
               <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
                text-richblack-100
                bg-richblack-800' >About</button>
            </Link>
        } 

        { !islogin &&
            <Link to="/contact">
               <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
                text-richblack-100
                bg-richblack-800' >Contact</button>
            </Link>
        } 

        { !islogin &&
            <Link to="/login">
               <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
                text-richblack-100
                bg-richblack-800'>Login</button>
            </Link>
        }

        {
            !islogin &&
            <Link to="/signup">
             <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
              text-richblack-100
                bg-richblack-800'>SignUp</button>
            </Link>  
        }

        { islogin &&
            <Link to="/dashboard">
               <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
                text-richblack-100
                bg-richblack-800'>Dashboard</button>
            </Link>  
        }

        {
            islogin &&
            <Link to="/">
               <button className='py-[8px] px-[12px] rounded=[8px] border-richblack-700
               text-richblack-100
                bg-richblack-800' onClick={()=>{
                setIsLogIn(false);
                toast.success("Successfully logout");
                
               }}>
               Logout
               </button>
            </Link>  
        }

        </div>

    </div>
  )
}

export default Navbar