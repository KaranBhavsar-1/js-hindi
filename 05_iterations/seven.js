const myNums = [1,2,3,4,5,6,7,8,9,10]

// Q) Add 10 to each items in the above array

// forEach version
// const newnums = []
// myNums.forEach((nums)=> newnums.push(nums+10))
// console.log(newnums)

//Map Version
// const newNums = myNums.map((nums) => nums+10)
// console.log(newNums)

//Chanining

// const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums
                    .map((nums) => nums*10)
                    .map((nums)=> nums+1 )
                    .filter((nums) => nums>40)
console.log(newNums)
console.log(newNums.length)
