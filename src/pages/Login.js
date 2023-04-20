import React from 'react'
import loginImage from '../assets/login.png'
import Template from '../components/Template'

const Login = ({setIsLoginIn}) => {
  return (
    <div>
        <Template
          title="Welcome Back"
          desc1="Build skills for today, tomorow and beyond"
          desc2="Education to fututre-proof your career"
          image={loginImage}
          formtype="login"
          setIsLoginIn={setIsLoginIn}

        />
    </div>
 
  )
}

export default Login