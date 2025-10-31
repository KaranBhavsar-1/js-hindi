
//FUnction creation
function sayMyName(){
    console.log("Donkey")
}
//Call Function
// sayMyName()

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
// console.log(message)


function calculateCartPrice(val1,val2,...num1){               //take mutlitple value
    return num1
}

// console.log(calculateCartPrice(200,300,400,500,600,700))


//take object as input (Parameters) 
const user = {              //Object
    username: "Karan",
    price: 199
}

//Function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Donkey",
//     price: 122
// })

//Array as input

const myArr = [0,1,2,3,4]

function returnArrayValues(Arr){
    return `the 2nd value in Array is ${Arr[1]}`
}
console.log(`Array  = [${myArr}]`)
console.log(returnArrayValues(myArr))