const ROCKPAPERSCISSORS = {
    "ROCK": 0,
    "PAPER": 1,
    "SCISSORS": 2
}

function computerPlay () {
    return Math.floor(Math.random() * 3);
}

function isInputCorrect(input) {
    if (input === "ROCK" | input === "PAPER" || input === "SCISSORS")
        return true;
    else return false;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    while(computerScore < 5 && playerScore < 5) {
        const playerSelection = prompt("Enter ROCK, PAPER, SCISSORS").toUpperCase();
        if (isInputCorrect(playerSelection)) {
            const computerSelection = computerPlay();
            console.log(`COMPUTER: ${Object.keys(ROCKPAPERSCISSORS).find(key => ROCKPAPERSCISSORS[key] === computerSelection)}`);
            console.log(`PLAYER: ${playerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
            console.log(`COMPUTER: ${computerScore} | PLAYER: ${playerScore}`);
        } else {
            alert('Input incorrect. Please enter "ROCK", "PAPER", or "SCISSORS" only. Try again.');
        }
    }

    const winner = playerScore === 5 ? "YOU WIN" : "YOU LOSE";
    console.log(winner);

    function playRound(playerSelection, computerSelection) {
        if (computerSelection === ROCKPAPERSCISSORS[playerSelection]) {
            return "DRAW";
        } else {
            switch(computerSelection) {
                case 0:
                    // if rock vs paper
                    if (ROCKPAPERSCISSORS[playerSelection] === 1) {
                        playerScore++;
                        return "YOU WIN! PAPER WINS";
                    } else { // if rock vs scissor
                        computerScore++;
                        return "YOU LOSE! ROCK WINS";
                    }
    
                case 1:
                    // if paper vs rock
                    if (ROCKPAPERSCISSORS[playerSelection] === 0) {
                        computerScore++;
                        return "YOU LOSE! PAPER WINS";
                    } else { // if paper vs scissors
                        playerScore++;
                        return "YOU WIN! SCISSORS WIN";
                    }
    
                case 2:
                    // if scissors vs rock
                    if (ROCKPAPERSCISSORS[playerSelection] === 0) {
                        playerScore++;
                        return "YOU WIN! ROCK WINS"
                    } else {
                        computerScore++;
                        return "YOU LOSE! SCISSORS WIN";
                    }
            }
    
        }
    }
}

game();