import React from 'react'
import integratData from './integratData'
import { SiNamemc } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { PiNumberSquareSix, PiNumberSquareZero } from "react-icons/pi";


const StartNow = () => {
    return (
        <div className='container mt-5 p-5 startNowBox' id='startNowSec'>
            <div className="container d-flex flex-column justify-content-center align-items-center mb-4 pt-3 integrationBox">
                <h2 className='h2 text-decoration-underline'><b>Integrated With</b></h2>
                <div className='d-flex gap-3 align-items-center overflow-auto mb-4 ps-4 integratedClients' style={{ width: "95%" }}>
                    {
                        integratData.map((link) => (
                            <div className='p-2'>
                                <img src={require(`${link}`)} alt="inte" height={"60px"} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container-fluid formMainBox p-5 pt-4">
                <div className="row mb-4 text-center text-decoration-underline" id="getForm"><h1><b>Get Started In less Then 60 Seconds</b></h1></div>
                <div className="row">
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-4'>
                        <div className='d-flex flex-column align-items-center justify-content-center text-light formImg' style={{height:"100%"}}>
                            <h2 className='p-0 m-0'><b>Less Then</b></h2>
                            <div className='d-flex align-items-center justify-content-center'>
                            <PiNumberSquareSix style={{fontSize:"17vw"}}/>
                            <PiNumberSquareZero style={{fontSize:"17vw"}} />
                            </div>
                            <h2 className='p-0 m-0'><b>Seconds</b></h2>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0'>
                        <form action="" className='formBox rounded-4 p-4'>
                            <div style={{ width: "100%" }}>
                                <h2 className='text-center mb-4'><b>Try Before You Buy</b></h2>
                            </div>
                            <div className='d-flex flex-column gap-4' style={{ width: "100%" }}>
                                <div className='formInput'>
                                    <input type="text" name="" id="" placeholder='Full Name' style={{ width: "95%" }} />
                                    <SiNamemc className='m-2' />
                                </div>
                                <div className='formInput'>
                                    <input type="mail" name="" id="" placeholder='Email Id' style={{ width: "100%" }} />
                                    <MdAlternateEmail className='m-2' />
                                </div>
                                <div className='formInput'>
                                    <input type="text" name="" id="" placeholder='User Name' style={{ width: "100%" }} />
                                    <FaUserCircle className='m-2' />
                                </div>
                                <div className='formAdd d-flex gap-3'>
                                    <select name="" id="" style={{ width: "50%" }}>
                                        <option value="" selected>India</option>
                                    </select>
                                    <select name="" id="" style={{ width: "50%" }}>
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='formInput'>
                                    <input type="tel" name="" id="" maxLength={"10"} placeholder='Mobile Number' style={{ width: "100%" }} />
                                    <FaMobileRetro className='m-2' />
                                </div>
                                <div className='d-flex gap-2'>
                                    <input type="checkbox" name='' id='' />
                                    <label htmlFor="">I agree to the <a href='#'>Terms of Service and Privacy Policy</a>.</label>
                                </div>
                                <div>
                                    <button className='btn btn-dark' type="submit" style={{ width: "100%" }}>Try it Free For 7 Days<IoCheckmarkDoneCircleSharp /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartNow
