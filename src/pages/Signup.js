import React from 'react'
import signupImage from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setIsLoginIn}) => {
  return (
    <div>
       <Template
          title="Join a hands to provide education to millions "
          desc1="Build skills for today, tomorow and beyond"
          desc2="Education to fututre-proof your career"
          image={signupImage}
          formtype="signup"
          setIsLoginIn={setIsLoginIn}

        />
    </div>
  )
}

export default Signup