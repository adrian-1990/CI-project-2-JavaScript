const displayPlayerChoice = document.getElementById('user-choice');
const displayOppChoice = document.getElementById('opp-choice');
const displayResult = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userChoice;
let oppChoice;

const generateOppChoice = () => {
    const randomChoice = choices(Math.floor(Math.random() * choices.length));
    oppChoice = randomChoice;
    displayOppChoice.innerHTML = 'Computer choice: ' + randomChoice;
}

const displayResult = () => {
    switch (userChoice + com)
}