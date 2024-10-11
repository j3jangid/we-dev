import React, { useContext } from 'react'
import { StartContext } from '../../Context/StartContext';
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

function MySales() {
    const commonData = useContext(StartContext);
    const salesData = commonData.saleDetails;
    console.log(salesData);

    function deleteFun(e) {
        let localdata = [...salesData]
        localdata.splice(e.target.key, 1);
        commonData.setSaleDetails(localdata)
    }


    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Bill No.</th>
                        <th scope="col">Taxable</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total</th>
                        <th scope="col" className='text-end'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salesData.reverse().map((e, i) => {
                            let customerName = e.billDetail.cName;
                            let customerNumber = e.billDetail.cNumber;
                            let discountType = e.billDetail.billDiscountType;
                            let discountValue = e.billDetail.billDiscountValue;
                            let billNo = e.billDetail.billNo;
                            let itemArr = e.itemsDetail;

                            let totalQty = 0;
                            for (let i = 0; i < itemArr.length; i++) {
                                totalQty += itemArr[i].qty;
                            }

                            let taxAble = 0;
                            for (let i = 0; i < itemArr.length; i++) {
                                taxAble += itemArr[i].saleRate * itemArr[i].qty;
                            }

                            let taxAmt = 0;
                            for (let i = 0; i < itemArr.length; i++) {
                                taxAmt += (itemArr[i].saleRate * itemArr[i].tax / 100) * itemArr[i].qty;
                            }

                            let disAmt = 0;
                            if (discountType === "r") {
                                disAmt = discountValue;
                            } else {
                                disAmt = (taxAble + taxAmt) * discountValue / 100;
                            }

                            let totalAmt = taxAble + taxAmt - disAmt


                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{customerName == '' ? "cash" : customerName}</td>
                                    <td>{billNo}</td>
                                    <td>{taxAble}</td>
                                    <td>{Math.round(taxAmt * 100) / 100}</td>
                                    <td>{totalQty}</td>
                                    <td>{Math.round(disAmt * 100) / 100}</td>
                                    <td>{Math.round(totalAmt * 100) / 100}</td>
                                    <td className='text-end'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <IoSettings />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                {/* <li><Link className="dropdown-item active" to={`/Format1?data=${JSON.stringify(e)}`} rel="noopener noreferrer">Print</Link></li> */}
                                                <li><a className="dropdown-item" href={`/Format1?data=${JSON.stringify(e)}`} target="_blank" rel="noopener noreferrer" >Print</a></li>
                                                <li><Link className="dropdown-item" to={"/sales"}>Another action</Link></li>
                                                <li><Link className="dropdown-item" to={"/sales"}>Something else here</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item text-danger" key={i} to={"/sales"}>Edit</Link></li>
                                                <li className="dropdown-item text-danger" key={i} onClick={deleteFun}>Delete</li>
                                            </ul>
                                        </div>

                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default MySales
