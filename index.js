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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

// // function
let currentPlayer = false;

const gridContainer = document.getElementById("grid-container")

gridContainer.addEventListener("click", handleGridClick)
    
function handleGridClick (event) {
    const closestContainer = event.target.closest(".grid-element-container")
    currentPlayer = !currentPlayer
    closestContainer.innerHTML = `<img src= ${currentPlayer ? "./assets/naught.svg" : "./assets/cross.svg"}>`    
}

function nextGame () {
    handleGridClick();
    const gridElementContainer = document.querySelectorAll(".grid-element-container")
    console.log(gridElementContainer, "test for next game button")
    gridElementContainer.innerHTML = "";
}

const player2NameDisplay = document.getElementById("player-2-name-display");
const player2Input = document.getElementById("player-2-name");
const form2 = document.getElementById("player-2-form");

const form1 = document.getElementById("player-1-form");
const player1Input = document.getElementById("player-1-name");
const player1NameDisplay = document.getElementById("player-1-name-display");

form1.addEventListener('input', (event) => {
    event.preventDefault();
    player1NameDisplay.textContent = player1Input;
});

// function initialiseGame() {

// };

// function updateScore() {

// };

// function newGame() {

// };

// function resetGame() {

// };


