function sayMyName(){
    console.log("L");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");
}

//sayMyName   //reference
// sayMyName() //execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Lakshay"))
// console.log(loginUserMessage("Lakshay"))


function calculateCartPrice(val1, val2, ...num1){   //here(...) is called rest operator, used when no. of para. are not defined// rest and spread are both same, diff depends on their usage.
    return num1  //val1-200, val2-400  and rest values in num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "Lakshay",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //no error

function addone(num){
    return num + 1
}



addTwo(5)      //will give error!
const addTwo = function(num){
    return num + 2
}