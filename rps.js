
let playerPlay = '';
let playerScore = 0;
let computerScore = 0;

function playerWinnerMessage() {
    scoreMessage.textContent = "You win the game!!"
    scoreInfo.textContent = ''
}
    
function computerWinnerMessage() {
    scoreMessage.textContent = "Computer beats you!!"
    scoreInfo.textContent = ''
}
function endGame() {
    endMessage.textContent = "Press Restart Button to play again"
} 
function isGameOver() {
if(playerScore === 5){
    playerWinnerMessage()
    endGame();
}

if(computerScore === 5){
    computerWinnerMessage()
    endGame();
}
}

function computerSelection()  {
    let number = Math.floor(Math.random() * 3)

   switch(number) {
    case 0:
        return 'ROCK'
    case 1:
        return 'PAPER'
    case 2: 
        return 'SCISSORS' 
   }
}

function round(computerPlay, playerPlay) {
    if(computerPlay === playerPlay){
        roundWinner = 'tie'
        scoreInfo.textContent = 'You both chose ' + playerPlay + ' it is a tie. Rethrow!'

    }
    else if(
        (computerPlay === 'ROCK' && playerPlay === 'SCISSORS') ||
        (computerPlay === 'PAPER' && playerPlay === 'ROCK') ||
        (computerPlay === 'SCISSORS' && playerPlay === 'PAPER')){
            roundWinner = 'Computer'
            computerScore++
            scoreInfo.textContent = 'Computer beats you! Try again.'}
    else if(
        (computerPlay === 'PAPER' && playerPlay === 'SCISSORS') ||
        (computerPlay === 'SCISSORS' && playerPlay === 'ROCK') ||
        (computerPlay === 'ROCK' && playerPlay === 'PAPER')){
            roundWinner = 'Player'
            playerScore++
            scoreInfo.textContent = 'You win this round! Can you do it again?'
    }
}
 
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const endMessage = document.getElementById('endMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const restartBtn = document.getElementById('restartBtn');

function updateScore() {
    playerScorePara.textContent =`Player: ${playerScore}`
    computerScorePara.textContent =`Computer: ${computerScore}`
}

rockBtn.addEventListener('click', playerRock);
paperBtn.addEventListener('click', playerPaper);
scissorsBtn.addEventListener('click', playerScissors);
restartBtn.addEventListener('click', restartGame);


function playerRock() {
    playerPlay = 'ROCK'   
    afterClick();
} 
    
function playerPaper() {
    playerPlay = 'PAPER'
    afterClick();   
}
    
function playerScissors() {
    playerPlay = 'SCISSORS';
    afterClick();   
}
    
function afterClick() { 
    computerSelection();
    round(computerSelection(), playerPlay);
    updateScore();
    isGameOver();
}



function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Computer is ready to go, are you?'
    scoreMessage.textContent = ''
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    endMessage.textContent = ''
}