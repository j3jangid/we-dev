let arr1 = [];
let arr2 = [];


while (arr1.length < 12 || arr2.length < 12) {
    let x = Math.floor(Math.random() * 12) + 1;
    let y = Math.floor(Math.random() * 12) + 1;

    if (!arr1.includes(x)) {
        arr1.unshift(x);
    }

    if (!arr2.includes(y)) {
        arr2.unshift(y);
    }
}
arr3 = arr1.concat(arr2);
console.log(arr3);

