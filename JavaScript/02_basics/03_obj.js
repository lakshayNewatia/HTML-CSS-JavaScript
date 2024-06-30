// singleton   //jab bhi constructor ke through bnate hai
// Object.create


const mySym = Symbol("key1")

// object literals  //literal ke through singleton nhi bnega.
const JsUser = {
    name: "Lakshay",
    "full name": "Lakshay Newatia",
    [mySym]: "mykey1",     //!!correct way to use symbol as a key. without[] is considered as a str not a symbol
    age: 18,
    location: "Jaipur",
    email: "laksh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   //og way!
// console.log(JsUser["email"])  //another way to access.
// console.log(JsUser["full name"])  //in this case only m-2 can be used to access
// console.log(JsUser[mySym])   //!!!!way to access symbol


JsUser.email = "Lakshay@chatgpt.com"
// Object.freeze(JsUser)  //now values will not be changed, although changing will not give any error.
JsUser.email = "Lakshay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());