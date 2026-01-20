// containers
// const nameContainer = document.getElementById("name-container");
const selectionContainer = document.getElementById("selection-container");
const gridPageContainer = document.getElementById("grid-page-container");
const player1Container = document.getElementById("player-1-container");
const player2Container = document.getElementById("player-2-container");

// player scores
const player1Score = document.getElementById("player-1-score");
const player2Score = document.getElementById("player-2-score");

// player moves
const player1Moves = document.getElementById("player-1-moves");
const player2Moves = document.getElementById("player-2-moves");

// detect a win
let threeInARow = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// threeInARow = threeInARow.map(String);
let currentBoard = ["", "", "", "", "", "", "", "", ""];

function printBoard() {
  console.log(currentBoard[0] | currentBoard[1] | currentBoard[2]);
  console.log(currentBoard[3] | currentBoard[4] | currentBoard[5]);
  console.log(currentBoard[6] | currentBoard[7] | currentBoard[8]);
}
printBoard();

// // function
let currentPlayer = "X";

const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");

// gridContainer.addEventListener("click", handleGridClick);

const gridElementContainer = document.querySelectorAll(
  ".grid-element-container",
);

gridElementContainer.forEach((div) => {
  div.addEventListener("click", function (event) {
    const closestContainer = event.target.closest(".grid-element-container");
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    let gridId = closestContainer.id;

    console.log(currentBoard, "current board");
    console.log(gridId);

    if (currentPlayer === "X") {
      closestContainer.innerHTML = `<img src="./assets/cross.svg">`;
      currentBoard[gridId] = currentPlayer;

      let player1Win = false;
      player1Win = true;
      player1Win ? (winningBanner.innerHTML = "player 1 is the winner!") : "";
    } else {
      closestContainer.innerHTML = `<img src="./assets/naught.svg">`;
      currentBoard[gridId] = currentPlayer;

      let player2Win = false;
      player2Win = true;
      player2Win ? (winningBanner.innerHTML = "player 2 is the winner!") : "";
    }
  });
});

// check if the innervalue is empty, if empty append with our symbol, then push to current board to match input, now it matches check for the winner, no winner? change the player

function nextGame() {
  handleGridClick();
  const gridElementContainer = document.querySelectorAll(
    ".grid-element-container",
  );
  console.log(gridElementContainer, "test for next game button");
  gridElementContainer.innerHTML = "";
}

const player2NameDisplay = document.getElementById("player-2-name-display");
const player2Input = document.getElementById("player-2-name");
const form2 = document.getElementById("player-2-form");

const form1 = document.getElementById("player-1-form");
const player1Input = document.getElementById("player-1-name");
const player1NameDisplay = document.getElementById("player-1-name-display");

form1.addEventListener("input", (event) => {
  event.preventDefault();
  player1NameDisplay.textContent = player1Input;
});

//   let mergedClicks = player1Clicks.concat(player2Clicks);
//   winningBanner =
//     mergedClicks.length >= 9
//       ? (winningBanner.innerHTML = "The game is drawn!")
//       : "";

// let row = Math.floor(closestContainer.id / 3)
// let column = closestContainer.id % 3;
