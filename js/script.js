const ROCKPAPERSCISSORS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const computerPlay = () => Math.floor(Math.random() * 3);

const clickBtn = (e) => {
  let btnClass = e.target.classList.value;
  btnClass = btnClass.toUpperCase();

  let scores = getScores();

  scores = startGame(btnClass, scores);

  if (scores.playerScore === 5) {
    declareWinner(true);
  } else if (scores.computerScore === 5) {
    declareWinner(false);
  }
};

const declareWinner = (winner) => {
  if (winner) alert("YOU WIN");
  else alert("YOU LOSE");

  clearGame();
};

const getScores = () => {
  const playerScoreSpan = document.querySelector(".player-score");
  const computerScoreSpan = document.querySelector(".computer-score");

  return {
    playerScore: +playerScoreSpan.textContent,
    computerScore: +computerScoreSpan.textContent,
  };
};

const updateScores = (scores) => {
  const playerScoreSpan = document.querySelector(".player-score");
  const computerScoreSpan = document.querySelector(".computer-score");

  playerScoreSpan.textContent = scores.playerScore;
  computerScoreSpan.textContent = scores.computerScore;
};

const startGame = (playerSelection, scores) => {
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
    scores.playerScore++;
    resultList.textContent = `YOU WIN. ${playerSelection} WINS`;
  } else if (!winner) {
    scores.computerScore++;
    resultList.textContent = `YOU LOSE. ${computerSelectionStr} WINS`;
  }

  runningScore.appendChild(scoreList);
  runningScore.appendChild(resultList);

  updateScores(scores);

  return scores;
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
}

game();
