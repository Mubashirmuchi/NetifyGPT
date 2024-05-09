import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>

      <Header />
      <div className="absolute">      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
      </div>

      <form className="p-12 w-3/12 bg-black absolute my-36 mx-auto right-0  left-0">
        <input type="text" placeholder='Email Addresss' name="" id="" className='p-2 m-2' />
        <input type="password" placeholder='Password' name="" id="" className='p-2 m-2' />
        <button className='p-4 m-4'>Sig in</button>
      </form>
    </div>
  )
}

export default Login