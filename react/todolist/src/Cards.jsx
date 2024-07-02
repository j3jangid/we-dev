import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Cards = ({ allData, editHandle, deleteHandle,getData }) => {
    return (
        <div className='container-fluid p-3 overflow-auto'>
            <div className='row mb-5 pt-5'>
                {
                    getData.toReversed().map((obj, i) => (
                        obj.visiblity && (
                            <div key={i} className='d-flex justify-content-center align-items-end col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2 '>
                                <div className="card border-dark listCard" style={{ width: "100%" }}>
                                    <div className="card-header bg-primary text-white text-decoration-underline fs-5">{obj.title}</div>
                                    <div className="card-body d-flex flex-column justify-content-between align-items-start">
                                        <p className="card-text p-0 m-0">{obj.desc}</p>
                                        <hr class="border border-primary border-1 opacity-75" style={{width:"100%"}}/>
                                        <p className="p-0 m-0"><span className='text-decoration-underline' >Saved on</span> - {obj.savingTime}</p>
                                        {obj.updateTime ? <p className="p-0 m-0"><span className='text-decoration-underline'>Updated on</span> - {obj.updateTime}</p> : ""}
                                        <hr class="border border-primary border-1 opacity-75" style={{width:"100%"}}/>
                                        <div className='d-flex justify-content-end align-items-center pt-3 gap-2' style={{ width: "100%" }}>
                                            <button className='btn btn-outline-primary rounded-5 ' onClick={() => editHandle(obj, i)}><FaRegEdit /></button>
                                            <button className='btn btn-danger rounded-5' onClick={() => deleteHandle(i)}><MdDeleteForever /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))
                }
            </div >
            <div className="row blankBox">

            </div>
        </div>
    )
}

export default Cards
