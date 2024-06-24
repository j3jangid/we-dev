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


let obj = {
    data: [
        {
            name: "jai",
            age: 25,
            city: "jaipur",
            friends: ["jai", "vijay", "ajay"]
        },
        {
            name: "vijai",
            age: 25,
            func: (a) => { return a },
            city: "jaipur",
            friends: ["jai", "vijay", "ajay"]
        },
        {
            name: "sanjai",
            age: 25,
            city: "jaipur",
            friends: ["jai", "vijay", "ajay"]
        }


    ]
}
// console.log(obj.city);
let { name, age, city, friends } = obj
// console.log(friends[1]);
console.log(obj.data[1].func(10));
