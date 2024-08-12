import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./LoginStyle.css"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const negivate = useNavigate();
    let status = [false];
    const [err, setErr] = useState();
    const sellerData = JSON.parse(localStorage.getItem("sellerData"))

    function getData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        setErr("")
    }
    console.log(data);
    

    function loginFun(e) {
        e.preventDefault();
        checkSeller();
        if (status[0]) {
            negivate("/dashboard")
        } else {
            setErr("Invalid User Id / Password")
        }
    }

    function checkSeller() {
        for (let i = 0; i < sellerData.length; i++) {
            if (data.userName === sellerData[i].userName) {
                console.log("user NAme matched");
                if (data.userPass === sellerData[i].pass) {
                    console.log("Pass amtched");
                    status = [true, data]
                    return status;
                }
            }
        }
    }




    return (
        <div className='container-fluid py-5 bg-dark'>
            <div className='row'>
                <div className='col col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1'></div>
                <div className='col col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-10 p-3 px-4 bg-dark d-flex flex-column gap-3 innerBox'>
                    <h3 className='text-center mb-4'>Welcome Back</h3>
                    <form action="" className='d-flex flex-column gap-2 text-dark'>
                        <input type="number" name="orgID" id="" placeholder='Organization ID' autoFocus className='px-2' onChange={getData} />
                        <input type="text" name="userName" id="" placeholder='Username' className='px-2' onChange={getData} />
                        <div className='d-flex position-relative'>
                            <input type={show ? "text" : "password"} name="userPass" id="" placeholder='Password' className='px-2 pe-4' onChange={getData} style={{ width: "100%" }} />
                            <div className='position-absolute top-50 end-0 translate-middle-y me-2 pb-1 ' onClick={() => setShow(!show)}>
                                {show ? <FaRegEyeSlash /> : <FaRegEye />}
                            </div>
                        </div>
                        <div className='d-flex text-white justify-content-between'>
                            <p className='text-danger p-0 m-0 errBar' style={{ fontSize: "12px" }}>{err}</p>
                            <p className='p-0 m-0 restPass' style={{ fontSize: "12px" }}>forgot id/userName/password</p>
                        </div>
                        <input type="submit" value="Login" className='btn btn-outline-light loginBtn' onClick={loginFun} />
                    </form>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/register" className='ps-1 joinLine'>Joint Deity's Seller Now</Link>
                        <img src={require("./deity_itself_logo_crop.jpg")} alt="deity_itself" className='img-fluid' style={{ width: "200px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
