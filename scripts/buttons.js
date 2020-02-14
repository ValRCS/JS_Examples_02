console.log("Started buttons.js");
const config = {
    timerSpeed: 200
}
const state = {
    cnt: 0,
    quickcnt: 0,
    mcnt: 0
}
let timer;


//i can store all buttons
//this will be an array of button elements
const btns = document.querySelectorAll("button");
const btnsAgain = document.getElementsByTagName("button");
const btnsAlso = document.getElementsByClassName("btn");


//individual buttons
const b1 = document.querySelector("#b-1");
const b2 = document.querySelector(".btn-2");
const b3 = document.getElementById("b-3");


const p1 = document.querySelector(".p-1");
const p2 = document.querySelector(".p-2");
const p3 = document.querySelector(".p-3");
console.log(state.cnt);
p1.textContent = "P1: " + state.cnt;

//btns[0] is same as b1
btns[0].addEventListener("click", () => {
    console.log("Clicked old value", state.cnt);
    state.cnt++;
    console.log("Clicked new value", state.cnt);
    p1.textContent = "P1: " + state.cnt;
});

function onTimerFire() {
    console.log("Timer Fired!");
    state.quickcnt++;
    p2.textContent = "P2: " + state.quickcnt;
}

btns[1].addEventListener("mousedown", () => {
    console.log("Starting timer!");
    timer = setInterval(onTimerFire, config.timerSpeed); //so fire very 500ms
})

btns[1].addEventListener("mouseup", () => {
    console.log("Mouse up, stopping timer!");
    if (timer) clearInterval(timer);
})

// same as btns[2]
// b3.addEventListener("mousemove", () => {
//     console.log("Moving mouse");
//     state.mctn++;
//     p3.textContent = "P3: " + state.mcnt;
// })

function onMouseMove() {
    console.log("Moving mouse");
    state.mcnt++;
    p3.textContent = "P3: " + state.mcnt;
}
b3.addEventListener("mousemove", onMouseMove);



