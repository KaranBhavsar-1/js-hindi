//For loop

num = 10
//Average JC For Loop
//   new variable "index" ; 
//   index<=10 --> condition check (true /false)
// index++ --> add a single number in index variable
// {console.log("index");} --> the main executing loop
let index;
for (index=0; index<=10;index++){
    // console.log(`${num} x ${index} = ${num*index}`)
}
// console.log(index)

// flow --> 
// index=0 --> index <=10 -->if TRUE   -->run the {}code -->index++
//                                 --> if FALSE --> ends the code ({} is not executed) --> index++

//for Loop for array
myArr = [0,1,2,3,4,5,6]
myArr = [2,3,4,5,6,0]
myArr = ["heros","donkey","kohli","loki","lol","lop","lok"]
// console.log(myArr.length)
for(index= 0; index <= (myArr.length-1); index++){
    // console.log(`the value on index ${index} is ${myArr[index]}`)
    // console.log(`[${myArr[index]}]`)
}

////for Loop with if condition

// for (index=0;index<=10;index++){
//     if (index==5){
//         console.log("5 has arrived lol")
//     }
//     console.log(index)
// }


//loop in loop // nested Loop

// for (i=0;i<=2;i++){
//     console.log(`Outer loop :- [${i}]`)
//     for (j=0;j<=2;j++) {
//         console.log(`       Innre loop 2:- [j = ${j}] [ i = ${i}]`)
//     }

// }

//******************NEsted Loop table from 1-10******************** */
// console.log("***************table from 1-10**************")
// for (i=1;i<=10;i++){
//     console.log(`Table of ${i} is given below:-`)
//     for (j=1;j<=10;j++){
//         console.log(`    ${i} X ${j} = ${(i*j)}`)
//     }
//     console.log(" ")
// }

// ****************Break and continue ***********************
//BREAK
// for (i=0;i<=10;i++){
//     if (i==5) {
//         console.log("Detected 5")
//         break                               //stops the control flow
//     }
//     console.log(`value of i is ${i}`)
// }

//CONTINUE

for (i=0;i<=10;i++){
    if (i==5) {
        console.log("Detected 5")
        continue                               //stops the control flow but  for only 1 time
    }
    console.log(`value of i is ${i}`)
}