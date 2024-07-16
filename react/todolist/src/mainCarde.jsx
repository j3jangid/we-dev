import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const mainCarde = (obj, i, editHandle, deleteHandle, favFun, changebg) => {
    console.log(obj.bgColor);
    return (
        <div key={i} className='d-flex justify-content-center align-items-end col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-2 '>
            <div className="card border-dark listCard" style={{ width: "100%", backgroundColor:obj.bgColor}}>
                <div className="card-header text-white text-decoration-underline ps-0 fs-5"><button className='btn' onClick={() => favFun(i)}>{!obj.fav ? <FaRegStar /> : <FaStar />}  {obj.title}</button></div>
                <div className="card-body bg-light bg-opacity-50 d-flex flex-column justify-content-between align-items-start">
                    <p className="card-text p-0 m-0">{obj.desc}</p>
                    <hr class="border border-success border-1 opacity-75 my-2" style={{ width: "100%" }} />
                    <p className="p-0 m-0"><span  >Saved on</span> - {obj.savingTime}</p>
                    {obj.updateTime ? <p className="p-0 m-0"><span >Updated on</span> - {obj.updateTime}</p> : ""}
                    <hr class="border border-success border-1 opacity-75 my-2" style={{ width: "100%" }} />
                    <div className='d-flex justify-content-end align-items-center gap-2' style={{ width: "100%" }}>
                        <input type="color" name="" id="" value={obj.bgColor} onChange={(e)=>changebg(e,i)} />                        
                        <button className='btn btn-outline-success rounded-5' onClick={() => editHandle(obj, i)}><FaRegEdit /></button>
                        <button className='btn btn-danger rounded-5' onClick={() => deleteHandle(i)}><MdDeleteForever /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainCarde
