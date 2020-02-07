console.log("Started TicTacToe");
// const squares = document.querySelectorAll(".square");
//same as above
const squares = document.getElementsByClassName("square");
const status = document.getElementById("game-status");
const reset = document.getElementById("reset-btn");
let turn = "Player A";
let boardState = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];
let winner = "";

function renderGame() {

    //TODO update game screen
    //TODO check for winner
    const b = boardState;
    if (b[0] + b[1] + b[2] === 3 ||
        b[3] + b[4] + b[5] === 3 ||
        b[6] + b[7] + b[8] === 3 ||
        b[0] + b[3] + b[6] === 3 ||
        b[1] + b[4] + b[7] === 3 ||
        b[2] + b[5] + b[8] === 3 ||
        b[0] + b[4] + b[8] === 3 ||
        b[2] + b[4] + b[6] === 3
    ) {
        winner = "Player A";
        status.textContent = `${winner} has won!`;
    } else if (b[0] + b[1] + b[2] === -3 ||
        b[3] + b[4] + b[5] === -3 ||
        b[6] + b[7] + b[8] === -3 ||
        b[0] + b[3] + b[6] === -3 ||
        b[1] + b[4] + b[7] === -3 ||
        b[2] + b[5] + b[8] === -3 ||
        b[0] + b[4] + b[8] === -3 ||
        b[2] + b[4] + b[6] === -3
    ) {
        winner = "Player B";
        status.textContent = `${winner} has won!`;
    } else {
        status.textContent = `${turn} goes now`;
    }
}

function onClick(event) {
    console.log("Event of type", event.type);
    if (winner !== "") return; //we do nothing when game is won!
    const sq = event.currentTarget;
    const ndx = sq.getAttribute('data-value');
    console.log("My id is", sq.id);
    //this gets us the last character
    console.log("My number is", sq.id.slice(-1));
    //this gets us whatever is after - in id
    console.log("My number is", sq.id.split("-")[1]);
    console.log("My data is", ndx);

    if (boardState[ndx] !== 0) return; //we do nothing if there is something  


    if (turn === "Player A") {
        sq.textContent = "X";
        boardState[ndx] = 1;
        sq.classList.add("x-sq");
        turn = "Player B";
    } else {
        sq.textContent = "O";
        boardState[ndx] = -1;
        sq.classList.add("o-sq");
        turn = "Player A";
    }


    renderGame();
}

function onReset() {
    console.log("Resetting Game");
    turn = "Player A";
    boardState = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    winner = "";
    for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        sq.textContent = "";
        sq.classList.remove("o-sq");
        sq.classList.remove("x-sq");
    }
    renderGame();
}

function addListeners() {
    console.log("Adding Listeners");

    console.log(squares.length);
    for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        // console.log("My id is", sq.id);
        sq.setAttribute("data-value", i);
        sq.addEventListener("click", onClick);
    }
    //TODO add listener to reset button
    reset.addEventListener("click", onReset);
}

function main() {
    console.log("Running Main");
    addListeners();
    renderGame();
}

main();
