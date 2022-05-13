const ROCKPAPERSCISSORS = {
    "ROCK": 0,
    "PAPER": 1,
    "SCISSORS": 2
}

function computerPlay () {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === ROCKPAPERSCISSORS[playerSelection]) {
        return "DRAW";
    } else {
        switch(computerSelection) {
            case 0:
                // if rock vs paper
                if (ROCKPAPERSCISSORS[playerSelection] === 1) {
                    return "YOU WIN! PAPER WINS";
                } else { // if rock vs scissor
                    return "YOU LOSE! ROCK WINS";
                }

            case 1:
                // if paper vs rock
                if (ROCKPAPERSCISSORS[playerSelection] === 0) {
                    return "YOU LOSE! PAPER WINS";
                } else { // if paper vs scissors
                    return "YOU WIN! SCISSORS WIN";
                }

            case 2:
                // if scissors vs rock
                if (ROCKPAPERSCISSORS[playerSelection] === 0) {
                    return "YOU WIN! ROCK WINS"
                } else {
                    return "YOU LOSE! SCISSORS WIN";
                }
        }

    }
}

function isInputCorrect(input) {
    if (input === "ROCK" | input === "PAPER" || input === "SCISSORS")
        return true;
    else return false;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter ROCK, PAPER, SCISSORS").toUpperCase();
        if (isInputCorrect(playerSelection)) {
            const computerSelection = computerPlay();
            console.log(`COMPUTER: ${Object.keys(ROCKPAPERSCISSORS).find(key => ROCKPAPERSCISSORS[key] === computerSelection)}`);
            console.log(`PLAYER: ${playerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
        } else {
            alert('Input incorrect. Please enter "ROCK", "PAPER", or "SCISSORS" only. Try again.');
        }
    }
}

game();