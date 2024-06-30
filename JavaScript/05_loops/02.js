// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const iterator of object) {   //syntax of forof   //iterator-->variable name, obj-->arr/str
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps   //for storing unique elements, preserve order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {    //using forof loop as above
//     console.log(key);       //keys are not printed directly
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//objects    ----> forof not working
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


