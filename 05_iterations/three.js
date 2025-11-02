//************for OF loop */

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val)
}
const greeting = "Hello World"
for (const greets of greeting) {
    if (greets ==" ") {
        continue
    }
    // console.log(`Each Letter is = [${greets}]`)
}

//**************MAPS ************************/
//hold key value pair(Dictionary)
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")       //only store unique values ,so india will not be added again
console.log(map)
for (const keys of map) {
    // console.log(keys)       // will present the key value pair as output 
}

for (const [key,value] of map) {        //[] adding these divide the inputs in 2 parts and thus can be called seperately
    // console.log(`[${key}]: [${value}]`)
}

//************for OBJECTS */

const myObj = {
    id:1,
    name:"Karan",
    location: "Thane"
}
for (const [key, value] of myObj) {
    console.log(`[${key}]: [${value}]`)
}

//WOnt work because object is not iterable (loop), wew have different methods for doing it [FOR IN]
//in  next file , file name = "four.js"