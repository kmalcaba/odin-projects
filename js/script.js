const ROCKPAPERSCISSORS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const computerPlay = () => Math.floor(Math.random() * 3);

const clickBtn = (e) => {
  let btnClass = e.target.classList.value;
  btnClass = btnClass.toUpperCase();

  const scores = startGame(btnClass);

  if (scores.playerScore === 5) {
    declareWinner(true);
  } else if (scores.computerScore === 5) {
    declareWinner(false);
  }
};

const declareWinner = (winner) => {
  if (winner) alert("YOU WIN");
  else alert("YOU LOSE");
};

const startGame = (playerSelection) => {
  const playerScoreSpan = document.querySelector(".player-score");
  const computerScoreSpan = document.querySelector(".computer-score");

  let playerScore = +playerScoreSpan.textContent;
  let computerScore = +computerScoreSpan.textContent;

  const runningScore = document.querySelector(".running-score");
  const scoreList = document.createElement("li");
  const resultList = document.createElement("li");

  const computerSelection = computerPlay();
  const computerSelectionStr = Object.keys(ROCKPAPERSCISSORS).find(
    (key) => ROCKPAPERSCISSORS[key] === computerSelection
  );
  scoreList.textContent += `COMPUTER: ${computerSelectionStr}`;
  scoreList.textContent += ` | PLAYER: ${playerSelection}`;
  const winner = playRound(playerSelection, computerSelection);
  if (winner === "DRAW") {
    resultList.textContent = winner;
  } else if (winner) {
    playerScore++;
    resultList.textContent = `YOU WIN. ${playerSelection} WINS`;
  } else if (!winner) {
    computerScore++;
    resultList.textContent = `YOU LOSE. ${computerSelectionStr} WINS`;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  runningScore.appendChild(scoreList);
  runningScore.appendChild(resultList);

  return { playerScore: playerScore, computerScore: computerScore };
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
  const gameCompleted = btnContainer.addEventListener("click", clickBtn);
}

game();
