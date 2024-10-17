// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    let auth = JSON.parse(localStorage.getItem("loggedin")) || {}

    const logoutHandle = () => {
        localStorage.setItem("loggedin", JSON.stringify({}))
    }
    return (
        <div>

            <header>
                <div className="container-fluid">
                    <div className="navb-logo" >
                        <u><i>S</i></u><sup>&</sup><u><i>M</i></u>Eco<i><u><i>mm</i></u></i>
                    </div>
                    <div className="navb-items">


                        {auth.email ?
                            <>
                                <div className="item">
                                    <Link to="/">Men Cloths</Link>
                                </div>
                                <div className="item">
                                    <Link to="/">Women Cloths</Link>

                                </div>
                                <div className="item">
                                    <Link to="/">electronics</Link>
                                </div>
                                <div className="item">
                                    <Link to="/">accessories</Link>
                                </div>

                                <div className="item-button">
                                    <Link onClick={logoutHandle} to="/login">Logout</Link>
                                </div>
                            </> :
                            <>

                                <div className="item">
                                    <Link to="/register">Register</Link>
                                </div>
                                <div className="item-button">
                                    <Link to="/login">Login</Link>
                                </div>



                            </>
                        }
                    </div>
                    <div className="mobile-toggle">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#navModal">
                            <i className="bi bi-list"></i>
                        </a>
                    </div>
                    <div className="modal fade" id="navModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <p>Logo</p>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x"></i></button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-line">
                                        <i className="bi bi-house"></i><a href="/">Home</a>
                                    </div>
                                    <div className="modal-line">
                                        <i className="bi bi-info-circle"></i><a href="/about">About</a>
                                    </div>
                                    <div className="modal-line">
                                        <i className="bi bi-filetype-doc"></i><a href="/resume">Resume</a>
                                    </div>
                                    <div className="modal-line">
                                        <i className="bi bi-folder-check"></i><a href="/portfolio">Portfolio</a>
                                    </div>
                                    <div className="modal-line">
                                        <i className="bi bi-telephone"></i><a href="/contact">Let s Talk</a>
                                    </div>
                                </div>
                                <div className="mobile-modal-footer">
                                    <a target="_blank" href="#"><i className="bi bi-instagram"></i></a>
                                    <a target="_blank" href="#"><i className="bi bi-linkedin"></i></a>
                                    <a target="_blank" href="#"><i className="bi bi-youtube"></i></a>
                                    <a target="_blank" href="#"><i className="bi bi-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Navbar
