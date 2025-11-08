// Promise :- Declare and call back

// const promiseOne = new Promise(function (resolve, reject){

//     setTimeout(function(){
//     console.log("Async Task is done")
//     resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promice Consumed")
// })


// Promise without variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 task done!!!")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 Resolved")
// })


//Promise with data Passing 
// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve({username: "Karan" , email: "Karan@email.com"})
//     },1000)
// }).then(function(data){
//     console.log(data);
// })


// Promise and then, catch, Finally

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username: "Karan", id: 12 , login: "@gmail.com"})
//         }else {
//         // console.log("Something went wrong")}
//         reject()}
//     },1000)
// })

// promiseFour.then(function(userData){
//     console.log("the success userdata is give below")   //this prints
//     console.log(userData);
// })
// .then((userData)=>{
//     console.log(userData.username)          //this does'nt prints
// })
// .then((userData)=>{
//     console.log(userData.id)          //this does'nt prints
// })
// .then((userData)=>{
//     console.log(userData.login)          //this does'nt prints
// })
// .catch(()=>{
//     console.log("SOmething truly went wrong");     //this prints
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected ");   //this prints
// })

// Promise Five:- Async Await function

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Karan", id: 12 , login: "@gmail.com"})
//         }else{
//             reject("ERROR: Something went wrong!! ")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//             const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

// Practical of async function using await

// async function getAllUser(){
//     try {
//             const response = await fetch("https://api.github.com/users/KaranBhavsar-1")
//             // console.log(response);
//     const data = await response.json()
//     console.log((data));
//     } catch (error) {
//         console.log(error);
//     }    
// }

// getAllUser()

// Same PRactical but using then catch and finally

// const promisePractical = new Promise(function(resolve, reject){
//     const response = fetch("https://api.github.com/users/KaranBhavsar-1")
//     return response
// })
fetch("https://api.github.com/users/KaranBhavyydtyklsar-1")
.then((response)=>{return response.json()})
.then((data)=>{console.log(typeof data)
    return data})
.then((data)=>{console.log(data)})
.catch(()=>{console.log("ERROR: Faileed to get data");
})