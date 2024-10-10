// code example

// function outerFunction(x) {
//     var innerVar = 4;
//     function innerFunction() {
//         return x + innerVar;
//     }
//     return innerFunction;
// }
// var closure = outerFunction(2);

// console.log(closure()); // Output: 6


// console.log(5 == '5'); // true (string '5' is coerced to number 5)
// console.log(null == undefined); // true (both are considered "empty")
// console.log(0 == false); // true (0 is coerced to false)

// console.log(5 === '5'); // false (number 5 is not the same type as string '5')
// console.log(null === undefined); // false (different types)
// console.log(0 === false); // false (different types)


// const add = (id, x) => {
//     this.id = id
//     return id + x
// };


// let x;
// let y = null;

// console.log(x);
// console.log(y);



// console.log(myData());

// function myData() {
//     return "hello"
// }

// // let myData = ()=> "hello";


// let xysa = {
//     asd: "abc",
//     qwe: function () {
//         let h = this.asd
//         return h
//     }
// }

// console.log(xysa.qwe());


// let promish = new Promise((resolve,reject)=>{
//    data = false
//     if(data==true){
//         resolve(34)
//     }else{
//         console.log("promish rejected");

//     }
// })

// promish.then((res)=>console.log(res)
// )

// data = fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// const getData = async()=>{
//    let resonse = await fetch('https://fakestoreapi.com/products')
//    resonse = await resonse.json()

//    console.log(resonse);

// }
// getData()


// for (let index = 0; index < 15; index++) {
//     console.log(Math.round(Math.random()*2));


// }

// const commonData = useContext(StartContext);
//     const [items, setItems] = useState([]);
//     const cat= ["abc", "xyz", "sdk"];
//     const tax = [0, 5, 12, 18, 28];
//     const units = ["pcs", "kgs", "pak", "box", "mtr"] 
//     const att = {
//         color: ["red", "white", "blue", "black"],
//         size: ["s", "m", "l", "xl", "xxl"],
//         brand: ["apple", "nokia", "samsung", "moto"]
//     }
//     const [newItem, setNewItem] = useState({});


//     function createItem() {
//         for (let i = 0; i < 50; i++) {
//             setNewItem({
//                 name: (i+1)+"item"+(i+1),
//                 category: cat[Math.round(Math.random()*2)],
//                 tax: tax[Math.round(Math.random()*4)],
//                 unit: att.color[Math.round(Math.random()*4)],
//                 img: <AiOutlineProduct />,
//                 mrp: (i+1)*10,
//                 saleRate: (i+1)*9,
//                 attribute: {
//                     color: att.color[Math.round(Math.random()*3)],
//                     size: att.color[Math.round(Math.random()*4)],
//                     brand: att.color[Math.round(Math.random()*2)],
//                 },
//             })
//             setItems({...items, newItem});
//         }
//         console.log(items);


//     }

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let ans = arr.indexOf(10);
console.log(ans);
