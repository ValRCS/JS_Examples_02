console.log("Started TicTacToe");
// const squares = document.querySelectorAll(".square");
//same as above
const squares = document.getElementsByClassName("square");
const status = document.getElementById("game-status");
let turn = "Player A";
const boardState = [
    0, 0, 0,
    0, 0, 0, 
    0, 0, 0
];

function renderGame() {
    status.textContent = `${turn} goes now`;
    //TODO update game screen
}

function onClick(event) {
    console.log("Event of type", event.type);
    const sq = event.currentTarget;
    console.log("My id is", sq.id);
    //this gets us the last character
    console.log("My number is", sq.id.slice(-1));
    //this gets us whatever is after - in id
    console.log("My number is", sq.id.split("-")[1]);

    if (turn === "Player A") {
        sq.textContent = "X";
        turn = "Player B";
    } else {
        sq.textContent = "O";
        turn = "Player A";
    }
    renderGame();
}

function addListeners() {
    console.log("Adding Listeners");

    console.log(squares.length);
    for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        // console.log("My id is", sq.id);
        sq.setAttribute("data-value", i + 1);
        sq.addEventListener("click", onClick);
    }
}

function main() {
    console.log("Running Main");
    addListeners();
}

main();
