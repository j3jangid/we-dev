import React from 'react'
import mainCarde from "./mainCarde"


const Cards = ({ editHandle, deleteHandle, getData, favFun, changebg }) => {
    return (
        <div className='container-fluid pt-5 overflow-auto'>
                <div className='row mt-3'>
                    {
                        getData.map((obj, i) => (
                            obj.visiblity && (
                                obj.fav && (
                                    mainCarde(obj, i, editHandle, deleteHandle, favFun, changebg)
                                )
                            )
                        ))
                    }
                </div>
                <hr class="border border-success border-1 opacity-75 my-2" style={{ width: "100%" }} /> 
                <hr class="border border-success border-1 opacity-75 my-2" style={{ width: "100%" }} /> 
                <div className='row'>
                    {
                        getData.map((obj, i) => (
                            obj.visiblity && (
                                !obj.fav && (
                                    mainCarde(obj, i, editHandle, deleteHandle, favFun, changebg)
                                )
                            )
                        ))
                    }
                </div>
            <div className="row blankBox">

            </div>
        </div>
    )
}

export default Cards
