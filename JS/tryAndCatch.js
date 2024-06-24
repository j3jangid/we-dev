console.log(alldata(sumdata, subdata));
let a = 20
let b = 50

try {


} catch (error) {
    console.log(error);

}

console.log(b);
console.log("Hiiiii");

console.log(a);
console.log(a);
console.log(a);
console.log(a);

console.log("HIiiiii");

let data = (a, b) => {
    let n1 = a
    let n2 = b
    // const innerFunction = () => {
    //     return n1 + n2
    // }
    return ((n1, n2) => a + b)();
}


console.log(data(2, 5));