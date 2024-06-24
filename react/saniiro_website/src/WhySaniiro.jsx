import React from 'react'
import keyPoints from './KeyPoints'

const WhySaniiro = () => {
    return (
        <div className='container-fluid text-center mt-5 ps-5 pt-4 pe-5 pb-1 kpMainBox'id='whySaniiroSec'>
            <div className="container-fluid mb-2">
                <h3 className='display-5'>What Makes</h3>
                <h1 className='saniirofy display-1'>SANIIRO</h1>
                <h3 className='display-5'>So Loved</h3>
            </div>

            <div className="container-fluid mb-4">
                <div className="row ">
                    {
                        keyPoints.map((data) => (
                            <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 g-4'>
                               <div className='d-flex justify-content-between flex-column p-3 bg-light kpBox' style={{width:"100%", height:"100%"}} >
                               <h1>{data.title}</h1>
                                <p className='h6'>{data.desc}</p>
                                <img src={require(`${data.imgLink}`)} className='img-fluid' alt="img" />
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhySaniiro
