console.log("Started buttons.js");
const config = {
    timerSpeed: 50
}
const state = {
    cnt: 0,
    quickcnt: 0,
    mcnt: 0,
    lastBtnId: 0
}
let timer;


//i can store all buttons
//this will be an array of button elements
const btns = document.querySelectorAll("button");
const btnsAgain = document.getElementsByTagName("button");
const btnsAlso = document.getElementsByClassName("btn");
const statusDisp = document.querySelector("#status-p");
const area = document.querySelector("#my-area");
//individual buttons
const b1 = document.querySelector("#b-1");
const b2 = document.querySelector(".btn-2");
const b3 = document.getElementById("b-3");


const p1 = document.querySelector(".p-1");
const p2 = document.querySelector(".p-2");
const p3 = document.querySelector(".p-3");
const p4 = document.querySelector(".p-4");

const genContainer = document.querySelector(".gen-cont");

function generateButtons(cnt) {
    for (let i = 0; i < cnt; i++) {
        let btn = document.createElement('button');
        btn.id = "btn-" + (i + state.lastBtnId);
        btn.classList.add('nice-btn', 'btn');
        btn.value = i + state.lastBtnId;
        btn.textContent = 'B' + (i + state.lastBtnId);
        btn.addEventListener("click", (event) => {
            console.log("Button pressed:",
                event.target.id,
                event.target.value,
                event.target.textContent
            );
            statusDisp.textContent = "You pressed Button #" + event.target.value;
        })

        genContainer.appendChild(btn);
    }
    state.lastBtnId += cnt;
}


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





function addEventListeners() {
    area.addEventListener("mousemove", (event) => {
        console.log("Moving mouse");
        // p4.textContent = `X:(${window.screenX}) Y:(${window.screenY})`;
        p4.textContent = `X:(${event.screenX}) Y:(${event.screenY})`;
    })


    btns[4].addEventListener("click", () => {
        generateButtons(state.quickcnt);
    });
}

