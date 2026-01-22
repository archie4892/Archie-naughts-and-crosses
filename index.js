// containers
// const nameContainer = document.getElementById("name-container");
const selectionContainer = document.getElementById("selection-container");
const gridPageContainer = document.getElementById("grid-page-container");
const player1Container = document.getElementById("player-1-container");
const player2Container = document.getElementById("player-2-container");

// detect a win

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

// // function
let currentPlayer = "X";

const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const square = document.querySelectorAll(".square");

function clearGrid(x) {
  console.log("clear grid clicked");
  x.innerHTML = "";
  return
}

let playerWin = false;
let currentBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function winnerCheck(square) {
  for (element of currentBoard) {
    if (
      square[element[0]].textContent === square[element[1]].textContent &&
      square[element[1]].textContent === square[element[2]].textContent &&
      square[element[0]].textContent !== ""
    ) {
      playerWin = true;
    }
  }
  playerWin = false;
}


square.forEach((div) => {
  div.addEventListener("click", function (event) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const clickedSquare = event.target.closest(".square");
    if (clickedSquare.innerHTML !== "") return;
    clickedSquare.innerHTML =
    currentPlayer === "X"
    ? `<img src="./assets/cross.svg">`
    : `<img src="./assets/naught.svg">`;
    currentBoard[clickedSquare.id] = currentPlayer;
    console.log(currentBoard, "current board");
    console.log(currentPlayer, "check to see whos clicked");
    // now it matches check for the winner,
    // no winner? change the player
  });
  clearGrid(square);
});

console.log(playerWin, "player WIN check");
//   let mergedClicks = player1Clicks.concat(player2Clicks);
//   winningBanner =
//     mergedClicks.length >= 9
//       ? (winningBanner.innerHTML = "The game is drawn!")
//       : "";

// let row = Math.floor(clickedSquare.id / 3)
// let column = clickedSquare.id % 3;
