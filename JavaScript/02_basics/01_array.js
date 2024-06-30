// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//---------------------------------------------
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  //converts into string

// console.log(myArr);
// console.log( newArr);


// slice, splice  //imp

console.log("A ", myArr);  //orig array

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);  //orig array not changed


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr); //orig array changed!!