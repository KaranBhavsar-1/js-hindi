

const mySym = Symbol("key1")
const myData = {
    name: "Karan Bhavar",
    age: 18,
    location: "kharporn",
    email: "Karan@google.com",
    loginDays: ["Monday", "Friday"],
    "full Name": "Donkey",
    [mySym]: "Is a Symbol"    
} //an Object ,,the above is an object literal

// //Access the Object values
// console.log(myData.loginDays)       //to call the object values 
// console.log(myData["loginDays"])    //best way

// // console.log(myData.full Name)       //Shows Error  
// console.log(typeof myData["full Name"])    //best way , automatically changes to the best one
// console.log(typeof myData[mySym])

//Edit the Object Values

// console.log(myData["email"])            // original value
// myData.email = "kingKohli@gmail.com"    //Edit the value
// console.log(myData["email"])            //value after editing

//Make the Object unchangeable # freeze
// console.log(myData)
// Object.freeze(myData)
// myData.email = "DonkeyROhit@gmail.com"    //Edit the value
// console.log(myData)

myData.greeting = function(){
    console.log("Hellow users, welocme to dick riding")
}
myData.greeting2 = function(){
    //console.log(`Hello ${myData["name"]}, welocme to dick riding`)  //OR  "myData.name"
    console.log(`Hello ${this["name"]}, welocme to dick riding`)  //Both works or "this.name"

}
myData.greeting2()

