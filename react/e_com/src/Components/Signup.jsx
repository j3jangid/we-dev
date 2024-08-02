import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // const signUpDetails = localStorage.setItem("userData", [])
  const [signUpData, setSignUpData] = useState({});
  const [passWarning, setPassWarning] = useState();

  function getData(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }

  function verifyDetails(e) {
    e.preventDefault();
    if(signUpData.pass === signUpData.cPass){
      setPassWarning()

    }else{
      setPassWarning("Check Password")
    }
  }

  console.log(signUpData);

  return (
    <div className='grid grid-cols-2 gap-4 my-20 '>
      <div className="bg-black h-auto border-8 pb-4">
        <div className='d-flex flex-column gap-2 mt-3 px-5'>
          <p className='fs-1 align-self-center' style={{ fontFamily: "Brush Script MT, cursive" }}>Gateway of Fashion</p>
          <form action="" className='d-flex flex-column gap-2'>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>First Name</p>
                <input type="text" name="fName" id="" onChange={getData} />
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Last Name</p>
                <input type="text" name="lName" id="" onChange={getData} />
              </div>
            </div>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Mobile No.</p>
                <input type="number" name="mobileNo" required id="" onChange={getData} />
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Email</p>
                <input type="email" name="mailId" id="" required onChange={getData} />
              </div>
            </div>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Password <span className='text-danger text-decoration-underline'> {passWarning}</span> </p>
                <input type="password" name="pass" id="" onChange={getData} />
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Confirm Password</p>
                <input type="text" name="cPass" id="" onChange={getData} />
              </div>
            </div>
            <span className='d-flex justify-content-start gap-2'>
              <input type="checkbox" id="newUserConfirmation" name="newUserConfirmation" onChange={getData} />
              <span><sup className='text-danger'>*</sup> I agree to <Link>Terms & Conditions</Link> and <Link>Privacy Policy</Link></span>
            </span>
            <button className='btn loginBtn' onClick={verifyDetails}>Create Account</button>
          </form>
          <p>Already Have an Account ? <Link to={"/login"} className='text-decoration-underline'>Login In</Link></p>
        </div>
      </div>
      <div>
        <img src={require("../Images/gojo_Suite.jpeg")} alt="" />
      </div>
    </div>
  )
}

export default Signup
