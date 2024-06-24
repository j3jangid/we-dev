import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import SaniiroLogo from "./images/Saniiro.svg"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg container-fluid position-fixed bg-white z-1 navMain " >
            <div className="container-fluid ">
                <div className='d-flex justify-content-between navLeftBox'>
                    <a className="navbar-brand" href="#">
                        <img src={SaniiroLogo} alt="Saniiro" height="50" className="d-inline-block align-text-top companyLogo" style={{ height: 38 }} />
                    </a>
                    <div className="collapse navbar-collapse pt-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#whySaniiroSec">Why Saniiro..??</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#featuersSec">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active getTrialBtn" aria-current="page" href="#startNowSec">Get Trial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#feedbackSec">Feedback</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#faqSec">FAQ's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact-us">Contact-Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="d-flex gap-2" role="search">
                    <button className="navbar-toggler rounded-5 toggleBtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <IoIosMenu />
                    </button>
                    <a className="btn rounded-5 contactBtn" href="mailto:jatinjangid97@gmail.com"><IoMailOutline /></a>
                    <a className="btn rounded-5 contactBtn" href="tel:+91-9660673426"><IoMdCall /></a>
                    <a className='btn rounded-0 text-decoration-none loginBtn' target='main' href={"https://app.saniiro.com/"}>Login<RiLoginCircleFill /></a>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
