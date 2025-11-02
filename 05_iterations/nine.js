// //********************Reduce****************
// const myNums = [1,2,3,4,5] 

// // const intialValue = 0
// // const output = myNums.reduce(
// //     (acc,curval)=> {
// //         return acc+curval
// //     },0
// // )

// // console.log(output)

// const output = myNums.reduce(
//     (acc, curval) => {
//         console.log(`Accumulator = [${acc}]`)
//         console.log(`Current Value = [${curval}]`)
//         return acc +curval},0
// )
// console.log(output)

//Large Example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const allPrice = shoppingCart.reduce((acc,item)=>{return acc+item.price},0)
const allPrice = shoppingCart.reduce((acc,item) => {
    // console.log(acc+item.price)
    // console.log(acc)
    return acc+item.price
},0)
console.log(allPrice)