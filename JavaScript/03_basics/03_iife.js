// Immediately Invoked Function Expressions (IIFE)
//to avoid pollution from global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// (for function ko wrap)();   //writing iife

//when writing 2 iife, ; is must. !!!

( () => {
    console.log(`DB CONNECTED TWO`);
} )()


//passing parameter in iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('laksh')