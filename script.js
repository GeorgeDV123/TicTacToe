// store game data
const cells = document.querySelectorAll(".cell");
const playerX = "X";
const playerY = "Y";
let turn = playerX;

const gameBoard = Array(cells.length);
gameBoard.fill(null);

const gameOverText = document.querySelector(".game-over-text");
const gameOverArea = document.querySelector(".game-over-area");
const gameOverButton = document.querySelector(".game-over-button");

// player X

// player O

// display

cells.forEach((cell) => cell.addEventListener("click", cellClick));

function cellClick(event) {
    if (gameOverArea.classList.contains("visible")) {
        return;
    }

    const cell = event.target
    const cellNumber = cell

}
