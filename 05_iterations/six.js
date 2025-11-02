// // const coding = ["js", "Python","Java", "Cobra"]
// // coding.forEach( (item) => {console.log(item)})
// // const values = coding.forEach( (item) => {item})
// // console.log(values)     //Output Undefined

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// //filters = filter from the given condition is true only
// // const newNums = myNums.filter( (nums)=> nums>5)
// // const newNums = myNums.filter( (nums)=> {return nums>5})
// // console.log(newNums)


// //Normal Function "FOREACH"
// const newNums = []
// myNums.forEach((nums)=> {
//     if (nums>5){
//         newNums.push(nums)
//         // console.log(nums)
//     }
// })
// // console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBook = books.filter( (bk)=> bk.genre==='Science')
const userBook = books.filter( (bk)=> bk.publish >1995 && bk.genre == "Science")

console.log(userBook)