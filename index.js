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
// gridSquare.style.pointerEvents = "none"

let player1Counter = 0;
let player2Counter = 0;

function player1update() {
  player1Score.textContent = player1Counter;
}

function player2update() {
  player2Score.textContent = player2Counter;
}

function clearGame() {
  window.location.reload();
}

function addScore(player) {
  if (isWin == true && player === "O") {
    player1Counter++;
    player1update();
    console.log(player1Counter, "player 1 counter");
  } else if (isWin == true && player === "X") {
    player2Counter++;
    player2update();
    console.log(player2Counter, "player 2 counter");
  }
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
      addScore(currentPlayer);
    } else if (!array.includes("") && array.length === 9) {
      winningBanner.innerHTML = "The game is drawn!";
      isDraw = true;
      console.log("the game has been drawn");
    } else {
      console.log("no winner yet");
    }
  }
}

function disableClicks(element) {
  element.style.pointerEvents = "none";
}

function undisableClicks(element) {
  element.style.pointerEvents = "auto";
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

function clearGrid() {
  if(!isWin) return;
  winningBanner.innerHTML = "";
  isWin = false;
  isDraw = false;
  currentBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";

  gridSquare.forEach((div) => {
    div.innerHTML = "";
    undisableClicks(div);
  });
}

function main() {
  startButton.remove();
  winningBanner.innerHTML = "";
  runGame();
}
