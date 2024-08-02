import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='grid grid-cols-2 gap-4 my-20 '>
      <div>
        <img src={require("../Images/Zenin.jpg")} alt="" />
      </div>
      <div className="bg-black h-auto border-8">
        <div className='d-flex flex-column gap-2 mt-5 px-5'>
          <p className='fs-1 align-self-center' style={{ fontFamily: "Brush Script MT, cursive" }}>Welcome Back</p>
          <form action="" className='d-flex flex-column gap-2'>
            <p>Email</p>
            <input type="text" name="" id="" />
            <p>Password</p>
            <input type="password" name="" id="" />
            <span className='d-flex justify-content-between'>
              <div>
                <input type="checkbox" id='rememerMeConfirmation' /><span> Remember Me</span>
              </div>
              <p className='text-danger text-decoration-underline fw-lighter'>Reset Password</p>
            </span>
            <button className='btn loginBtn '>Login</button>
          </form>
          <p>Don't Have an Account ? <Link to={"/signup"} className='text-decoration-underline'>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
