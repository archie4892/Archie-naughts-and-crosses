// // function
const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const gridSquare = document.querySelectorAll(".grid-square");
const startButton = document.getElementById("start-game-button");

let currentPlayer = "X";
let currentBoard = ["", "", "", "", "", "", "", "", ""];
let isWin = false;
let isDraw = false;
winningBanner.innerHTML = "Please press the start button to begin";

function clearGrid() {
  window.location.reload();
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
      setTimeout(clearGrid, 3000);
    } else if (!array.includes("") && array.length === 9) {
      winningBanner.innerHTML = "The game is drawn!";
      isDraw = true;
      setTimeout(clearGrid, 3000);
      console.log("the game has been drawn");
    } else {
      console.log("no winner yet");
    }
  }
}

function disableClicks (element) {
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
