import React, { useContext, useEffect, useState } from 'react';
import { StartContext } from '../../Context/StartContext';
import { useNavigate } from 'react-router-dom';

function Calculation({ customer }) {
    const commonData = useContext(StartContext);
    const selectedArr = commonData.selectedItems;
    const salesData = commonData.saleDetails;
    const navigate = useNavigate();
    const date = new Date();
    const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const [disdetails, setDisdetails] = useState({
        disAmt: 0,
        disValue: "",
        disType: "p"
    });

    const [values, setValues] = useState({
        totalTaxAble: 0,
        totalTaxAmt: 0,
        totalQty: 0,
    });

    function disType(e) {
        setDisdetails((preVal) => ({ ...preVal, disType: e.target.value }));
    }

    function disValue(e) {
        setDisdetails((preVal) => ({ ...preVal, disValue: e.target.value }));
    }

    function calculateDiscount(totalTaxAble, totalTaxAmt) {
        let final = 0;
        const value = parseFloat(disdetails.disValue) || 0;

        if (disdetails.disType === "r") {
            final = value;
        } else {
            final = ((totalTaxAble + totalTaxAmt) * value) / 100;
        }

        setDisdetails((preVal) => ({ ...preVal, disAmt: (Math.round(final * 100)) / 100 }));
    }

    function saveBill() {
        if (selectedArr.length > 0) {
            let billitems = [];
            for (let i = 0; i < selectedArr.length; i++) {
                let itemDetail = {
                    id: selectedArr[i].id,
                    qty: selectedArr[i].qty,
                    saleRate: selectedArr[i].saleRate,
                    tax: selectedArr[i].tax,
                }
                billitems.unshift(itemDetail);
            }

            commonData.setSaleDetails((preVal) => ([
                ...preVal,
                {
                    billDetail: {
                        billNo: "pos-" + (salesData.length + 1),
                        cName: customer.name === "" ? "cash" : customer.name,
                        cNumber: customer.number,
                        billDiscountType: disdetails.disType,
                        billDiscountValue: disdetails.disValue,
                        billDate: currentDate
                    },
                    itemsDetail: billitems
                }
            ]));
            resetSelected();
            navigate("/sales");
        }
    }

    function resetSelected() {
        commonData.setSelectedItems([]);
        setDisdetails((preVal) => ({ ...preVal, disValue: "", }))
    }

    useEffect(() => {
        let totalTaxAble = 0;
        let totalTaxAmt = 0;
        let totalQty = 0;

        for (let item of selectedArr) {
            totalTaxAble += item.saleRate * item.qty;
            totalTaxAmt += (item.saleRate * item.tax / 100) * item.qty;
            totalQty += item.qty;
        }

        const newValues = {
            totalTaxAble: (Math.round(totalTaxAble * 100)) / 100,
            totalTaxAmt: (Math.round(totalTaxAmt * 100)) / 100,
            totalQty: (Math.round(totalQty * 100)) / 100,
        };
        setValues(newValues);

        calculateDiscount(newValues.totalTaxAble, newValues.totalTaxAmt);

    }, [selectedArr]);

    useEffect(() => {
        calculateDiscount(values.totalTaxAble, values.totalTaxAmt);
    }, [disdetails.disValue, disdetails.disType]);

    return (
        <div className='p-0 m-0 bg-light'>
            <div className='d-flex justify-content-between bg-dark text-light py-1 px-3'>
                <p className='p-0 m-0'>Total Qty: {values.totalQty}</p>
                <p className='p-0 m-0'>Item Total: {values.totalTaxAble + values.totalTaxAmt}</p>
            </div>

            <div className='border border-dark p-2 m-0' >
                <p className='p-0 m-0'>Total Taxable: {values.totalTaxAble}</p>
                <p className='p-0 m-0'>Total Tax: {values.totalTaxAmt}</p>
                <div className='d-flex'>
                    <input type="number" value={disdetails.disValue} onChange={disValue} />
                    <select onChange={disType} value={disdetails.disType}>
                        <option value="p">%</option>
                        <option value="r">Rs</option>
                    </select>
                    <p className='p-0 m-0'>Discount Amt: {disdetails.disAmt}</p>
                </div>
                <p className='p-0 m-0'>Grand Total: {Math.round(((values.totalTaxAble + values.totalTaxAmt) - disdetails.disAmt) * 100) / 100}</p>
                <div className='d-flex justify-content-between'>
                    <button onClick={resetSelected}>Reset</button>
                    <button onClick={saveBill}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Calculation;
