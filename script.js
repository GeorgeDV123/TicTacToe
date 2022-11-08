// store game data
const cells = document.querySelectorAll(".cell");
const playerX = "X";
const playerO = "O";
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

    const cell = event.target;
    const cellNumber = cell.dataset.index;
    if (cell.innerText != "") {
        return;
    }

    if (turn === playerX) {
        document.getElementById("player-turn").innerHTML = "player O";
        cell.innerText = playerX;
        gameBoard[cellNumber - 1] = playerX;
        turn = playerO;
    }
    else {
        document.getElementById("player-turn").innerHTML = "player X";
        cell.innerText = playerO;
        gameBoard[cellNumber - 1] = playerO;
        turn = playerX;
    }

    checkWinner()


}

function checkWinner() {
    for (const winningCombo of winningCombos) {
        const combo = winningCombo.combo;

        const cellValue1 = gameBoard[combo[0] - 1];
        const cellValue2 = gameBoard[combo[1] - 1];
        const cellValue3 = gameBoard[combo[2] - 1];

        if (
            cellValue1 != null && cellValue2 === cellValue1 && cellValue3 === cellValue1
        ) {
            gameOver(cellValue1);
        }
    }

}

const winningCombos = [
    {combo: [1, 2, 3]},
    {combo: [4, 5, 6]},
    {combp: [7, 8, 9]},

    {combo: [1, 4, 7]},
    {combo: [2, 5, 8]},
    {combp: [3, 6, 9]},

    {combo: [1, 5, 9]},
    {combo: [3, 5, 7]},
];


function gameOver(winnnerText) {
    let text = "Draw";
    if (winnnerText != null) {
        text = `Winner is ${winnnerText}`;
    }

    gameOverArea.className = "visible";
    gameOverText.innerText = text;

}