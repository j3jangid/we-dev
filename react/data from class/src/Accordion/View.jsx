import React, { useState } from 'react'
import "./style.css"
function View({ title, topics }) {
    const [show, setshow] = useState(false)
    console.log(show);
    return (
        <div className='mt-2'>
            <div className='box1 d-flex'>
                <div className='item1'><span className='btn' onClick={() => { setshow(!show) }}>{show ? "➖" : "➕"}</span> </div>
                <div className='item2 ms-4'>{title}</div>
            </div>
            {
                show &&
                    <div className='box2'>
                        {
                            topics.map((items) => {
                                return (
                                    <>
                                        <li>{items}</li>
                                    </>
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default View
