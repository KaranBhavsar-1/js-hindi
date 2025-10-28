// const marvel_Heros = ["Spiderman", "IronMan", "Thor"]
// const du_Heros = ["Superman", "Flash","Batman"]

// // marvel_Heros.push(du_Heros)     //Adds the DU array in the marvel array
// // console.log(marvel_Heros)

// // const all_Heros = marvel_Heros.concat(du_Heros) // Adds the elements of the du array in marvel array 
// // console.log(all_Heros) 

// const all_Heros = [...marvel_Heros,...du_Heros]    // Adds both the arrays easily  
// console.log(all_Heros)
// console.log(...marvel_Heros)                       // shows the array as string

// const myArr = [0,1,2,3,[45,5,6,8],9,[8,6,2,5],5,[20],6,6,[22,45,78],[45],20]
// console.log(myArr) 
// const myArr2 = myArr.flat(Infinity) // removes the sub arrays perfectly 
// console.log(myArr2) 
// console.log(myArr) 


console.log(Array.isArray("Karan")) //check wheather array or not
console.log(Array.from("Karan"))    // converts into an array
console.log(Array.isArray({ name:"Karan"})) //returns empty string couse it cannot convert

const sc1 = 100
const  sc2 = 120
const sc3 = 300
const a = Array.of(sc1,sc2,sc3) // adds the elements of any datatype in the array
console.log(a) 
