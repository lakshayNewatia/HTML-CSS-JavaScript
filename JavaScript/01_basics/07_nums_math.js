const score = 400
// console.log(score);

const balance = new Number(100)  //alternate way
// console.log(balance);

// console.log(balance.toString().length);  //converted into str and uski len
console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //comma laga deta h

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // 0 to 1 random values(0,0.54,0.04,5.4...)
console.log((Math.random()*10) + 1);  //*10 to make value greater than 0 , +1 to handle 0.04 types values //now values are 100% greater than 0

console.log(Math.floor(Math.random()*10) + 1);  //always take the floor value

//what if we have a min and max range?


const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min +1) ) + min)