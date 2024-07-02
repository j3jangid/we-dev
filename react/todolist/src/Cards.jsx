import React from 'react'

const Cards = ({ allData, editHandle, deleteHandle,getData }) => {
    return (
        <div className='container-fluid mt-3 p-3 overflow-auto' style={{ height: "65%" }}>
            <div className='row'>
                {
                    getData.map((obj, i) => (
                        obj.visiblity && (
                            <div key={i} className='d-flex justify-content-center align-items-end col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2'>
                                <div className="card border-dark" style={{ width: "100%" }}>
                                    <div className="card-header fs-5">{obj.sr} : <span className="text-primary text-decoration-underline">{obj.title}</span></div>
                                    <div className="card-body d-flex flex-column justify-content-between align-items-start">
                                        <p className="card-text p-0 m-0">{obj.desc}</p>
                                        <p className="p-0 m-0"><span className='text-decoration-underline' >Saved on</span> - {obj.savingTime}</p>
                                        {obj.updateTime ? <p className="p-0 m-0"><span className='text-decoration-underline'>Updated on</span> - {obj.updateTime}</p> : ""}
                                        <div className='d-flex justify-content-end align-items-center gap-2' style={{ width: "100%" }}>
                                            <button className='btn btn-warning p-1 px-3' onClick={() => editHandle(obj, i)}>Edit</button>
                                            <button className='btn btn-danger p-1 px-3' onClick={() => deleteHandle(i)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))
                }
            </div >
        </div>
    )
}

export default Cards
