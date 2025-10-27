const accountId = 13245 //permanent
let accountEmail = "Karan@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountbased
//accountId = 12    //not allowed shows error
console.log(accountId);

/*
not to use "var" for variable
due to issues of block scope and functional scope
*/
console.table([accountId, accountPassword ,accountEmail, accountCity, accountbased])
accountEmail = "lol@gmail.com"
accountbased = "sol"
console.table([accountId, accountPassword ,accountEmail, accountCity, accountbased])
