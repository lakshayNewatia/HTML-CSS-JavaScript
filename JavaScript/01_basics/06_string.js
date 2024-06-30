const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");   //pura tarika, dont use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //new tarika, use backtick(``)

const gameName = new String('hitesh-hc-com') //alternate way to declare string

// console.log(gameName[0]);
// console.log(gameName.__proto__);  //syntax to access method, but we do it directly


//different methods of string

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //4 is not included i.e 0 to 3
console.log(newString);

// const anotherString = gameName.slice(-8, 4)  // neg ind are allowed here, if used in substring they get ignored and taken as 0.
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());   //used to remove spaces


// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))  //t or f

// console.log(gameName.split('-'));  //convert str to array based on a seperator(eg.- , space etc)