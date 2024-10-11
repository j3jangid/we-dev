import React, { useContext } from 'react'
import { StartContext } from '../../Context/StartContext';

function LoadItems() {
    const commonData = useContext(StartContext);
    const allItems = commonData.filterData;
    const systemItems = commonData.systemItems;
    const selectedArr = commonData.selectedItems

    function addItems(key) {
        let clickedItem = systemItems.find(itemObj => itemObj.id === key);
        let clickItem = selectedArr.find(e => e.id === key);
        const checkIndex = selectedArr.findIndex(e => e.id === key);

        if (clickItem) {
            let localData = [...(commonData.selectedItems)];
            localData[checkIndex].qty += 1;
            commonData.setSelectedItems([...localData]);
        } else {
            commonData.setSelectedItems([{ ...clickedItem, "qty": 1, }, ...selectedArr]);
        }

    }

    return (
        <div className='container-fluid border border-dark' >
            <div className='row overflow-auto' style={{ height: "600px" }}>
                {
                    allItems.map((e) => {
                        return (
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 m-0 p-0' >
                                <div className='border border-dark m-2 p-2' key={e.id} onClick={() => addItems(e.id)}>
                                    <p className='m-0 p-0'>{e.name}({e.units})</p>
                                    <div className='d-flex'>
                                        <div>
                                            {e.image}
                                        </div>
                                        <div>
                                            <p className='m-0 p-0'>{e.itemCategory}</p>

                                            <div className='d-flex gap-2'>
                                                {Object.entries(e.attributes).map(([attrKey, attrValue]) => (
                                                    <p key={attrKey} className='m-0 p-0'>{attrValue}</p>
                                                ))}
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
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LoadItems
