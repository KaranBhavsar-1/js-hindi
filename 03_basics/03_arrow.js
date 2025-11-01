const user = {
    username: "Karan",
    price: 222,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website!!!`)
        console.log(this)
    }
}

// user.welcomeMessage()           //Runs the function in the user varible(type: Object)
// user.username = "nanga"         //Changing the username in it
// user.welcomeMessage()           //running the function again after changing the username(it changes)
// console.log(user)               //the username change was permenent 

// console.log(this)

// function chai(){
//     let username = "karan"
//     console.log(this.username) //Wont work because "this" only works for object
// }

// chai()


//even when the function is in object it wont work

// const chai = function(){
//     let username = "Karan"
//     console.log(this.username)
// }
// console.log(typeof chai)
// chai()

//Arrow function =>
const chai = () => {
    let username = "Karan"
    console.log(this)
}

// chai()

// const addtwo = (num1, num2) => {
//     return (num1+num2)
// }

// const addtwo = (num1, num2) => (num1+num2)

const addtwo = (num1, num2) => ({username:"Karan"})
// console.log(addtwo(2,3))


const myArr = [1,2,3,4]

// myArr.forEach(() =>("donkey"))
// console.log(myArr.forEach())