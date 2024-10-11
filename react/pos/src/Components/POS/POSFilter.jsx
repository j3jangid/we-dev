import React, { useContext, useRef } from 'react'
import category from '../../Data/Category'
import Attribute from "../../Data/Attributes"
import { StartContext } from '../../Context/StartContext'

function POSFilter() {
    const commonData = useContext(StartContext);
    const allItems = commonData.filterData;
    const inputRef = useRef({
        "attribute": "",
        "category": "",
        "itemName": ""
    });

    function filterList(e) {
        const allItems = commonData.systemItems;
        const name = e.target.name;
        if (e.target.name === 'attribute') {
            inputRef.current = { ...inputRef.current, [name]: e.target.value.trim(), 'attType': e.target.selectedOptions[0]?.className };
        } else {
            inputRef.current = { ...inputRef.current, [name]: e.target.value.trim() };
        }

        let finalArr = allItems.filter((itemObj) => {
            const matchesName = inputRef.current.itemName === '' || itemObj.name.toLowerCase().includes(inputRef.current.itemName.toLowerCase());
            const matchesCategory = inputRef.current.category === '' || itemObj.itemCategory === inputRef.current.category;
            const matchesAttribute = inputRef.current.attribute === '' || itemObj.attributes[inputRef.current.attType] === inputRef.current.attribute;

            return matchesName && matchesCategory && matchesAttribute;
        });
        commonData.setFilterData(finalArr);
    }

    function getKey(e) {
        if (e.key === "Enter") {
            scanAdd(e)
        }
    }

    function scanAdd(e) {
        const systemItems = commonData.systemItems;
        const selectedArr = commonData.selectedItems;
        const targetID = e.target.id;
        const targetValue = e.target.value

        const index = systemItems.findIndex((itemobj) => itemobj[targetID] == targetValue);


        if (index < 0) {
            console.log("error");
        } else {
            const presetIndex = selectedArr.findIndex((itemObj) => itemObj.id == systemItems[index].id);
            if (presetIndex < 0) {
                commonData.setSelectedItems((preItems) => ([...preItems, {...systemItems[index], "qty": 1}]))
            } else {
                let localData = [...(commonData.selectedItems)];
                localData[presetIndex].qty += 1;
                commonData.setSelectedItems([...localData]);
            }
            console.log(index);

        }



        // let clickedItem = systemItems.find(itemObj => itemObj.id === ID);
        // let clickItem = selectedArr.find(e => e.id === ID);

        // if (clickItem) {
        //     let localData = [...(commonData.selectedItems)];
        //     localData[checkIndex].qty += 1;
        //     commonData.setSelectedItems([...localData]);
        // } else {
        //     commonData.setSelectedItems([{ ...clickedItem, "qty": 1 }, ...selectedArr]);
        // } 
    }

    return (
        <div className='d-flex gap-2' >
            <form action="" className='d-flex gap-2 pb-3' style={{ width: "100%" }}>
                <div>{allItems.length}</div>
                <select name="category" id="category" onChange={filterList} style={{ width: "20%" }}>
                    <option value="" selected>Category</option>
                    {
                        category.map((e) => (
                            <option value={e} key={e}>{e}</option>
                        ))
                    }
                </select>
                <input type="search" name="itemName" id="itemName" placeholder='Item Name' onChange={filterList} style={{ width: "20%" }} />
                <select name="attribute" id="attribute" onChange={filterList} style={{ width: "20%" }}>
                    <option value="" selected>Attribute</option>
                    {
                        Object.entries(Attribute).map(([attrKey, attrValue]) => (
                            <optgroup key={attrKey} label={attrKey}  >
                                {
                                    attrValue.map((e) => (
                                        <option className={attrKey} id={attrKey + "/" + e} key={e} value={e}>{e}</option>
                                    ))
                                }
                            </optgroup>
                        ))
                    }
                </select>
                <input type="text" name="barCode" id="barCode" placeholder='Barcode' onKeyDown={getKey} style={{ width: "20%" }} />
                <input type="text" name="itemCode" id="itemCode" placeholder='Itemcode' onKeyDown={getKey} style={{ width: "20%" }} />
            </form>
        </div>
    )
}

export default POSFilter;

