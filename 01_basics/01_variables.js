const accountId = 16537
let accountEmail = "shruti@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"

// accountId = 2 //not allowed

accountEmail = "sj@gmail.com"
accountPassword = "12312"
accountCity = "Mumbai"

let accountState; //undefined

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity])