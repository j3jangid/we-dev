import React, { useContext } from 'react'
import { StartContext } from '../../Context/StartContext';

function SelectedItems() {
    const commonData = useContext(StartContext);
    const selectedArr = commonData.selectedItems;

    function changeQty(e) {
        const ID = e.target.id;
        const checkIndex = selectedArr.findIndex(itemObj => itemObj.id == ID);
        let localData = [...(commonData.selectedItems)];

        if (e.target.name === "dec") {
            if (localData[checkIndex].qty > 1) { 
                localData[checkIndex].qty -= 1;
            }
        }

        if (e.target.name === "inc") {
            localData[checkIndex].qty += 1;
        }
        commonData.setSelectedItems(localData);
    }

    function deleteItem(e) {
        let ID = e.target.id;
        const checkIndex = selectedArr.findIndex(itemObj => itemObj.id == ID);
        let localData = [...(commonData.selectedItems)];
        localData.splice(checkIndex, 1);
        commonData.setSelectedItems(localData);
    }

    return (
        <div className='overflow-auto' style={{ height: "400px" }}>
            {
                commonData.selectedItems.map((e) => (
                    <div className='col-12 m-0 p-0' key={e.id}>
                        <div className='border border-dark m-2 p-2'>
                            <div className='d-flex gap-2'>
                                {e.image}
                                <div>
                                    <p className='m-0 p-0'>{e.name} ({e.units}) </p>
                                    <div className='d-flex gap-2'>
                                        <p className='m-0 p-0'>{e.itemCategory}</p>
                                        <div className='d-flex gap-2'>(
                                            {Object.entries(e.attributes).map(([attrKey, attrValue]) => (
                                                <p key={attrKey} className='m-0 p-0'>{attrValue}</p>
                                            ))}
                                            )
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-2 m-0 p-0' >
                                <p className='m-0 p-0'>MRP: {e.mrp}</p>
                                <p className='m-0 p-0'>Sale Rate: {e.saleRate}</p>
                                <p className='m-0 p-0'>Tax: {e.tax}%</p>
                            </div>
                            <div className='d-flex gap-2 m-0 p-0'>
                                <p className='m-0 p-0'>barcode: {e.barCode}</p>
                                <p className='m-0 p-0'>itemcode: {e.itemCode}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <button className='m-0 p-0 px-2' id={e.id} name='dec' onClick={changeQty}>-</button>
                                    <p className='m-0 p-0 px-2'>{e.qty}</p>
                                    <button className='m-0 p-0 px-2' id={e.id} name='inc' onClick={changeQty}>+</button>
                                </div>
                                <button id={e.id} onClick={deleteItem}>delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SelectedItems