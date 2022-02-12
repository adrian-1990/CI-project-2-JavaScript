const userChoiceDisplay = document.getElementById('user-choice');
const oppChoiceDisplay = document.getElementById('opp-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let oppChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))

function generateComputerChoice() {
      const randomNumber = Math.floor(Math.random() * 5)

      if (randomNumber === 1){
          oppChoice = 'rock'
      }
      if (randomNumber === 2){
          oppChoice = 'paper'
      }
      if (randomNumber === 3){
          oppChoice = 'scissors'
      }
      if (randomNumber === 4){
          oppChoice = 'lizard'
      }
      if (randomNumber === 5){
          oppChoice === 'spock'
      }

      oppChoiceDisplay.innerHTML = oppChoice
  }

function getResult() {
      if(oppChoice === userChoice){
          result = 'Its a draw!'
      }
      if (oppChoice === 'rock' && userChoice === 'paper'){
          result = 'You win!!!'
      }
      if (oppChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!!!'
      }
      if (oppChoice === 'paper' && userChoice === 'rock'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'scissors' && userChoice === 'rock'){
       result = 'You win!!!'
      }
      if (oppChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'rock' && userChoice === 'lizard'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'lizard' && userChoice === 'lizard'){
        result = 'You win!!!'
      }
      if (oppChoice === 'lizard' && userChoice === 'spock'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'spock' && userChoice === 'lizard'){
        result = 'You win!!!'
      }
      if (oppChoice === 'spock' && userChoice === 'scissors'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'scissors' && userChoice === 'spock'){
        result = 'You win!!!'
      }
      if (oppChoice === 'scissors' && userChoice === 'lizard'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'lizard' && userChoice === 'scissors'){
        result = 'You win!!!'
      }
      if (oppChoice === 'lizard' && userChoice === 'paper'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'paper' && userChoice === 'lizard'){
        result = 'You win!!!'
      }
      if (oppChoice === 'paper' && userChoice === 'spock'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'spock' && userChoice === 'paper'){
        result = 'You win!!!'
      }
      if (oppChoice === 'spock' && userChoice === 'rock'){
        result = 'You lose!!!'
      }
      if (oppChoice === 'rock' && userChoice === 'spock'){
        result = 'You win!!!'
      }
      
      resultDisplay.innerHTML = result;
    };
