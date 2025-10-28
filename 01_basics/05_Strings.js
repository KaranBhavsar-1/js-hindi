const name = "dhokla"
const repocount = 66

console.log(name + repocount + " Value"); //bad

console.log(`my name is ${name} and my repository count is ${repocount}`);  //Best

const myName = new String('dhokla')  //new type to declare variable
console.log(typeof myName)          // the type is object
console.log(typeof name)
console.log(myName.toUpperCase())   // converts the whole string to uppercase (does not change original0)
console.log(myName.length)          // shows length of the strong
console.log(myName.indexOf('k'))    // where the letter "k" is present
console.log(myName.charAt(3))       // in shring what letter is ar 3rd index

const newString = myName.substring(0,4) // takes a part of the string from start only
console.log(newString)

const anotherString = myName.slice(0,2) // takes the part of the string from anywhere
console.log(anotherString)

const anotherStringOne = "    karan     "
console.log(anotherStringOne)
console.log(anotherStringOne.trim())    // removes spaces at start and end

const url = "https://karan.com/home%20Page"
console.log(url.replace('%20', '-'));   // replaces the letter from the string to something else
console.log(url.includes('karan'))
console.log(url.includes('bhaje'))

const hero = "banana apple pineapple mango"
console.log(hero.split(' ')[0])            // Splits the string by given divider

