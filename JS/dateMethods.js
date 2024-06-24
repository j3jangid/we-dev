console.log("Date Methods");


console.log(new Date());


console.log("Get Todays Day");

console.log(new Date().getDay());

let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
console.log(day[new Date().getDay()]);

console.log(new Date().toLocaleString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());

console.log(new Date().getDate());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());


let a = 1234567890;
let b = new Date(a*1000).toLocaleTimeString();
console.log(b);