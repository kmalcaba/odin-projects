const ROCKPAPERSCISSORS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const computerPlay = () => Math.floor(Math.random() * 3);

function isInputCorrect(input) {
  if ((input === "ROCK") | (input === "PAPER") || input === "SCISSORS")
    return true;
  else return false;
}

const clickRockBtn = () => "ROCK";
const clickPaperBtn = () => "PAPER";
const clickScissorsBtn = () => "SCISSORS";

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const rockBtn = document.querySelector(".rock");
  rockBtn.addEventListener("click", clickRockBtn);
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector("scissors");

  while (computerScore < 5 && playerScore < 5) {
    if (isInputCorrect(playerSelection)) {
      const computerSelection = computerPlay();
      console.log(
        `COMPUTER: ${Object.keys(ROCKPAPERSCISSORS).find(
          (key) => ROCKPAPERSCISSORS[key] === computerSelection
        )}`
      );
      console.log(`PLAYER: ${playerSelection}`);
      console.log(playRound(playerSelection, computerSelection));
      console.log(`COMPUTER: ${computerScore} | PLAYER: ${playerScore}`);
    } else {
      alert(
        'Input incorrect. Please enter "ROCK", "PAPER", or "SCISSORS" only. Try again.'
      );
    }
  }

  const winner = playerScore === 5 ? "YOU WIN" : "YOU LOSE";
  alert(winner);

  function playRound(playerSelection, computerSelection) {
    if (computerSelection === ROCKPAPERSCISSORS[playerSelection]) {
      return "DRAW";
    } else {
      switch (computerSelection) {
        case 0:
          // if rock vs paper
          if (ROCKPAPERSCISSORS[playerSelection] === 1) {
            playerScore++;
            return "YOU WIN! PAPER WINS";
          } else {
            // if rock vs scissor
            computerScore++;
            return "YOU LOSE! ROCK WINS";
          }

        case 1:
          // if paper vs rock
          if (ROCKPAPERSCISSORS[playerSelection] === 0) {
            computerScore++;
            return "YOU LOSE! PAPER WINS";
          } else {
            // if paper vs scissors
            playerScore++;
            return "YOU WIN! SCISSORS WIN";
          }

        case 2:
          // if scissors vs rock
          if (ROCKPAPERSCISSORS[playerSelection] === 0) {
            playerScore++;
            return "YOU WIN! ROCK WINS";
          } else {
            computerScore++;
            return "YOU LOSE! SCISSORS WIN";
          }
      }
    }
  }
}

game();
