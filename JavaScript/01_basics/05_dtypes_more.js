//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //both are numbers only.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

//function(){//work} is a func.
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  //type of pata hone chahiye

//ref walo ka dtype is obj.
//ud - ud
//null - obj
 
 