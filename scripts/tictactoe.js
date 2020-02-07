console.log("Started TicTacToe");
// const squares = document.querySelectorAll(".square");
//same as above
const squares = document.getElementsByClassName("square");

function onClick() {
    console.log("Clicked some button");
}

function addListeners() {
    console.log("Adding Listeners");

    console.log(squares.length);
    for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        console.log("My id is", sq.id);
        sq.addEventListener("click", () => console.log("Clicked me!"));
    }
}

function main() {
    console.log("Running Main");
    addListeners();
}

main();
