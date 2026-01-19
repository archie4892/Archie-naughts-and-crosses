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
threeInARow = threeInARow.map(String);

// // function
let currentPlayer = false;
let player1Clicks = [];
let player2Clicks = [];

// check if hard coded array matches user
function doesInputMatch (threeInARow, secondaryArray) {
    return threeInARow.some((arrValue) => secondaryArray === arrValue);
}

const gridContainer = document.getElementById("grid-container");
let winningBanner = document.getElementById("winning-message");

gridContainer.addEventListener("click", handleGridClick);

function handleGridClick(event) {
  const closestContainer = event.target.closest(".grid-element-container");
  currentPlayer = !currentPlayer;
  closestContainer.innerHTML = `<img src= ${currentPlayer ? "./assets/naught.svg" : "./assets/cross.svg"}>`;

  if (currentPlayer) {
    player1Clicks.push(closestContainer.id);
    // console.log(player1Clicks, "player 1 moves (naught)")
    const player1Win = doesInputMatch(threeInARow, player1Clicks);
    console.log(JSON.stringify(player1Clicks, "player 1 clicks"));
    console.log(player1Win, "player 1 check");
    winningBanner = player1Win ? (winningBanner.innerHTML = "player 1 is the winner!"): "";

  } else if (!currentPlayer) {

    player2Clicks.push(closestContainer.id);
    // console.log(player2Clicks, "player 2 moves (cross)")
    const player2Win = JSON.stringify(player2Clicks) === JSON.stringify(threeInARow);
    console.log(JSON.stringify(player2Clicks, "player 2 clicks"));
    console.log(JSON.stringify(threeInARow, "three in a row"));
    console.log(player2Win, "player 2 check");
    winningBanner = player2Win ? (winningBanner.innerHTML = "player 2 is the winner!") : "";
    
  } else {
    let mergedClicks = player1Clicks.concat(player2Clicks);
    console.log(mergedClicks, "merged click array");
    winningBanner = mergedClicks.length >= 9 ? (winningBanner.innerHTML = "The game is drawn!") : "";
  }
}

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
