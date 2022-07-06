function computerPlay(){
    let computerMove = Math.floor(Math.random() * 3);
    if (computerMove === 0){
        return "Rock";
    }
    else if (computerMove === 1){
        return "Paper"
    }
        return "Scissors";
}


function playRound(move){
    let computerSelection = computerPlay();
    if (move === computerSelection){
        return
    }
    //player selects rock
    if (move === "Rock"){
        if (computerSelection === "Paper"){
            computerWin++;
            return;
        }
        else if (computerSelection === "Scissors"){
            playerWin++;
            return;
        }
        }
    //player selects paper
    else if (move === "Paper"){
        if (computerSelection === "Rock"){
            playerWin++;
            return;
        }
        else if (computerSelection === "Scissors"){
            computerWin++;
            return;
        }
    }
    //player selects scissors
    else if (move === "Scissors"){
        if (computerSelection === "Rock"){
            computerWin++;
            return;
        }
        else if (computerSelection === "Paper"){
            playerWin++;
            return;
        }
    }

}
let playerWin = 0;
let computerWin = 0;

const body = document.body;
const btn = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

body.appendChild(btn);
btn.textContent = "Rock";
body.appendChild(btn2);
btn2.textContent = "Paper"
body.appendChild(btn3);
btn3.textContent = "Scissors"

const allBtn = document.querySelectorAll('button');
console.log(allBtn);

const resultsDiv = document.createElement("div");
body.appendChild(resultsDiv);
resultsDiv.textContent = `Player Wins: 0 Computer Wins: 0`

for (button of allBtn) {
    button.addEventListener('click', (e) => {
        if (playerWin < 5 || computerWin < 5) {
            playRound(e.target.outerText)
        }
    })
}


        
        
    



for (button of allBtn) {
    button.addEventListener('click', function() {
        if (playerWin < 5 && computerWin < 5){
            resultsDiv.textContent = `Player Wins:${playerWin} Computer Wins:${computerWin}`}
        else if (playerWin === 5){
            resultsDiv.textContent = 'Player Wins!'
        }
        else if (computerWin === 5) {
            resultsDiv.textContent = 'Computer Wins!'
        }
        })
    }



