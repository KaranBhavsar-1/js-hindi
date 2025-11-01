//if

// const ifUserLogin = true
// if (ifUserLogin) {
//     console.log("present")

// }

/*
>   - left is bigger
<   - right is bigger
<=  - right is bigger or eqaul
==  - both sides are equal
!=  - both side is not equal
=== - both side is equal with same data type
*/

// if (2=="2"){console.log("will execute this (even when one value is in string datatype)")}
// if (2==="2"){console.log("will not execute because datatype is different")}


//**********************if -else **********************/

// const score = 150
//normal if else
// if (score < 100) {
//     console.log("The score is lower that 100")
// }else {
//     console.log(`The score is larger that 100, the score is ${score}`)
// }

//small if else , but not recommended (hinders readibility)
// if (score< 100) console.log(`the score is larger that 100, the score is $(score)`);// ends with ";"

//if -else-else if
// if (score < 100) {
//     console.log("The score is lower that 100")
// }else if (score <150) {console.log("the score is lower that 150")}
// else {
//     console.log(`The score is larger that 150, the score is ${score}`)
// }

//if with multiple conditions
const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFronGoogle = false

//AND operator condition
if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses")
}

//OR operator condition

if (loggedInFromEmail || loggedInFronGoogle){
    console.log("User have Logged in!!")
}