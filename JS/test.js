// code example

function outerFunction(x) {
    var innerVar = 4;
    function innerFunction() {
        return x + innerVar;
    }
    return innerFunction;
}

var closure = outerFunction(2);

console.log(closure()); // Output: 6


console.log(5 == '5'); // true (string '5' is coerced to number 5)
console.log(null == undefined); // true (both are considered "empty")
console.log(0 == false); // true (0 is coerced to false)

console.log(5 === '5'); // false (number 5 is not the same type as string '5')
console.log(null === undefined); // false (different types)
console.log(0 === false); // false (different types)
