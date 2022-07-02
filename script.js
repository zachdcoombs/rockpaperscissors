let playerScore = 0; 
let computerScore = 0;

// computerPlay function
// select a random choice from rock, paper, or scissors to 
//serve as the computer's play
function computerPlay () {
  let choice = ["rock", "paper", "scissors"];
  return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}

// playerPlay function
// receive input from player, force lowercase for comparison to computer play in playRound function
function playerPlay(){
  let input = prompt("Choose your weapon (rock, paper, scissors): ").toLowerCase();
  return input;
}

// playRound function--plays one round of the game
// take input from playerPlay function and randomly generated computerPlay and compares, declaring a winner for each 
// round based on rock-paper-scissors rules
function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
      return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
      playerScore += 1;
      return ("You win the round! Rock beats scissors.")
  } else if ((playerSelection === "rock") && (computerSelection === "paper")){
      computerScore += 1;
      return ("You lost the round! Paper beats rock.")
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return ("You win the round! Paper beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      return ("You lost the round! Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore += 1;
      return ("You win the round! Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      return ("You lost the round! Rock beats scissors.");
  }
}

// game function containing calls to each component function
// game should run five times inside of the for loop
function game(){
  for (let i = 0; i < 5; i++){
    // assign variable computerSelection to store return value of computerPlay function
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    // prompt player for selection, force to lower case for comparison to computer play
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore){
    console.log("You win! Final score: ", playerScore, " to ", computerScore);
  } else if (playerScore === computerScore){
    console.log("Tie. Final score: ", playerScore, " to ", computerScore);
  } else {
    console.log("You lost. Final score: ", computerScore, " to ", playerScore);
  }
}

// call main game loop
game();
