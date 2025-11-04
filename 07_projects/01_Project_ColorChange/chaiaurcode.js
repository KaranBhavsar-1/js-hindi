/*
steps:-
take buttons as a variable
take body as another variable
run a loop to take each individual button value
run a even with function (take button as input)

*/

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button)=> {
  button.addEventListener("click", (e)=> {
    console.log(e.target)
    body.style.backgroundColor = e.target.id

//************Switch */ 
    // switch (e.target.id) {
    //   case "grey":
    //   body.style.backgroundColor = e.target.id
      
    //   case "white":
    //   body.style.backgroundColor = e.target.id
      
    //   case "blue":
    //   body.style.backgroundColor = e.target.id
      
    //   case "yellow":
    //   body.style.backgroundColor = e.target.id
    // }

//************if else if */ 
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id
    // }
  })
})