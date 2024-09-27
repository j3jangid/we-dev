import React, { useContext, useState } from 'react'
import StartContext from '../ContextDataFol/StartContext';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const BrandsAdd = () => {
    const [show, setShow] = useState([true, "Add New"]);
    const [brand, setBrand] = useState("");
    const [err, setErr] = useState("");
    const sellerData = JSON.parse(localStorage.getItem("sellerData")) || {}
    const commonData = useContext(StartContext);
    const orgId = commonData.userAuth[1].orgId
    const showAllData = sellerData[orgId].brands || []

    console.log("all Data");
    console.log(showAllData);


    function addContant() {
        if (show[0]) {
            setShow([false, "Close"])
        } else {
            setShow([true, "Add New"]);
        }
    }

    function getData(e) {
        setBrand(e.target.value);
        setErr("");
    }

    function checkInSellerData() {
        let exist = false
        for (let j = 0; j < sellerData[orgId].brands.length; j++) {
            if (brand === sellerData[orgId].brands[j]) {
                exist = true
                setErr("Already Exist");
                break;
            }
        }
        return exist;
    }

    function savedata(e) {
        e.preventDefault();
        if (sellerData[orgId].brands) {
            if (!checkInSellerData()) {
                let localData = { ...sellerData };
                localData[orgId].brands = [...localData[orgId].brands, brand];
                localStorage.setItem("sellerData", JSON.stringify(localData));
                setBrand("")
            }
        } else {
            let localData = { ...sellerData };
            localData[orgId] = { ...localData[orgId], "brands": [brand] };
            localStorage.setItem("sellerData", JSON.stringify(localData));
            setBrand("")
        }
    }

    return (
        <div>
            <div className='position-sticky top-0 z-1' style={{ color: "#C3A665" }} >
                <div className='d-flex bg-dark justify-content-between align-items-center p-2' style={{ borderBottom: "1px solid #C3A665" }}>
                    <h3>Brands</h3>
                    <div className='d-flex'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className='btn btn-outline-primary loginBtn' style={{ width: "150px" }} onClick={addContant}>{show[1]}</button>
                    </div>
                </div>
                {
                    !show[0] &&
                    <div >
                        <div className='d-flex justify-content-between bg-dark p-2 ' style={{ borderBottom: "1px solid #C3A665" }}>
                            <h4>Add New Brand</h4>
                            <div className='d-flex align-items-center'>
                                <p className='m-0 text-danger px-2' style={{ fontSize: "10px" }}>{err}</p>
                                <form className='d-flex justify-content-between gap-2'>
                                    <input className="form-control me-2" type="text" value={brand} placeholder='Brand Name' onChange={getData} />
                                    <button className='btn btn-outline-primary loginBtn' onClick={savedata}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='d-flex position-relative' >
                <div style={{ width: "100%" }}>
                    <table className="table table-dark table-striped">
                        <thead >
                            <tr style={{ color: "#C3A665" }}>
                                <th className='text-dark' style={{ backgroundColor: "#C3A665", width: "5%" }} scope="col">S.N.</th>
                                <th className='text-dark' style={{ backgroundColor: "#C3A665", width: "85%" }} scope="col">Brand</th>
                                <th className='text-dark text-end px-3' style={{ backgroundColor: "#C3A665", width: "10%" }} scope="col">Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showAllData.map((e, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}.</th>
                                        <td>{e}</td>
                                        <td className='text-end px-3'>
                                            <FaEdit /> | <MdOutlineDeleteForever className='fs-5' />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BrandsAdd
