// let myDate = new Date()

// console.log(myDate) //Date in unnreadable format?
// console.log(" ")

// console.log(typeof myDate)// date type object
// console.log(" ")

// console.log(myDate.toString()) //give the proper date
// console.log(" ")

// console.log(myDate.toDateString())
// console.log(" ")

// console.log(myDate.toISOString())
// console.log(" ")

// console.log(myDate.toLocaleString())
// console.log(" ")

//declare dates
let myNewDate = new Date(2023,10,12)
console.log(myNewDate)

//create a typestamp
let  myTime = Date.now()
console.log(myTime)
console.log(myNewDate.getTime())

myNewDate.toLocaleString('default', {
    weekday: "long",
})