// // function
const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");
const gridSquare = document.querySelectorAll(".grid-square");
const startButton = document.getElementById("start-game-button");
const player1Score = document.getElementById("player-1-score");
const player2Score = document.getElementById("player-2-score");

const player1NameDisplay = document.getElementById("player-1-name-display");
const player1Form = document.getElementById("player-1-form");
const player1Input = document.getElementById("player-1-name");
const player1Submit = document.getElementById("player-1-submit-button");

const player2NameDisplay = document.getElementById("player-2-name-display");
const player2Form = document.getElementById("player-2-form");
const player2Input = document.getElementById("player-2-name");
const player2Submit = document.getElementById("player-2-submit-button");

let currentPlayer = "X";
let playerName = "";
let player1Name = player1Input.value;
let player2Name = player2Input.value;
let gameOver = false;
let currentBoard = ["", "", "", "", "", "", "", "", ""];
winningBanner.innerHTML = "Please press the start button to begin";

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

function player1Control() {
  player1NameDisplay.innerHTML = player1Input.value;
}

function player2Control() {
  player2NameDisplay.innerHTML = player2Input.value;
}

function addScore(player) {
  if (gameOver == true && player === "O") {
    player1Counter += 1;
    player1update();
    console.log(player1Counter, "player 1 counter");
  } else if (gameOver == true && player === "X") {
    player2Counter += 1;
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
      winningBanner.innerHTML = `Congratulations ${(playerName = currentPlayer === "X" ? player2Input.value : player1Input.value)}, You Win!`;
      gameOver = true;
      player1NameDisplay.classList.remove("player-1-name-highlight");
      player2NameDisplay.classList.remove("player-2-name-highlight");
      console.log(`${player1Name} wins`);
      addScore(currentPlayer);
    } else if (!array.includes("") && array.length === 9) {
      winningBanner.innerHTML = "The game is drawn!";
      gameOver = true;
      player1NameDisplay.classList.remove("player-1-name-highlight");
      player2NameDisplay.classList.remove("player-2-name-highlight");
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
      if (gameOver) return;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      player1NameDisplay.classList.toggle("player-1-name-highlight");
      player2NameDisplay.classList.toggle("player-2-name-highlight");
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
  if (!gameOver) return;
  winningBanner.innerHTML = "";
  gameOver = false;
  currentBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  player1NameDisplay.classList.add("player-1-name-highlight");
  gridSquare.forEach((div) => {
    div.innerHTML = "";
    undisableClicks(div);
  });
}

function main() {
  if (
    player1NameDisplay.innerHTML === "Player 1" ||
    player2NameDisplay.innerHTML === "Player 2"
  )
    return;
  player1NameDisplay.classList.add("player-1-name-highlight");
  startButton.remove();
  winningBanner.innerHTML = "";

  runGame();
}
