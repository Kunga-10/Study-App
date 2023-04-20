import React from 'react'
import dashboard from '../assets/dashboard.jpg'


const Dashboard = () => {
  return (
    <div className='realtive w-[100vw] h-[100vh] overflow-y-hidden overflow-x-hidden'>
    <h1 className=' ml-[43rem]  text-richblack-100 mt-3 absolute py-[8px] px-[12px] rounded-[8px] bg-purple-700 border-richblack-200'>WELCOME TO StudyNotion</h1>
    <img src={dashboard} height={100} width={1525}></img>
    </div>
  )
}

export default Dashboard