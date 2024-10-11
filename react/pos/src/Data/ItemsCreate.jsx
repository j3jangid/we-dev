import React from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import attribute from "./Attributes";
import category from "./Category";
import tax from "./Tax";
import units from "./Units";

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

function ItemsCreate() {
    function GenerateItems(i) {
        let newItem = {
            id: i + 1,
            itemCategory: getRandomElement(category),
            name: "item" + (i + 1),
            tax: getRandomElement(tax),
            image: <AiOutlineProduct style={{ fontSize: "50px" }} />,
            units: getRandomElement(units),
            attributes: {
                color: getRandomElement(attribute.color),
                size: getRandomElement(attribute.size),
                brand: getRandomElement(attribute.brand),
            },
            mrp: (i + 1) * 10,
            saleRate: (i + 1) * 9,
            barCode: Math.round((Math.random() * 1000000) + 999999),
            itemCode: Math.round((Math.random() * 1000000) + 999999),
        };
        return newItem;
    }

    const newItems = Array.from({ length: 50 }, (_, i) => GenerateItems(i));
    return newItems;
}

export default ItemsCreate;

