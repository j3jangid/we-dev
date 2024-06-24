console.log("map & some arr methods");

// arr = ["a", "b", "c", "d", "e", "f"]

// data1 = arr.map(data)

// function data (e, i, arr) {
//     return e, i, arr;
// }

// console.log(data1);
// console.log(arr);

arr = [3, 5, 4, 6, 10, 9, 12, 1];

// data1 = arr.map((e) => e).filter((e,i,arr)=>e>8)

// console.log(data1);


// data = arr.find((e, i, arr)=> e>8)

// console.log(data);


// data = arr.findIndex((e, i, arr)=> e>11)

// console.log("index " + data);


// data = arr.findLastIndex((e, i, arr)=> e>11)

// console.log("index " + data);


// data1 = arr.map((e) => e).filter((e,i,arr)=>e>8).reduce((a, c, i, arr)=> a+c)

// console.log(data1);


console.log("searching Method");
console.log("indexOf");

// arr = ['jan', 'feb', 'march', 'april'];

// data = arr.indexOf('feb');

// // if (data >= 0 ){
// //     console.log(data);
// // }else{
// //     console.log("not found")
// // }

// (data >= 0) ? console.log(data) : console.log("not found");


console.log("Push, Unshift, Pop, Shift, concat");

arr = [3, 4, 5, 6, 7];
arr2 = ['a', 'b', 'c', 'd']
arr3 = ['w', 'x', 'y', 'z']
// console.log(arr);
// arr.push(8, 9);
// console.log(arr);
arr.unshift(1, 2);
// console.log(arr);
// arr.pop();
// // console.log(arr);
// arr.shift();
// // console.log(arr);
// arr.pop(arr.pop(arr.pop()));
// // console.log(arr);
// arr.shift(arr.shift(arr.shift()));
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// data = arr2.concat(arr, arr3);
// console.log(data);

// data2 = [arr, arr2, arr3]
// console.log(data2);

// data3 = [...arr, ...arr2, ...arr3]
// console.log(data3);

console.log("add a new key in obj & add new element in arrey");
// data = {
//     name : "jatin",
//     mail : "jatin@gmai.com"
// }

// obj = {...data, city: "jaipur"}

// console.log(obj);


// data3 = [...arr, ...arr2, ...arr3]
// console.log(data3);


console.log("sorting of alphabbets & Nummbers");

// arr = ['s', 'd', 'e', 'z', 'a', 'c', 'i']

// arr2 = [9, 4, 3, 6, 4, 1, 1234, 43, 11, 100, 22, 34, 19];

// console.log(arr.sort());
// console.log(arr2.sort());
// console.log(arr2.sort((a, b) => a - b));
// console.log(arr2.sort((a, b) => b - a));


arr3 = [{
    name: "naman",
    age: 26,
},
{
    name: "scahin",
    age: 23,
},
{
    name: "jatin",
    age: 20,
},
{
    name: "bhavishya",
    age: 20,
}]


// console.log(arr3.sort((a,b)=>a.name<b.name));


// agearr = [];

// i=0;
// while(i<arr3.length){

//     agearr.push(arr3[i].age);

//     i++;

// }
// console.log(agearr);

// function sorting (a, b) {
//     let name1 = a.name;
//     let name2 = b.name;
//     if (name1 < name2) {
//         return -1;
//     }else{
//         return 1;
//     }

// }

// console.log(arr3.sort(sorting));




arr4 = ["jai", "true", {
    name: "jai",
    details: {
        rollNo: 205189,
        mobile: 9876543,
        city: "alwar",
        add: ['a', 'b', 'c', 'd']
    }
}]


// console.log(arr4[2].details.add[2]);




// // console.log("some & every");

// arr7 = [2, 5, 1, 6, 3, 7, 9]


// let arr71 = arr7.some((e) => e > 3)
// // console.log(arr71);

// let arr72 = arr7.every((e) => e > 3)
// // console.log(arr72);


// // console.log("arr.flat");

// arr8 = ['a', 'b', ['c', 'd', ['e', 'f', ['g', 'h', ['i', 'j', 'k', ['l', 'm', 'n'], 'o', 'p'], 'q', 'r'], 's', 't']]]

// // console.log(arr8.flat(3));

arr8 = ['a', 'b', 'c', 'd', 'e']
console.log(arr8);

// arr8.splice(2, 0, "jatin")
// console.log(arr8);

// arr8.splice(2, 1, "jatin")
// console.log(arr8);

// arr8.splice(2, Infinity, "jatin")
// console.log(arr8);

console.log(arr8.join("+"));







// arr9= ['jatin', 'jangid']

// console.log(arr9[1].toString())