const discripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(discripter);

// discripter.writable = true
// discripter.enumerable = true
// discripter.configurable = true
// discripter.value = 5 

// console.log(discripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 20,
    isAvailable: true,

    getChai: function(){console.log("fat gai chai lodu")}
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
chai.name = "kohli"
console.log(chai.name);

for (const [key,value] of Object.entries(chai)) {
    if (typeof value != "function"){
    console.log(`[${key} : ${value}]`)
    }
}

