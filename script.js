function computerPlay(){
    let computerMove = Math.floor(Math.random() * 3);
    if (computerMove === 0){
        return "ROCK";
    }
    else if (computerMove === 1){
        return "PAPER"
    }
        return "SCISSORS";
}

function playerPlay(){
    let playerMove;
    return playerMove = prompt("Rock, Paper, or Scissors?").toUpperCase();
}

function playRound(){
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection){
        return "It's a draw"
    }
    //player selects rock
    if (playerSelection === "ROCK"){
        if (computerSelection === "PAPER"){
            return "You Lose! Paper beats Rock"
        }
        else if (computerSelection === "SCISSORS"){
            return "You Win! Rock beats Scissors"
        }
        }
    //player selects paper
    else if (playerSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection === "SCISSORS"){
            return "You Lose! Scissors beats Paper"
        }
    }
    //player selects scissors
    else if (playerSelection === "SCISSORS"){
        if (computerSelection === "ROCK"){
            return "You Lose! Rock beats Scissors"
        }
        else if (computerSelection === "PAPER"){
            return "You Win! Scissors beats Paper"
        }
    }

}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++){
      let result = playRound();
      console.log(result);
      if (result.slice(0,8) === "You Win!"){
          playerScore += 1
      }
      else if (result.slice(0,9) === "You Lose!"){
          computerScore +=1
      }
  }
  if (playerScore > computerScore){
      return "You win!"
  }
  else if (playerScore < computerScore){
      return "Computer Wins."
  }
  else {
      return "It's a draw"
  }
}

let playerSelection;
let computerSelection;
