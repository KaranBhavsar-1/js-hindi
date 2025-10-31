//Single Constructor


// const faceBook = new Object()        //SIngleton Object
const faceBook = {}

faceBook.Id = "123asd"
faceBook.name = "sandy"
faceBook.isPresent = true

// console.log(faceBook)

const regularUser = {
    email: "andy@gmail.com",
    fullName: {
    userFullName: {
        firstName: "Andy",  // Nested Object
        lastName: "sandy"
    }
}

}

// console.log(regularUser)

const obj1 = {1:"A",2:"B" }
const obj2 = {3:"A",4:"B" }
// const obj3 = {obj1 , obj2}   Wrong

// const obj3 = Object.assign({},obj1,obj2)        //Right way to combine 2 or more objects
// const obj3 = {...obj1,...obj2}                     // best way
// console.log(obj3)


//For database the values comes in a arrays filled with objects this the objectis large 

const user = [
    {
    id:1,
    email: "h1@gmail.com"
    },
    {
    id:2,
    email: "h2@gmail.com"
    },
    {
    id:3,
    email: "h3@gmail.com"
    },
    {
    id:4,
    email: "h4@gmail.com",
    },
]

// console.log(user[3].email)
// console.group(Object.keys(faceBook))        //gives the index of all variable name in object
// console.group(Object.values(faceBook))      //gives the value of all variable name in object
// console.group(Object.entries(faceBook))     //gives all the  variable in object in array format
// console.group(faceBook.hasOwnProperty("namde"))//checks wheather the give index is present in the object or not

//De-structuring of Object.. Array is also there but we are doing Object today
const course = {
    courseName: "JS Hindi",
    price: "999",
    courseInstructure: "Hitesh"
}

// console.log(course.courseInstructure)
const {courseInstructure:inst} = course     //De-Structuring of Object
console.log(inst)

// {
//     name: "Hitesh",
//     coursename: "jsHindi",
//     price: "free"
// }