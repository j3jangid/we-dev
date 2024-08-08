import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const savedData = JSON.parse(localStorage.getItem("userData")) || []
  const [signUpData, setSignUpData] = useState({});
  const [Error, setError] = useState({});
  const goto = useNavigate();

  function getData(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value, })
  }

  function verifyDetails(e) {
    e.preventDefault();
    if (!verify()) {
      let otp = prompt("Enter OTP")
      if (otp) {
        if (otp.trim()) {
          console.log("Success");
          submitDetails(otp)
        } else {
          alert("enter Valid OTP")
        }
      } else {
        alert("Enter OTP")
      }
    } else {
      alert("Enter Valid Data")
    }
  }


  const verify = () => {
    let emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let mobileNoVal = /^\d{10}$/;
    let localError = {}
    let valid = false
    if (!signUpData.fName) {
      localError.fName = "First Name is Requir"
      valid = true
    } else if (signUpData.fName.length < 3) {
      localError.fName = "Too short"
      valid = true
    }
    if (!signUpData.lName) {
      localError.lName = "Last Name is Requir"
      valid = true
    } else if (signUpData.lName.length < 3) {
      localError.lName = "Too Short"
      valid = true
    }
    if (!signUpData.mobileNo) {
      localError.mobileNo = "Enter Mobile No."
      valid = true
    } else if (!mobileNoVal.test(signUpData.mobileNo)) {
      localError.mobileNo = "Mobile No. is not Valid"
      valid = true
    }
    if (!signUpData.mailId) {
      localError.mailId = "Email is require"
      valid = true
    } else if (!emailValidation.test(signUpData.mailId)) {
      localError.mailId = "Email is not valid"
      valid = true
    }
    if (!signUpData.pass) {
      localError.pass = "Enter Password"
      valid = true
    } else if (signUpData.pass.length < 6) {
      localError.pass = "Too Short"
      valid = true
    } else if (signUpData.pass !== signUpData.cPass) {
      localError.cPass = "Wrong Confirm Password"
      valid = true
    }
    // if(!){

    // }
    setError(localError)
    return valid
  }

  function submitDetails(otp) {
    let userCurrentCount = savedData.length + 1
    let localData = [...savedData, { ...signUpData, ["otp"]: otp, ["sr"]: userCurrentCount, ["status"]: true }]
    let signUpDetails = localStorage.setItem("userData", JSON.stringify(localData))
    goto("/login")
  }

  return (
    <div className='grid grid-cols-2 gap-4 my-20 '>
      <div className="bg-black h-auto border-8 pb-4">
        <div className='d-flex flex-column gap-2 mt-3 px-5'>
          <p className='fs-1 align-self-center' style={{ fontFamily: "Brush Script MT, cursive" }}>Gateway of Fashion</p>
          <form action="" className='d-flex flex-column gap-2'>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p ><sup className='text-danger'>*</sup>First Name</p>
                <input className='text-dark px-1' type="text" name="fName" id="" onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.fName}</p>
                }
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Last Name</p>
                <input className='text-dark px-1' type="text" name="lName" id="" onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.lName}</p>
                }
              </div>
            </div>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Mobile No.</p>
                <input className='text-dark px-1' type="number" name="mobileNo" required id="" onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.mobileNo}</p>
                }
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Email</p>
                <input className='text-dark px-1' type="email" name="mailId" id="" required onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.mailId}</p>
                }
              </div>
            </div>
            <div className='d-flex justify-content-between gap-2'>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Password <span className='text-danger text-decoration-underline'> </span></p>
                <input className='text-dark px-1' type="password" name="pass" id="" onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.pass}</p>
                }
              </div>
              <div className='d-flex flex-column gap-2' style={{ width: "100%" }}>
                <p><sup className='text-danger'>*</sup>Confirm Password</p>
                <input className='text-dark px-1' type="text" name="cPass" id="" onChange={getData} />
                {
                  Error && <p className='text-danger'>{Error.cPass}</p>
                }
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
