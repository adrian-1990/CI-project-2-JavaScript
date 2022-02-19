const userChoiceDisplay = document.getElementById('user-choice');
const oppChoiceDisplay = document.getElementById('opp-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let oppChoice;
let result;

/**
 * Access players and computers score
 * to increment after each round
 */

let scoreHTML = document.getElementsByClassName('score')[0];
let computerHTML = document.getElementsByClassName('opp-score')[0];
let playerScore = 0;
let computersScore = 0;

/**
 * Gets the modal elements to create a function to declare the game winner
 */
const winnerModal = document.getElementsByClassName('winner-modal')[0];
const modalHeader = document.getElementsByClassName('modal-header')[0];
const modalText = document.getElementsByClassName('modal-content')[0];

/**
 * Shows what selection the player has chosen, what the computer chose
 * and give the winner or a draw
 */

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))

/**
 * Creates an array for computers choices
 * Generates a random choice for oppChoice.
 */

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

  /**
   * Checks a string of userChoice and oppChoice
   * A winner is declared for the round and you are notified if you are the winner, lost the round or it's a draw.
   */

function getResult() {
    if(oppChoice === userChoice){
        result = 'Its a draw!'
    }
    if (oppChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!!!'
        increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'rock' && userChoice === 'scissors'){
      result = 'You lose!!!'
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'paper' && userChoice === 'scissors'){
      result = 'You win!!!'
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'paper' && userChoice === 'rock'){
      result = 'You lose!!!'
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'scissors' && userChoice === 'rock'){
      result = 'You win!!!'
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'scissors' && userChoice === 'paper'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'rock' && userChoice === 'lizard'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'lizard' && userChoice === 'rock'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'lizard' && userChoice === 'spock'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'spock' && userChoice === 'lizard'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'spock' && userChoice === 'scissors'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'scissors' && userChoice === 'spock'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'scissors' && userChoice === 'lizard'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'lizard' && userChoice === 'scissors'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'lizard' && userChoice === 'paper'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'paper' && userChoice === 'lizard'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'paper' && userChoice === 'spock'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'spock' && userChoice === 'paper'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    if (oppChoice === 'spock' && userChoice === 'rock'){
      result = 'You lose!!!';
      increaseOppScore(computerHTML);
    }
    if (oppChoice === 'rock' && userChoice === 'spock'){
      result = 'You win!!!';
      increasePlayerScore(scoreHTML);
    }
    resultDisplay.innerHTML = result;
  };

  /* Player and Computers score is incremented */

  function increasePlayerScore(score){
    score.innerHTML = ++playerScore;
  }

  function increaseOppScore(score){
    score.innerHTML = ++computersScore;
  }

    /**
   * When the player or computer scores 5 points
   * a winner is declared
   */

    function declareWinner(winnerModal, modalHeader, modalText){
      if(playerScore === 5){
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You won the game'
        modalText.textContent = `Players Score: ${playerScore} / Opponents Score: ${computersScore}`
      }else if (computersScore === 5){
        winnerModal.style.display = 'block';
        modalHeader.textContent = 'You lost the game'
        modalText.textContent = `Players Score: ${playerScore} / Opponents Score: ${computersScore}`
      }
    }