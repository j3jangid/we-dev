import React, { useState } from 'react'
import faqData from './faqData'
import Qustionbox from './Qustionbox'

const Faq = () => {
    return (
        <div className='container-fluid faqMainBox mt-5 pt-4 pb-5' id='faqSec'>
            <h1 className='text-center text-decoration-underline mb-4'>Frequently Asked Question</h1>
            <div className="container d-flex flex-column gap-3">
                {
                    faqData.map((data => (
                        <Qustionbox qust={data.qust} ans={data.ans} desc={data.desc} />
                    )))
                }
            </div>
        </div>
    )
}

export default Faq
