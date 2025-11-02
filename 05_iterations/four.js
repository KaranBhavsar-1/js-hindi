//************for IN loop */
//Iterate the Object datatype

//an Object
const  myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

for (const key in myObj) {
    // console.log(key)    // will only print keys [js,cpp,py,rb]
    // console.log(myObj[key])// will print the values of the key
    // console.log(`[${key} : ${myObj[key]}]`) // will print the pair 
}

//Q) will it work for arrays?

myArr = [1,2,3,4,5]
for (const index in myArr) {
    // console.log(myArr[index])
}
// ANS: YES

// Q) will it work for map?

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")       //only store unique values ,so india will not be added again
// console.log(map)

for (const key in map) {
    console.log(map[key])
}
//ANS Empty output
// ANS:- NO it wont work because "MAP" is not iterable (loop), wew have different methods for doing it [FOR EACH]
