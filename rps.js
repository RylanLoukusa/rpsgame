

let computerScore = 0
let playerScore = 0
let playerSelection

const computerPlay = () => {
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


const round = (computerPlay,playerSelection) => {
    if(computerPlay === playerSelection){
        scoreInfo.textContent = 'You both chose' + playerSelection + 'it is a draw. Rethrow!'
    }
    else if(
        (computerPlay === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerPlay === 'PAPER' && playerSelection === 'ROCK') ||
        (computerPlay === 'SCISSORS' && playerSelection === 'PAPER')){
            computerScore++
            scoreInfo.textContent = 'Computer beats you! Try again.'}
    else(
        (computerPlay === 'PAPER' && playerSelection === 'SCISSORS') ||
        (computerPlay === 'SCISSORS' && playerSelection === 'ROCK') ||
        (computerPlay === 'ROCK' && playerSelection === 'PAPER'));{
        playerScore++
        scoreInfo.textContent = 'You win the round! Can you keep it up?'
    }

}

const isGameOver =(playerScore,computerScore) => {
    if(playerScore === 3){
        scoreInfo.textContent = 'You Win!'
    }
    else if(computerScore === 3){
        scoreInfo.textContent = 'You Lost'
    }
}

// UI

const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')


window.onload=function() {
    rockButton.addEventListener('click', () => handleClick('ROCK'))
    paperButton.addEventListener('click', () => handleClick('PAPER'))
    scissorsButton.addEventListener('click', () => handleClick('SCISSORS'))
}

function handleClick(playerSelection) {
    if(isGameOver()){
        isGameOver()
    }
}


round(playerSelection, computerPlay)

let div = document.querySelector(".computerPlay")
    div.innerText = computerPlay()

