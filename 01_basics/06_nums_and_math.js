// const num = 12
// const num2 = new Number(100)

// console.log(num)
// console.log(typeof num)
// console.log(" ")
// console.log(num2)
// console.log(typeof num2)

// console.log(" ")
// console.log(num2.toString())    //Number to String

// console.log(" ")
// console.log(num2.toFixed(3))    // number but after point 3 digit

// console.log(" ")
// const num3 = 12.5689 
// console.log(num3.toPrecision(2)) // round off the number

// console.log(" ")
// const num4  = 1000000
// let num5 = num4.toLocaleString('en-in')
// console.log(num5)//readbility of numbers but in string datatypes
// console.log(typeof num5)

// *************************Maths***************************


// console.log(Math);
// console.log(Math.abs(-18));         //to remove megative values (negative to positive only)
// console.log(Math.round(4.49));      // round off the value
// console.log(Math.ceil(4.2));        // will take the high value only
// console.log(Math.floor(4.9));       // will take the low value only
// console.log(Math.min(1,2,3,4,5));   // will give lowest value
// console.log(Math.max(1,2,3,4,5));   // will give highest value
console.log(Math.random());            // gives a random value between 0 and 1 
console.log(Math.round(Math.random()));// gives a random value between 0 and 1 

//goal :- to get a random values between 10 to 20
const min = 5
const max = 20

let randomNumber  = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

