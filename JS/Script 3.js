//function are  is the block of code which is used to perform a particular task 
//typeof function


//  1. named function 
//  2. arrow function 
//  3. annoymous function 
//  4. callback fucntion 
//  5. fucntion expression
//  6. iifc (self invoked function)


// const a = 300
// data type premitive  non-primitive

// b bigint
// b  Boolean
// s String
// s Symbol
// n null
// n Number
// undefined

// non-primitive
//Array
//Object
//Function

// let a = 12345678n
// let a = 234567890
// console.log(a);
// let jai = 23456789
// let a = jai
// // let b = true
// console.log(a);
// console.log(typeof (a));
// let age = 25
// name = "jai"

// console.log("My name is " + name + " and i am " + age + " years old");
// console.log('My name is ' + name + ' and i am ' + age + ' years old');
// tamplate littral
// console.log(My name is ${name}  and i am ${age}  years old);
// a = "20"
// b = "30"
// c = a + b
// console.log(c);


// let a = Symbol("@#$%^NUTRYTR")
// console.log(a);
// let a = null
// let a
// console.log(a);
// jai = "jai"
// let arr = ["jai", 25, "jaipur", ["jitin", "vipin", "nitin"], { name: jai, age: 25 }, (a) => a, true]
// console.log(arr.length);
// console.log(arr[arr.length - 1]);
// data = arr[4]
// console.log(data.name);
// console.log(data[0]);

// console.log(arr[5]("Vijay"));

// let arr = ["jai", 25, ["jaipur", "rajasthan"]]
// const [name, age, [city, state]] = arr

// console.log(name);
// // console.log(city);
// console.log(city);


// let obj = {
//     data: [
//         {
//             name: "jai",
//             age: 25,
//             city: "jaipur",
//             friends: ["jai", "vijay", "ajay"]
//         },
//         {
//             name: "vijai",
//             age: 25,
//             func: (a) => { return a },
//             city: "jaipur",
//             friends: ["jai", "vijay", "ajay"]
//         },
//         {
//             name: "sanjai",
//             age: 25,
//             city: "jaipur",
//             friends: ["jai", "vijay", "ajay"]
//         }


//     ]
// }
// console.log(obj.city);
// let { name, age, city, friends } = obj
// console.log(friends[1]);
// console.log(obj.data[1].func(10));


// function name(value1, value2) {
//     let a = 30
//     let b = 40
//     console.log(value1 + value2);
//     return a + b
// }
// named function
// function sum(value1, value2) {

//     return value1 + value2
// }

// function sub(value1, value2) {

//     return value1 - value2
// }

// function all(a, b) {
//     return a(20, 10) + b(20, 10)
// }


// console.log(all(sum, sub));

// name(20, 40)
//  function expression
// sumdata = function sum(value1, value2) {

//     return value1 + value2
// }

// subdata = function sub(value1, value2) {

//     return value1 - value2
// }

// alldata = function all(a, b) {
//     return a(20, 10) + b(20, 10)
// }


// console.log(alldata(sumdata, subdata));
// Annonymous function
// sumdata = function (value1, value2) {

//     return value1 + value2
// }

// subdata = function (value1, value2) {

//     return value1 - value2
// }

// alldata = function (a, b) {
//     return a(20, 10) + b(20, 10)
// }


// console.log(alldata(sumdata, subdata));

// Arrow function

// sumdata = (value1, value2) => {

//     return value1 + value2
// }

// subdata = (value1, value2) => {

//     return value1 - value2
// }

// alldata = (a, b) => {
//     return a(20, 10) + b(20, 10)
// }


// console.log(alldata(sumdata, subdata));

// iife

// a = ((value1, value2) => {

//     return value1 + value2
// })(20, 30);

// b = ((value1, value2) => {

//     return value1 + value2
// })(20, 60);
// console.log(a + b);
// subdata = (value1, value2) => {

//     return value1 - value2
// }

// alldata = (a, b) => {
//     return a(20, 10) + b(20, 10)
// }


// console.log(alldata(sumdata, subdata));


let sum = function (x, y) {
    return x + y
}

let sub = function (x, y) {
    return x - y
}

let mult = function (x, y) {
    return x * y
}

let div = function (x, y) {
    return x / y
}

let rem = function (x, y) {
    return x % y
}

// let allmulti = function (x, y) {
//     return 
// }


let allInOne = function (x, y) {
    console.log('sum - ' + sum(x, y));
    console.log('sub - ' + sub(x, y));
    console.log('multi - ' + mult(x, y));
    console.log('div - ' + div(x, y));
    console.log('rem - ' + rem(x, y));

    console.log('all multi by callback - ' + sum(x, y) * sub(x, y) * mult(x, y) * div(x, y) * rem(x, y));

    return 'all Multiply inline caluclation - ' + (x + y) * (x - y) * (x * y) * (x / y) * (x % y)

}

console.log(allInOne(5, 4));


a = 5;
b = 20;
// c = 30;

// a=b=c;

// console.log(a=b=c);
// console.log(a);
// console.log(b);
// console.log(c);

console.log("a = " + a);
console.log("b = " + b);

// a += b -= a


a += b;
b = a - b;
a -= b;

// [a, b] = [b, a]
console.log("a = " + a);
console.log("b = " + b);



// incremnet & decremnet (post & Pre)
let i = 10

console.log(i++)
console.log(--i)
console.log(i--)
console.log(++i)

//----------------------------------------------
//Exponantial oprator for power 2**3 =8


//-------------------------------------------------
console.log("comparison oprator")
// <, >, <=, >=, ==, ===, !=


let s = "20"
let d = 20

console.log(s === d)
console.log(s == d)
console.log(s !== d)
console.log(s != d)

//--------------------------------------------------
console.log('conditional oprator / ternory operator');

let age = 18

age > 18 ? console.log("you can vode") : console.log("you cant vote");


//--------------------------------------------------
console.log('logical operator (and &&, or ||, not !)');

a = 20;
b = 10;
c = 5;
d = 20;


a = 0

console.log(!a);


// 