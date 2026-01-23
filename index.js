const selectionContainer = document.getElementById("selection-container");
const gridPageContainer = document.getElementById("grid-page-container");
const player1Container = document.getElementById("player-1-container");
const player2Container = document.getElementById("player-2-container");

// detect a win

// // function
let currentPlayer = "X";

const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const square = document.querySelectorAll(".square");

function clearGrid(x) {
  console.log("clear grid clicked");
  x.innerHTML = "";
  return;
}

let playerWin = false;
let currentBoard = ["", "", "", "", "", "", "", "", ""];

function winnerCheck(array) {
  // map my current board to the winning sequences
  // use a for of loop to go through each sub array
  // use the numbers in each sub array to target the current board index
  // use the indexes of the sub arrays to reveal if the current boards squares have the same character
  // if they do indicate a win
  // find out which user clicked last by doing a little ternary

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

  // pass your board into your check win function

  for (element in winningSequences) {
    if (
      array[element[0]] === array[element[1]] &&
      array[element[1]] === array[element[2]] &&
      array[element[0]] !== ""
    ) {
      console.log(`${currentPlayer} wins`);
    }
  }
  console.log("no winner yet")
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
    winnerCheck(currentBoard);
    // now it matches check for the winner,
    // no winner? change the player
  });
  clearGrid(square);
});

console.log(playerWin, "player WIN check");

//   winningBanner =
//     mergedClicks.length >= 9
//       ? (winningBanner.innerHTML = "The game is drawn!")
//       : "";
