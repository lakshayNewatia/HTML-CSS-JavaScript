const user = {
    username: "lakshay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()   //now username will be changed

// console.log(this);   //in node- {},  in console/browser-window object

function chai(){
    let username = "lakshay"       //this-->inside a func
    console.log(this.username);   //not useable, will give undefined
}

// chai()

// const chai = function () {
//     let username = "lakshay"
//     console.log(this.username);
// }

//arrow function
const chai =  () => {     
    let username = "lakshay"
    console.log(this);     //still not useable
}

// chai()


// const addTwo = (num1, num2) => {     //if we use{} then return keyword is mandatory
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   //both same
// const addTwo = (num1, num2) => ( num1 + num2 )  //if we use() no need of return.

const addTwo = (num1, num2) => ({username: "laksh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()