// computerPlay function
// select a random choice from rock, paper, or scissors to 
//serve as the computer's play

function computerPlay () {
    let choice = ["rock", "paper", "scissors"];
    return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        return ("You win! Rock beats scissors.")
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        return ("You lose! Paper beats rock.")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock.");
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper.");
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper.");
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors.");
      }
}

// assign variable computerSelection to store return value of computerPlay function
let computerSelection = computerPlay();

// prompt player for selection, force to lower case for comparison to computer play
let playerSelection = prompt("Choose your weapon (rock, paper, scissors): ").toLowerCase();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
