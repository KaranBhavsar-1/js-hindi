const arr = [0,1,2,3,4,5]
const arr2 = arr
// console.log(arr)
// console.log(arr2)
// console.log(typeof arr)
// console.log(typeof arr2)

// arr2.push(6);       // Adds the value at the end of the array
// console.log(arr2)
// console.log(arr)    // the original also changes when the copy is changed

// arr2.pop()          //removes the last value
// console.log(arr2)

// arr2.unshift(9)    // Adds the value at the start of the array
// console.log(arr2)

// arr2.shift()       // removes the 1st values (index=0) in the array
// console.log(arr2)

// console.log(arr2.includes(1))   // gives a boolean value depends on present in array or not
// console.log(arr2.indexOf(12.4)) // give the index of the character given 
// console.log(typeof arr2.join()) // converts the array to string.

// //slice and splice

console.log(" Original Array = " , arr2);
const myn1 = arr2.slice(2,5)    //slices the other array(not original) and only present the sliced part
console.log("Sliced array = ",myn1)
console.log(" Original Array = " , arr2);
console.log(" ")
const myn2 = arr2.splice(2,5)    //slices the original array and only present the sliced part and is ranged
console.log("Spliced array = ",myn2)
console.log(" Original Array = " , arr2);
