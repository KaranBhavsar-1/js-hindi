// myHeros = ["hulk","spiderMan"]

// heroPowers = {
//     hulk: "strength",
//     thor: "hammer",
//     spiderman: "sling"
// }

// Object.prototype.karan = ()=>{console.log("Karan is greater than any superhero!!!!")}

// // console.log(myHeros)
// // console.log(typeof myHeros)

// // console.log(heroPowers)
// // console.log(typeof heroPowers)
// // // heroPowers.karan()
// // myHeros.karan()
// Array.prototype.hiKaran = function(){console.log("hi!!, karan !! hope u r fine gandu")}
// // heroPowers.hiKaran()
// myHeros.hiKaran()


// Inheritance
// outdated--------------------------
const user = {
    name: "Karan",
    email: "karan@email.com"
}
const teacher = {
    makesVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:teachingSupport
}

teacher.__proto__ = user

// Modern Syntax --------------------
Object.setPrototypeOf(teachingSupport,teacher)

// give power to string

let myString = "karan     "
// console.log(myString);
// console.log(typeof myString);
console.log(myString.length);

String.prototype.trueLength = function(){
    // console.log(this.name);
    console.log(this);
    console.log(`The true length of the String is:-  ${this.trim().length}`);

    
}
myString.trueLength()