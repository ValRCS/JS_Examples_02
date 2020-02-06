console.log("Starting work", 6 ** 2);
let a = 1000; //global a
//giving a default value to function argument
function printStuff(a = 50) {
    console.log("Trying to print a", a);
    let b = a + 5;
    let c = a + 6;

    console.log(`Hello Valdis ${a * 82} and there more to know about ${b}`);
    console.log(`Hello Liga`, b * 2);
    console.log(`Hello Peter Mr.` + c + " " + b);
}

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}

function getAverage(numThrows) {
    //write function to get an average value from dice throws
    let total = 0;
    //write loop here
    // use randomRange(1, 6);
    //loop goes here
    for (let i = 0; i < numThrows; i++) {
        total += randomRange(1, 6);
    }

    return total / numThrows;
}

const numThrows = 100000;
let result = getAverage(numThrows);

console.log("Going to print answer");

let myParagraph = document.querySelector("#answer");
// let myParagraph = document.querySelector("p");
myParagraph.myResult = result;
myParagraph.textContent = `Average throw value is ${myParagraph.myResult}`;

//Many ways of selecting a single buton
// const myButton = document.querySelector(".pretty-button");
// const myButton = document.querySelector("button");
const myButton = document.querySelector("#submitBtn");
//const myButton = document.getElementById("submitBtn");
// there is also document.getElementsByClassName
//document.getElementsByTagName

myButton.style.backgroundColor = "orange";
//preferable to add a class instead of doing inline
myButton.classList.add("big-button");

const myInput = document.querySelector(".num-input");
console.log(`My value is ${myInput.value}`);

function onButtonClick() {
    console.log("Button was clicked!");
    console.log(`My value is ${myInput.value}`);
    let nThrows = myInput.value;
    let result = getAverage(nThrows);
    myParagraph.textContent = `Average throw value is ${result}`;

    let red = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, 128, 128)`;
}

//can only have one click
myButton.click = onButtonClick;
//can have many additional events handled by addEventListener
// myButton.addEventListener("click", onButtonClick);

// document.addEventListener("click", () => console.log("Whole Doc clicked"));
