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

const clickBtn = (e) => {
  let btnClass = e.target.classList.value;
  btnClass = btnClass.toUpperCase();

  startGame(btnClass);
};

const startGame = (playerSelection) => {
  let playerScore = 0;
  let computerScore = 0;

  while (computerScore < 5 && playerScore < 5) {
    const computerSelection = computerPlay();
    console.log(
      `COMPUTER: ${Object.keys(ROCKPAPERSCISSORS).find(
        (key) => ROCKPAPERSCISSORS[key] === computerSelection
      )}`
    );
    console.log(`PLAYER: ${playerSelection}`);
    const winner = playRound(playerSelection, computerSelection);
    if (winner === "DRAW") {
      console.log(winner);
    } else if (winner) {
      playerScore++;
      console.log(`YOU WIN. ${playerSelection} WINS`);
    } else if (!winner) {
      computerScore++;
      console.log(`YOU LOSE. ${computerSelection} WINS`);
    }
    console.log(`COMPUTER: ${computerScore} | PLAYER: ${playerScore}`);
  }
};

function playRound(playerSelection, computerSelection) {
  if (computerSelection === ROCKPAPERSCISSORS[playerSelection]) {
    return "DRAW";
  } else {
    switch (computerSelection) {
      case 0:
        // if rock vs paper
        if (ROCKPAPERSCISSORS[playerSelection] === 1) {
          return true;
        } else {
          // if rock vs scissor
          return false;
        }

      case 1:
        // if paper vs rock
        if (ROCKPAPERSCISSORS[playerSelection] === 0) {
          return false;
        } else {
          // if paper vs scissors
          return true;
        }

      case 2:
        // if scissors vs rock
        if (ROCKPAPERSCISSORS[playerSelection] === 0) {
          return true;
        } else {
          return false;
        }
    }
  }
}

function game() {
  const btnContainer = document.querySelector(".container");
  btnContainer.addEventListener("click", clickBtn);

  //   const winner = playerScore === 5 ? "YOU WIN" : "YOU LOSE";
  //   alert(winner);
}

game();
