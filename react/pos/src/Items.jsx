// import React, { useContext, useState } from 'react'
// import { StartContext } from './Context/StartContext'
// import { AiOutlineProduct } from "react-icons/ai";

// const Items = () => {
//     const commonData = useContext(StartContext);
//     const [allItems, setAllItems] = useState([]);

//     const cat = ["abc", "xyz", "sdk"];
//     const tax = [0, 5, 12, 18, 28];
//     const units = ["pcs", "kgs", "pak", "box", "mtr"]
//     const att = {
//         color: ["red", "white", "blue", "black"],
//         size: ["s", "m", "l", "xl", "xxl"],
//         brand: ["apple", "nokia", "samsung", "moto"]
//     }

//     function createItem() {
//         const newItems = [];
//         for (let i = 0; i < 50; i++) {
//             let newItem = {
//                 id: i,
//                 name: `${i + 1}item${i + 1}`,
//                 category: cat[Math.floor(Math.random() * cat.length)],
//                 tax: tax[Math.floor(Math.random() * tax.length)],
//                 unit: units[Math.floor(Math.random() * units.length)],
//                 img: <AiOutlineProduct />,
//                 mrp: (i + 1) * 100,
//                 saleRate: (i + 1) * 90,
//                 barCode: Math.round((Math.random()*1000000)-99999),
//                 itemCode: Math.round((Math.random()*1000000)-99999),
//                 attribute: {
//                     color: att.color[Math.floor(Math.random() * att.color.length)],
//                     size: att.size[Math.floor(Math.random() * att.size.length)],
//                     brand: att.brand[Math.floor(Math.random() * att.brand.length)],
//                 },
//             };
//             newItems.push(newItem);
//         }
//         setAllItems([...allItems, ...newItems]);
//     }
//     console.log(allItems);

//     return (
//         <div>
//             <h1>Items List</h1>
//             <button onClick={()=>createItem()}>Get Items</button>
//             <ol>
//                 {allItems.map(item => (
//                     <li key={item.id}>
//                         {item.name} - {item.category}
//                     </li>
//                 ))}
//             </ol>
//         </div>
//     )
// }

// export default Items


// // const [allItems, setAllItems] = useState([]);

// // const cat = ["abc", "xyz", "sdk"];
// // const tax = [0, 5, 12, 18, 28];
// // const units = ["pcs", "kgs", "pak", "box", "mtr"]
// // const att = {
// //     color: ["red", "white", "blue", "black"],
// //     size: ["s", "m", "l", "xl", "xxl"],
// //     brand: ["apple", "nokia", "samsung", "moto"]
// // }

// // function createItem() {
// //     for (let i = 0; i < 10; i++) {
// //         let newItem = {
// //             id: i,
// //             name: (i + 1) + "item" + (i + 1),
// //             category: cat[Math.round(Math.random() * 2)],
// //             tax: tax[Math.round(Math.random() * 4)],
// //             unit: units[Math.round(Math.random() * 4)],
// //             img: <AiOutlineProduct />,
// //             mrp: (i + 1) * 100,
// //             saleRate: (i + 1) * 90,
// //             attribute: {
// //                 color: att.color[Math.round(Math.random() * 3)],
// //                 size: att.color[Math.round(Math.random() * 4)],
// //                 brand: att.color[Math.round(Math.random() * 2)],
// //             },
// //         };
// //         setAllItems([...allItems, { ...newItem }]);
// //         console.log(newItem);
        
// //     }
// //     console.log(allItems);
// // }

// // useEffect(()=>{
// //     createItem();
// // },[]);