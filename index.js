// // function
const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const gridSquare = document.querySelectorAll(".grid-square");
const startButton = document.getElementById("start-game-button");
const player1Score = document.getElementById("player-1-score");
const player2Score = document.getElementById("player-2-score");

let currentPlayer = "X";
let currentBoard = ["", "", "", "", "", "", "", "", ""];
let isWin = false;
let isDraw = false;
winningBanner.innerHTML = "Please press the start button to begin";

function clearGrid() {
  window.location.reload();
}

function addScore(player) {
  let player1Counter = 0;
  let player2Counter = 0;

  if (isWin == true && player === "O") {
    player1Counter++;
    console.log(player1Counter, "player 1 counter");
  } else if (isWin == true && player === "X") {
    player2Counter++;
    console.log(player2Counter, "player 2 counter");
  }

  player1Score.innerHTML = player1Counter;
  player2Score.innerHTML = player2Counter;
}

function winnerCheck(array) {
  let winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (element of winningSequences) {
    if (
      array[element[0]] === array[element[1]] &&
      array[element[1]] === array[element[2]] &&
      array[element[0]] !== ""
    ) {
      winningBanner.innerHTML = `Congratulations ${currentPlayer}, You Win!`;
      isWin = true;
      console.log(`${currentPlayer} wins`);
      // setTimeout(clearGrid, 3000);
      addScore(currentPlayer);
    } else if (!array.includes("") && array.length === 9) {
      winningBanner.innerHTML = "The game is drawn!";
      isDraw = true;
      // setTimeout(clearGrid, 3000);
      console.log("the game has been drawn");
    } else {
      console.log("no winner yet");
    }
  }
}

function disableClicks(element) {
  element.style.pointerEvents = "none";
}

function runGame() {
  gridSquare.forEach((div) => {
    div.addEventListener("click", function (event) {
      if (isWin) return;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      const clickedGridSquare = event.target.closest(".grid-square");
      if (clickedGridSquare.innerHTML !== "") return;
      clickedGridSquare.innerHTML =
        currentPlayer === "X"
          ? `<img src="./assets/cross.svg">`
          : `<img src="./assets/naught.svg">`;
      disableClicks(clickedGridSquare);
      currentBoard[clickedGridSquare.id] = currentPlayer;
      winnerCheck(currentBoard);
    });
  });
}

function main() {
  winningBanner.innerHTML = "";
  runGame();
}
