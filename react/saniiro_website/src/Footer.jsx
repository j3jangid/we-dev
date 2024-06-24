import React from 'react'
import SaniiroLogo from "./images/Saniiro.svg"
import { FaLinkedin, FaFacebookSquare, FaYoutube, FaInstagram, FaAppStoreIos, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { IoLogoAndroid, IoIosMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='container-fluid text-light p-5' id="contact-us" style={{backgroundColor:"#052973"}}>
        <div className="row footer">
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5'>
                <div className="container-fluid d-flex flex-column gap-3 align-items-start">
                    <a href='#'><img className='bg-light' src={SaniiroLogo} alt="SANIIRO" width={"50%"}/></a>
                    <h3>Made With ❤️ in Pink City</h3>
                    <div className='d-flex gap-3 align-items-center'>
                        <a href=""><FaLinkedin style={{fontSize:"200%"}}/></a>
                        <a href=""><FaFacebookSquare style={{fontSize:"200%"}}/></a>
                        <a href=""><FaYoutube style={{fontSize:"200%"}}/></a>
                        <a href=""><FaInstagram style={{fontSize:"200%"}}/></a>
                    </div>
                </div>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 pb-5'>
                <div className="container-fluid d-flex flex-column align-items-start gap-2 text-decoration-none">
                    <h3 >Quick Links</h3>
                    <a href="#getForm"><FaUserPlus /> Get Trial Version</a>
                    <a href=""><IoLogoAndroid /> Get Android App</a>
                    <a href=""><FaAppStoreIos  /> Get IOS App</a>
                    <a href="app.saniiro.com"><FaUserCircle /> Customer Login</a>


                </div>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12'>
                <div className="container-fluid d-flex flex-column align-items-start gap-2">
                    <h3>Saniiro Contacts</h3>
                    <a href="tel:+91-9660673426"><MdAddCall /> Call Saniiro</a>
                    <a href="mailto:jatinjangid97@gmail.com"><IoIosMail /> Mail Saniiro</a>
                    <a href="https://maps.app.goo.gl/6nL4GY6BiSM6CXxd7"><FaMapMarkerAlt /> 613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
