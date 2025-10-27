// primitve datatypes 
//Types:- String, Number, Boolean, Null, Undefined, Symbol ,BigInt (too big number)
const name = "Karan"  //String
const rollNo = 3      // Number
const isPresent = true//Boolean
const outsideTemp = null //Object
let userMain;            // Undefined
const id = Symbol('123') //Symbol
const idNext = Symbol('123')  //Symbol
console.log(id != idNext)     // Not equal because of Symbol datatype
const bigNumber = 2134678902345678n // now the datatype is BigInt
console.log(typeof bigNumber)


// non-primirive tyeps OR reference types
// Array, Object , Functions

const heros = ["Shaktiman", "Sambar" , "Idli", "dhokla"];   //Array
console.log(typeof heros)
//Object
let myObj = {
    name: "Karan",
    age: 22,
    sex: "chalega"
}
console.log(typeof myObj)
console.log(myObj)

const myFun = function(){
    console.log("Hello World!!!");

}
myFun()
console.log(typeof myFun)
