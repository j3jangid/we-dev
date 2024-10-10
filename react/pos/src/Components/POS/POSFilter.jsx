import React, { useContext, useRef } from 'react'
import category from '../../Data/Category'
import Attribute from "../../Data/Attributes"
import { StartContext } from '../../Context/StartContext'

function POSFilter() {
    const commonData = useContext(StartContext);
    const inputRef = useRef({});
    const filterRef = useRef({
        "nameMatched": [],
        "categoryMatched": [],
        "attributeMatched": [],
    });

    function nameFilter(allItems, value) {
        const filterItems = allItems.filter(itemObj => itemObj.name.toLowerCase().includes(value.toLowerCase()));
        return value === "" ? [] : filterItems
    }

    function categoryFilter(allItems, value) {
        const filterItems = allItems.filter(itemObj => itemObj.itemCategory === value);
        return value === "" ? [] : filterItems
    }

    function attributeFilter(allItems, value, attName) {
        const filterItems = allItems.filter(itemObj => itemObj.attributes[attName] === value);
        return value === "" ? [] : filterItems
    }

    function passValue() {
        let usedFilterArr = [];
        for (const key in filterRef.current) {
            usedFilterArr.push(filterRef.current[key])
        }
        const pass = usedFilterArr.filter(arr => arr.length > 0)
        return pass;
    }

    function finalList(arr) {
        if (arr.length === 1) {
            return arr[0]
        }
        if (arr.length === 2) {
            return arr[0].filter(obj1 => arr[1].some(obj2 => obj2.id === obj1.id));
        }
        if (arr.length === 3) {
            return arr[0].filter(obj1 =>
                arr[1].some(obj2 => obj2.id === obj1.id)
                &&
                arr[2].some(obj3 => obj3.id === obj1.id)
            );
        }
        return commonData.systemItems
    }

    function filterList(e) {
        const allItems = commonData.systemItems;
        const value = e.target.value;
        const name = e.target.name;
        inputRef.current = { ...inputRef.current, [name]: e.target.value.trim() }

        if (name === "itemName") {
            const nameMatched = nameFilter(allItems, value);
            filterRef.current = { ...filterRef.current, "nameMatched": nameMatched };
        }
        if (name === "category") {
            const categoryMatched = categoryFilter(allItems, value);
            filterRef.current = { ...filterRef.current, "categoryMatched": categoryMatched };
        }
        if (name === "attribute") {
            const attributeMatched = attributeFilter(allItems, value, e.target.selectedOptions[0]?.className);
            filterRef.current = { ...filterRef.current, "attributeMatched": attributeMatched };
        }

        const finalArr = finalList(passValue());
        commonData.setFilterData(finalArr);
    }

    function resetfunction() {
        const localData = commonData.systemItems;
        commonData.setFilterData(localData);
    }

    function scanAdd(e) {
        e.preventDefault();
        const systemItems = commonData.systemItems;
        const selectedArr = commonData.selectedItems;
        const ID = e.target.id;
        console.log(ID);


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
            <form action="" className='d-flex gap-2' style={{ width: "70%" }}>
                <select name="category" id="category" style={{ width: "25%" }} onChange={filterList}>
                    <option value="" selected>Category</option>
                    {
                        category.map((e) => (
                            <option value={e} key={e}>{e}</option>
                        ))
                    }
                </select>
                <input type="search" name="itemName" id="itemName" placeholder='Item Name' style={{ width: "25%" }} onChange={filterList} />
                <select name="attribute" id="attribute" style={{ width: "25%" }} onChange={filterList}>
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
                <input type="reset" value="Reset" onClick={resetfunction} style={{ width: "25%" }} />
            </form>
            <form action="" className='d-flex gap-2' style={{ width: "30%" }}>
                <input type="text" name="barCode" id="barCode" placeholder='Barcode' style={{ width: "50%" }} onClick={scanAdd}/>
                <input type="text" name="itemCode" id="itemCode" placeholder='Itemcode'style={{ width: "50%" }} onClick={scanAdd}/>
            </form>
        </div>
    )
}

export default POSFilter;

