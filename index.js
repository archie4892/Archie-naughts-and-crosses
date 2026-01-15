// containers
// const nameContainer = document.getElementById("name-container");
const selectionContainer = document.getElementById("selection-container");
const gridPageContainer = document.getElementById("grid-page-container");
const gridContainer = document.getElementById("grid-container")
const player1Container = document.getElementById("player-1-container");
const player2Container = document.getElementById("player-2-container");

// player names
// const player1Input = document.getElementById("player-1-name");
// const player2Input = document.getElementById("player-2-name");

// const player1NameDisplay = document.getElementById("player-1-name-display");
// const player2NameDisplay = document.getElementById("player-2-name-display");
// const randomPlayer = document.getElementById("randomize-player-name");

// player scores
const player1Score = document.getElementById("player-1-score");
const player2Score = document.getElementById("player-2-score");

// player moves
const player1Moves = document.getElementById("player-1-moves");
const player2Moves = document.getElementById("player-2-moves");

// grid

// player profiles
const player1 = {
    playerName: player1NameDisplay,
    score: player1Score,
    attempts: player1Moves
};

const player2 = {
    playerName: player2NameDisplay,
    score: player2Score,
    attempts: player2Moves,
}

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

// functions

const displayIcon = () => {
    const gridItemIcon = document.getElementById("grid-item-icon");
    gridItemIcon.style.display = "block";
};
const gridItemContainer = document.getElementById("grid-item-container");
gridItemContainer.addEventListener("click", displayIcon);


const handleIconSwitch = () => {
    let isNaught = true
    if (isNaught === false) {
        
    } else {
        
    }
};

// https://stackoverflow.com/questions/65056793/toggle-display-image-through-an-event-listener

const switchIconButton = document.getElementById("switch-icon-button");
switchIconButton.addEventListener("click", handleIconSwitch);

// function initialiseGame() {

// };

// function updateScore() {

// };

// function newGame() {

// };

// function resetGame() {

// };


