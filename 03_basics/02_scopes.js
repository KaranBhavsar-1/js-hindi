//var and blank is a global variable
var c  = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(c)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "karan"
    function two(){
        const website = "youtube" //will run successfully because a smaller function can access the larger functions variable
        console.log(userName)
    }
    // console.log(website)        //will give error because function one cannot access the variable of function two
    two()
}
// one()

if (true){
    const userName = "holi"
    if (userName === "holi") {
        const website = "youtube"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)

//*****************************interresting */
addone(5)                   //will work
function addone(num) {      //normal function
    return num+1
}


// addtwo(5)                        //will not work because the variable is not avalable yet
const addtwo = function(num){       //function hosted on a variable
    return num+1
}

addtwo(5)

