import React from 'react'
import { useState } from 'react'

const Qustionbox = ({ qust, ans, desc }) => {
    const [showAns, setShowAns] = useState(false)
    return (
        <div className='p-2 rounded-3 bg-light faqqBox d-flex flex-column align-items-start gap-3'>
            <div className='d-flex align-items-center gap-3' style={{ width: "100%" }} onClick={() => (setShowAns(!showAns))}>
                <div><img src={require("./images/upArrow.png")} alt="" width={"20px"} className='ms-3' style={{ transform: !showAns ? 'rotate(180deg)' : 'rotate(0deg)', transition: '500ms' }} /></div>
                <h4 className='p-0 m-0'>{qust}</h4>
            </div>
            {
                showAns &&
                <p className='px-3'><span>{ans},</span> {desc}</p>
            }
        </div>
    )
}

export default Qustionbox
