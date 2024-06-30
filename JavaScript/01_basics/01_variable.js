//two types: variable and constant
//variable ke liye 2 types---> var and let

const accountId = 144553
let accountEmail = "laksh@google.com"
var accountPassword = "12345"

accountCity = "delhi"   //not recommended
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])