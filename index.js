// // function
const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const gridSquare = document.querySelectorAll(".grid-square");

let currentPlayer = "X";
let playerWin = false;
let currentBoard = ["", "", "", "", "", "", "", "", ""];

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
      console.log(`${currentPlayer} wins`);
    } else if (!array.includes("") && array.length === 9) {
      winningBanner.innerHTML = "The game is drawn!";
      console.log("the game has been drawn");
    } else {
      console.log("no winner yet");
    }
  }
}

function clearGrid(cells) {
  currentBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}

gridSquare.forEach((div) => {
  div.addEventListener("click", function (event) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const clickedGridSquare = event.target.closest(".grid-square");
    if (clickedGridSquare.innerHTML !== "") return;
    clickedGridSquare.innerHTML =
      currentPlayer === "X"
        ? `<img src="./assets/cross.svg">`
        : `<img src="./assets/naught.svg">`;
    currentBoard[clickedGridSquare.id] = currentPlayer;
    winnerCheck(currentBoard);
  });
  clearGrid(gridSquare);
});
