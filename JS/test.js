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


