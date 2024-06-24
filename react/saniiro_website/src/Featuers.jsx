import React from 'react'
import featuresData from './featuresData'

function Featuers() {
    return (
        <div className='container-fluid text-center featBox' id='featuersSec'>
            <div className="row getstarted p-3">
                <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex align-items-center justify-content-center '>
                    <span className='h4 text-decoration-underline'>Join 10k+ SMEs and professionals who trust Saniiro.</span>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center '>
                    <a href='#getForm'><button className='gsbtn'>Get Started</button></a>
                </div >
            </div>

            <div className="container pt-4 pb-4">
                <h2 className='text-decoration-underline'><b>Everything you need in a Business Accounting Software</b></h2>
                <div className="row mt-4">
                    {
                        featuresData.map((data) => (
                            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 p-3'>
                                <div className='text-start d-flex flex-column justify-content-between gap-3 p-3 align-items-baseline featuresBox' style={{width:"100%", height:"100%"}}>
                                    <img src={require(`${data.imgLink}`)} className='img-fluid' width={"60px"} alt={data.title} />
                                    <h3 className='text-decoration-underline'>{data.title}</h3>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>


        </div>
    )
}

export default Featuers
