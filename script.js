let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice(){
    let PlayerChoice = document.getElementById("playerChoice").value;
    return PlayerChoice;
}

function playRound(){
    const PlayerSelection = getPlayerChoice();
    const ComputerSelection = getComputerChoice();
    
    if (PlayerSelection.toLowerCase() === ComputerSelection.toLowerCase()){
        alert("It's a tie!");
        return "It's a tie!";
    }
    else if (PlayerSelection.toLowerCase() === "rock"){
        if (ComputerSelection.toLowerCase() === "scissors"){
            playerScore++;
            alert("You win! Rock beats Scissors");
            return "You win! Rock beats Scissors";
        }
        else {
            computerScore++;
            alert("You lose! Paper beats Rock");
            return "You lose! Paper beats Rock";
        }
    }
    else if (PlayerSelection.toLowerCase() === "paper"){
        if (ComputerSelection.toLowerCase() === "rock"){
            playerScore++;
            alert("You win! Paper beats Rock");
            return "You win! Paper beats Rock";
        }
        else {
            computerScore++;
            alert("You lose! Scissors beats Paper");
            return "You lose! Scissors beats Paper";
        }
    }
    else if (PlayerSelection.toLowerCase() === "scissors"){
        if (ComputerSelection.toLowerCase() === "paper"){
            playerScore++;
            alert("You win! Scissors beats Paper");
            return "You win! Scissors beats Paper";
        }
        else {
            computerScore++;
            alert("You lose! Rock beats Scissors");
            return "You lose! Rock beats Scissors";
        }
    }
    else {
        alert("Invalid input");
        return "Invalid input";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
    if(playerScore > computerScore){
        alert("You win! " + playerScore + " to " + computerScore);
        return "You win! " + playerScore + " to " + computerScore;
    } else {
        alert("You lose! " + computerScore + " to " + playerScore);
        return "You lose! " + computerScore + " to " + playerScore;
    
    }
}

// const restartButton = document.querySelector('#restart');
// restartButton.onClick = () => {playGame()};


playGame();