// const tinderUser = new Object()  //singelton obj
const tinderUser = {}               //non singleton obj  //no diff!!

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }  
// const obj4 = Object.assign({}, obj1, obj2, obj4)  //(target, source1, source2.....)

const obj4 = {...obj1, ...obj2}  //og way
// console.log(obj4);


//aarray of objs
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   //therefore user[1] is a obj.


console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //imp way to see all keys and values
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//just a syntactical way, to make code clean and destructure it.
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor    //har baar ye karenge to majje nhi aayenge.

const {courseInstructor} = course
const {courseInstructor: instructor} = course  //name bhi change kar skte

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]