let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.querySelector('.player-score-numeric');
let computerScoreDisplay = document.querySelector('.computer-score-numeric');
let resultDisplay = document.querySelector('.result');

// Restarting the game
let restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', () => {
    location.reload()
});

// Game logic
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Documenting the player's choice
let buttons = document.querySelectorAll('.choice');
buttons.forEach((button) =>
    button.addEventListener('click', () => {
        console.log(button.id);
        startGame(button.id);
    }
));

// The game itself
function startGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return 'win';
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        return 'lose';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            resultDisplay.textContent = `You win the game!`;
        } else {
            resultDisplay.textContent = `You lose the game!`;
        }
        buttons.forEach((button) => button.disabled = true);
    } else if (result === 'win') {
        resultDisplay.textContent = `You win!\n ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`;
    } else if (result === 'lose') {
        resultDisplay.textContent = `You lose!\n ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`;
    } else {
        resultDisplay.textContent = `It's a draw!`;
    }
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}