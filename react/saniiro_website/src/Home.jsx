import React from 'react'
import trustedBY from './Trustedby'

const Home = () => {
  return (
    <>
      <div className='container-fluid pt-5' style={{ backgroundColor: "#F15B25" }}>
        <div className='row'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5'>
            <h1 className='pt-3 saniirofy display-1'>SANIIROFY</h1>
            <h1 className='your display-1'>YOUR</h1>
            <h1 className='business display-1'>BUSINESS</h1>
            <p className='pt-2 pb-2'>Step into the future of finance with Saniiro Technologies, your passport to innovation in cloud- based SaaS solutions. Unleash the full potential of your business with our dynamic accounting software, where billing, inventory, accounting, production management, and CRM modules dance in perfect harmony. Seamlessly integrated with NSDL for e-way billing and E-invoicing compliance, our platform is your ultimate partner in staying ahead of the curve. Embrace the future with Saniiro and redefine the way you do business.</p>
            <button className='container-fluid btn btn-dark p-3'><a className='text-decoration-none text-light fs-5' href="#getForm">Get Demo Account Now</a></button>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-5'>
            <img className='img-fluid' src={require("./images/saniiroExpand.png")} alt="SANIIRO" />
          </div>
        </div>
      </div>

      <div className='container d-flex align-items-center flex-column mt-5 rounded-3 text-center trustBox p-4 pb-2'>
        <h2 className='text-center text-decoration-underline' ><b>Trusted by thousands of businesses worldwide</b></h2>
        <label className='text-decoration-underline mb-4'>Our Prestigious Clients</label>
        <div className='container d-flex overflow-auto border-start border-end border-light'>
          {
            trustedBY.map((company) => (
              <div style={{height:"20vh"}}>
                <div className='d-flex justify-content-between flex-column p-3' style={{height:"100%"}}>
                  <img src={require(`${company.companyLogo}`)} className='img-fluid' alt={company.companyName} width={"120px"} />
                  <h5 className='text-dark'style={{fontSize:"2.5vh"}}>{company.companyName}</h5>
                </div>
              </div>
            ))
          }

        </div>
        <label className='text-decoration-underline'>Awards & Ratings</label>
        <div className='container'>
          <div className=" row">
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4'>
              <div className="row d-flex justify-content-center align-items-center m-0 p-4 g-4 awardBox">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award1.png")} alt="Award" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award2.png")} alt="Award" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award3.png")} alt="Award" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award4.png")} alt="Award" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award5.png")} alt="Award" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0">
                  <img src={require("./images/award6.png")} alt="Award" className='img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-4 '>
              <div className="row d-flex justify-content-center align-items-center m-0 ratingBox" style={{ height: "100%", width: "100%" }}>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <img src={require("./images/rating1.jpg")} alt="Rating" className='img-fluid' /> 
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <img src={require("./images/rating2.jpg")} alt="Rating" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <img src={require("./images/rating3.jpg")} alt="Rating" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <img src={require("./images/rating4.jpg")} alt="Rating" className='img-fluid' />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <img src={require("./images/rating5.jpg")} alt="Rating" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
