import React from 'react'
import home from '../assets/homelogo.png'

const Home = () => {
  return (
    <div className='flex  justify-center  realtive w-[100vw] h-[100vh]  overflow-y-hidden overflow-x-hidden'>
    <h1 className='mt-3 absolute rounded-[8px] bg-purple-700 py-[8px] text-richblack-100 px-[12px]'>WELCOME TO HOME</h1>
    <img src={home} height={700} width={700}></img>
    </div>
  )
}

export default Home