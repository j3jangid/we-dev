import React from 'react'
import custRevData from './customerReview'
import { PiUserCircleCheckFill } from "react-icons/pi";

const Feedback = () => {
    return (
        <>
            <div className='container-fluid mt-4 pb-4' id="feedbackSec" style={{ backgroundColor: "#34A853" }}>
                <div className="container text-center text-decoration-underline pt-4">
                    <h2><b>What customers say about Saniiro</b></h2>
                </div>

                <div className='container d-flex align-items-center gap-3 overflow-auto mb-3'>
                    {
                        custRevData.map((data) => (
                            <div className='d-flex flex-column align-items-start bg-light p-4 pb-0'>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src={require("./images/user.png")} alt="i" width={"50px"} />
                                    <p style={{ width: "610px" }}>{data.review}</p>
                                </div>
                                <div className='d-flex flex-column align-items-end' style={{ width: "100%" }}>
                                    <h6><b>{data.user}</b></h6>
                                    <p>{data.userType}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="container text-center">
                    <a href="https://www.google.com/search?gs_ssp=eJwFwUEOQDAQAMC4SvyhB86q1a56gl-0dquboEIjnm-mbvqtH4YUYVVJG1nNnfy0sxgMAgQZ_Ag4yy9GMsorGyeNYMkt7eNP5juLQms68543pkdcN7--kNj54EL4A-VRHaE&q=saniiro+technologies+private+limited&oq=saniiro+technoogies+&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogTSAQg2NjQzajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#lrd=0x396db5d77b0ba47d:0xffe52a26f83d76e9,1" target='_blank'><button className='reviewBtn' style={{ width: "50%" }}>Check All Reviews</button></a>
                </div>
            </div>
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/7nhhfmx_3OU?autoplay=0&mute=0&controls=1&origin=http%3A%2F%2Flanding.saniiro.net&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3" title="Saniiro Intro" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-1 ps-5">
                        <h4 className='text-decoration-underline'><b>Best in class Accounting, Billing and Inventory software</b></h4>
                        <p className='h6'>
                            At Saniiro Technologies Private Limited, we deliver top-tier accounting and billing software tailored to the unique needs of each client, including a comprehensive GST accounting solution and affordable ecommerce development tools.
                            Our global financialmanagement systems, including user-friendly quotation management software and versatile CMS software, enable seamless management of quotes, invoices, and web content.
                            Additionally, our inventory management software provides detailed insights into orders, inventory levels, sales, and deliveries, complementing our task management software that enhances planning, tracking, testing, and reporting processes to expedite goal achievement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback
