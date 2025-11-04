let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber)
const submit = document.querySelector("#subt")  //id
const userInput = document.querySelector("#guessField")  //id
const guessSlot = document.querySelector(".guesses")  //class
const remainingGuesses = document.querySelector(".lastResult")//class
const lowOrHi = document.querySelector(".lowOrHi")//class
const startOver = document.querySelector(".resultParas")//class

const p = document.createElement('p')

let PrevGuess = []
let numGuess = 1

let playGame = true

if (playGame){
  submit.addEventListener("click" , function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(randomNumber)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  //checks that the value is between 1to100 and is not null

  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if (guess <1){
    alert("please enter a number greater that 1")
  } else if (guess >100){
    alert("please enter a number smaller that 100")
  }else{

    PrevGuess.push(guess)
    if (numGuess == 11) {
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was:- ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // after user guess, will check if user value is right or high or low and will repectively give values to "displayMessage" to display it
  console.log(guess)

  if (guess === randomNumber){

    displayMessage("Congratulations u won!!!")
    endGame()
  }else if (guess > randomNumber){
    displayMessage("your guess Number is too HIGH")
  }else if (guess < randomNumber){
    displayMessage("your guess Number is too LOW")
  }
}

function displayGuess(guess){
  // clean valus to display the next values and maintain the array of previous numbers and guess remaining

  userInput.value = ""    //Blank the user guess value
  guessSlot.innerHTML += `${guess}, ` //Update the array of guesses
  numGuess++
  remainingGuesses.innerHTML = `${11- numGuess}`
}
function displayMessage(message){
  // take care of DOM, will display message in the game ui
  console.log(randomNumber)

  console.log(message)
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
