// // const userEmail = "hanime.com" //goes in if statement because it is present thus qualify as"True"
// // const userEmail = ""           //goes in else statement because the value is missing thus "false"
// const userEmail = []            // goes in if statement but the value is shown as empty

// if (userEmail){
//     console.log(`Got the Email, the email is ${userEmail}`)
// }else{console.log("Dont have user EMail!!!")}

// if (userEmail.length ===0){
//     console.log("Array is empty")
// }
// //will work because Array is empyt thus =0
// /*
// false values:-
// false, 0, -0, BigInt 0n , "" , null,undefined ,NaN

// True value:-
// "0",'false'," ",[],{},function(){}
// */

// const obj = {}

// if (Object.keys(obj).length ===0){
//     console.log("Object is empty")
// }

// Nullish Coalescing Operator 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1)

//Terminatary Operator

//conditon ? true: false
const iceTeaPrice = 105
iceTeaPrice >=80 ? console.log("greater that 80") : console.log("Smaller that 80")