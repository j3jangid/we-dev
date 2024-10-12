import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Company from '../../Data/CompanyDetail';
import { StartContext } from '../../Context/StartContext';
import attribute from '../../Data/Attributes';
import termAndCondition from '../../Data/TermsAndCondition';

function Format1() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const data = queryParams.get('data');
    const dataObj = JSON.parse(data)
    const billDetailsObj = dataObj.billDetail;
    const itemsDetailArr = dataObj.itemsDetail;
    const commonData = useContext(StartContext);
    const systemItems = commonData.systemItems;
    const itemAttributeNAme = Object.keys(attribute).join('-');
    let totalQty = 0;
    let allItemTotal = 0;
    let taxable = 0;
    let totalTax = 0;
    let discountAmt = 0;

    function getPrint(e) {
        window.print();
    }

    return (
        <div className="contanier-fluid">
            <div className='d-flex justify-content-center m-3'>
                <button onClick={getPrint} >Print Invoice</button>
            </div>
            <div className='container-fluid border border-dark py-2 px-3 d-flex flex-column justify-content-between' style={{ width: "1054px", minHeight: "1490px" }}>
                <div>
                    <header className='row align-items-center mb-3'>
                        <div className='col-8'>
                            <img src={Company.logo} alt="logo" style={{ maxWidth: '50%' }} />
                        </div>
                        <div className='col-4 text-end'>
                            <h4 className='p-0 m-0'>{Company.name}</h4>
                            <p className='p-0 m-0'>{Company.address}, {Company.city}, {Company.state}, {Company.country}, ({Company.pincode})</p>
                            <p className='p-0 m-0'>{Company.gstNo}</p>
                            <p className='p-0 m-0'>+91-{Company.mobileNo}</p>
                            <p className='p-0 m-0'>{Company.emailId}</p>
                        </div>
                    </header>
                    <hr className='p-0 m-0' />
                    <h5 className='text-center p-0 m-0 py-1'>Invoice</h5>
                    <hr className='p-0 m-0' />
                    <section className="row my-3">
                        <div className='col-4'>
                            <h6><strong>Invoice Details</strong></h6>
                            <p className='p-0 m-0'>Invoice Number: <strong>{billDetailsObj.billNo}</strong></p>
                            <p className='p-0 m-0'>Date: <strong>{billDetailsObj.billDate}</strong></p>
                            <p className='p-0 m-0'>Due Date: <strong>{billDetailsObj.billDate}</strong></p>
                        </div>
                        <div className='col-8'>
                            <h6 ><strong>Billed To</strong></h6>
                            <p className='p-0 m-0'>Name: <strong>{billDetailsObj.cName}</strong></p>
                            <p className='p-0 m-0'>Mobile No.: <strong>{billDetailsObj.cNumber}</strong></p>
                            <p className='p-0 m-0'>GST No.: </p>
                            <p className='p-0 m-0'>Address: </p>
                        </div>
                    </section>
                    <hr className='p-0 m-0' />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Item</th>
                                <th scope="col">Unit</th>
                                <th scope="col">
                                    <p className='p-0 m-0'>Attribute</p>
                                    <p className='p-0 m-0 fw-lighter' style={{ fontSize: "10px" }}>({itemAttributeNAme})</p>
                                </th>
                                <th scope="col" className='text-end'>MRP</th>
                                <th scope="col" className='text-end'>SaleRate</th>
                                <th scope="col" className='text-end'>TaxAmt(%)</th>
                                <th scope="col" className='text-end'>QTY</th>
                                <th scope="col" className='text-end'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemsDetailArr.map((e, i) => {
                                    const taxAmt = (e.saleRate * e.qty) * e.tax / 100;
                                    totalTax += taxAmt;
                                    const itemTotal = e.saleRate * e.qty + taxAmt;
                                    allItemTotal += itemTotal;
                                    const itemSaleRate = e.saleRate;
                                    const itemTaxable = e.saleRate * e.qty;
                                    taxable += itemTaxable;
                                    const itemQty = e.qty;
                                    const taxRate = e.tax;
                                    totalQty += itemQty;

                                    const foundObj = systemItems.find((itemObj) => itemObj.id === e.id);

                                    const itemName = foundObj.name;
                                    const ItemUnit = foundObj.units;
                                    const itemMRP = foundObj.mrp;
                                    const itemImg = foundObj.image;

                                    const itemAttributeObj = foundObj.attributes;
                                    const itemAttribute = Object.values(itemAttributeObj).join('-');


                                    if (billDetailsObj.billDiscountType === "r") {
                                        discountAmt = billDetailsObj.billDiscountValue || 0
                                    } else {
                                        discountAmt = allItemTotal * (billDetailsObj.billDiscountValue) / 100
                                    }

                                    return (
                                        <tr className='' style={{ verticalAlign: "center" }}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{itemImg}</td>
                                            <td>{itemName}</td>
                                            <td>{ItemUnit}</td>
                                            <td>{itemAttribute}</td>
                                            <td className='text-end'>{itemMRP}</td>
                                            <td className='text-end'>{itemSaleRate}</td>
                                            <td className='text-end'>{taxAmt} ({taxRate}%)</td>
                                            <td className='text-end'>{itemQty}</td>
                                            <td className='text-end'>{Math.round(itemTotal * 100) / 100}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <hr className='p-0 m-0' />
                    <div className='d-flex justify-content-between'>
                        <td scope="col">Total Items : {itemsDetailArr.length}</td>
                        <td scope="col">Tota Qty : {totalQty}</td>
                        <td scope="col">Item Total : {Math.round(allItemTotal * 100) / 100}</td>
                    </div>
                    <hr className='p-0 m-0' />
                    <div className='row'>
                        <div className='col-9'>
                            <h6 className='p-0 my-3'><strong>Terms & Condition</strong></h6>
                            {
                                termAndCondition.map((e, i) => <p className='p-0 m-0'>{i + 1}. {e}</p>)
                            }
                        </div>
                        <div className='col-3'>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <p className='p-0 m-0'>Taxable : </p>
                                    <strong>{taxable}</strong>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='p-0 m-0'>Tax : </p>
                                    <strong>{Math.round(totalTax * 100) / 100}</strong>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='p-0 m-0'>Discount : </p>
                                    <strong>{Math.round(discountAmt * 100) / 100}</strong>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='p-0 m-0'>Grand Total : </p>
                                    <strong>{Math.round((taxable + totalTax - discountAmt) * 100) / 100}</strong>
                                </div>
                            </div>
                            <div className='d-flex align-items-end justify-content-center border border-dark' style={{ height: "100px" }}>
                                <p className='p-0 m-0'>Seal & Signature</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Format1
