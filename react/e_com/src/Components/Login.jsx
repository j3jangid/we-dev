import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StartContext from './Context/StartContext';

const Login = () => {
  const allUsers = JSON.parse(localStorage.getItem("userData")) || [];
  const [data, setData] = useState({});
  const loginData = useContext(StartContext);
  const goto = useNavigate();

  function getData(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  };

  function verifyUser(e) {
    e.preventDefault();
    let uStatus = verifyRes();
    loginData.setUserStatus(uStatus);
  };

  function verifyRes(){
    let localData = [...allUsers]
    for (let i = 0; i < localData.length; i++) {
      if (localData[i].mailId === data.userMail) {
        if (localData[i].pass === data.userPass) {
          console.log("Pass Mached");
          goto("/")
          return [true, localData[i]];
        } else {
          alert("Incorrect Password");
          break;
        }
      } else {
        alert("You Need To Create a New Account")
        break;
      };
    }
  }

  return (
    <div className='grid grid-cols-2 gap-4 my-20 '>
      <div>
        <img src={require("../Images/Zenin.jpg")} alt="" />
      </div>
      <div className="bg-black h-auto border-8">
        <div className='d-flex flex-column gap-2 my-5 px-5'>
          <p className='fs-1 align-self-center' style={{ fontFamily: "Brush Script MT, cursive" }}>Welcome Back</p>
          <form action="" className='d-flex flex-column gap-2'>
            <p>Email</p>
            <input type="text" name="userMail" id="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={getData} />
            <p>Password</p>
            <input type="password" name="userPass" id="" onChange={getData} />
            <span className='d-flex justify-content-between'>
              <div>
                <input type="checkbox" id='rememerMeConfirmation' name='rememerMeConfirmation' onChange={getData} /><span> Remember Me</span>
              </div>
              <p className='text-danger text-decoration-underline fw-lighter'>Reset Password</p>
            </span>
            <button className='btn loginBtn ' onClick={verifyUser}>Login</button>
          </form>
          <p>Don't Have an Account ? <Link to={"/signup"} className='text-decoration-underline'>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
