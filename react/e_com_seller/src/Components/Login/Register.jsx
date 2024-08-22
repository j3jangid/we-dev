import React, { useEffect, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [ranId, setRanId] = useState();
    const negivate = useNavigate();
    const sellerDetails = JSON.parse(localStorage.getItem("sellerDetails")) || []
    const sellerData = JSON.parse(localStorage.getItem("sellerData")) || {}
    let timeDate = new Date();
    let curretTimeDate = `${timeDate.getDate()}/${timeDate.getMonth()}/${timeDate.getFullYear()} & ${timeDate.getHours()}:${timeDate.getMinutes()}:${timeDate.getSeconds()}`

    function getData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function registerFun(e) {
        e.preventDefault()
        let localData = [...sellerDetails, { ...data, ["active"]: true, ["orgId"]: ranId, ["userType"]: "sa", ["regTimeDate"]: curretTimeDate }]
        localStorage.setItem("sellerDetails", JSON.stringify(localData))

        let localData1 = { ...sellerData, [ranId]: {} }
        localStorage.setItem("sellerData", JSON.stringify(localData1))
        setData({});
        negivate("/login");
    }

    useEffect(() => {
        let loaclRan = Math.floor(Math.random() * 90000) + 10000
        setRanId(loaclRan);
    }, [])

    return (
        <div className='container-fluid py-5 bg-dark'>
            <div className='row'>
                <div className='col col-xxl-3 col-xl-3 col-lg-3 col-md-1 col-sm-1 col-xs-1'></div>
                <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 p-3 px-4 bg-dark d-flex flex-column gap-3 innerBox'>
                    <h3 className='text-center'>Registration Desk</h3>
                    <h6 className='text-center text-decoration-underline'>Your Organization ID {ranId}</h6>
                    <form action="" className='d-flex flex-column gap-2 text-dark'>
                        <div className='d-flex gap-2'>
                            <input type="text" name="orgName" id="" placeholder='Organization Name' autoFocus className='px-2' style={{ width: "50%" }} onChange={getData} />
                            <input type="text" name="userName" id="" placeholder='User Name' className='px-2' style={{ width: "50%" }} onChange={getData} />
                        </div>
                        <div className='d-flex gap-2'>
                            <input type="text" name="fName" id="" placeholder='First Name' className='px-2' style={{ width: "50%" }} onChange={getData} />
                            <input type="text" name="lName" id="" placeholder='Last Name' className='px-2' style={{ width: "50%" }} onChange={getData} />
                        </div>
                        <div className='d-flex gap-2'>
                            <input type="text" name="mobileNo" id="" placeholder='Mobile Number' className='px-2' style={{ width: "50%" }} onChange={getData} />
                            <input type="text" name="mailId" id="" placeholder='Mail ID' className='px-2' style={{ width: "50%" }} onChange={getData} />
                        </div>
                        <div className='d-flex gap-2'>
                            <input type="text" name="panNo" id="" placeholder='PAN' className='px-2' style={{ width: "50%" }} onChange={getData} />
                            <input type="text" name="gstNo" id="" placeholder='GST Number' className='px-2' style={{ width: "50%" }} onChange={getData} />
                        </div>
                        <div className='d-flex gap-2'>
                            <input type="password" name="pass" id="" placeholder="Password" className='px-2' style={{ width: "50%" }} onChange={getData} />
                            <div className='position-relative' style={{ width: "50%" }}>
                                <input type={show ? "text" : "password"} name="confirmPass" id="" placeholder='Confirm Password' className='px-2 pe-4' onChange={getData} style={{ width: "100%" }} />
                                <div className='position-absolute top-50 end-0 translate-middle-y me-2 pb-1 ' onClick={() => setShow(!show)}>
                                    {show ? <FaRegEyeSlash /> : <FaRegEye />}
                                </div>
                            </div>
                        </div>

                        <input type="submit" value="Register" className='btn btn-outline-light loginBtn' onClick={registerFun} />
                    </form>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/" className='ps-1 joinLine'>Already a Member</Link>
                        <img src={require("../../Images/deity_itself_logo_crop.jpg")} className='img-fluid' style={{ width: "200px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
