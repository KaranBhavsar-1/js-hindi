// const accountId = 13245 //permanent
// let accountEmail = "Karan@google.com"
// var accountPassword = "12345"
// accountCity = "Mumbai"
// let accountbased
// //accountId = 12    //not allowed shows error
// console.log(accountId);

// /*
// not to use "var" for variable
// due to issues of block scope and functional scope
// */
// console.table([accountId, accountPassword ,accountEmail, accountCity, accountbased])
// accountEmail = "lol@gmail.com"
// accountbased = "sol"
// console.table([accountId, accountPassword ,accountEmail, accountCity, accountbased])


let rc = (Math.random().toFixed(3))*1000
rc= 55
// console.log(rc)

const randomNumber = ()=>{
// let g = (Math.random().toFixed(3))*1000
// let b = (Math.random().toFixed(3))*1000
// let r = (Math.random().toFixed(3))*1000

let r = 200
let g = 200
let b = 758
if (r>255){
    r = r-255
    // console.log(rc)
} 
if (g>255){
    g = g-255
    // console.log(rc)
}
if (b>255){
    b = b-255
    // console.log(rc)
}
const hexVal = [r,g,b]
return hexVal
}
r = randomNumber()
console.log(randomNumber())
