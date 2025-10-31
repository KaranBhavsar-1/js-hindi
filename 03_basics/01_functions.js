
//FUnction creation
function sayMyName(){
    console.log("Donkey")
}
//Call Function
sayMyName()

// function add2Numbers(a,b){      //Parameters
//     console.log(`the addition of number ${a} and ${b} is ${a+b}`)
//     console.log(`${a} + ${b} = ${a+b}`)
// }

function add2Numbers(a,b){
    let c = a+b
    return `${a} + ${b} = ${(a+b)}`
}
const a = add2Numbers(4,5)        //Arguments
// console.log(a)

function loginUserMessage(userName = "Doneky"){
    if (!userName){
        return "please send a user Name"
    }
    return `${userName} just logger in`
}
let message = loginUserMessage("Karan")
console.log(message)