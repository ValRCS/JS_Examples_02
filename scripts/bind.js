console.log("Started bind.js");

const myRange = document.querySelector("#myRange");
const myNum = document.querySelector("#num-inp");

// myRange.onchange = () => console.log("I was changed!");
function onChange(event) {
    console.log("My Value is", event.target.value);
    myNum.value = event.target.value;
}

function onInput(event) {
    console.log("My Input Value is", event.target.value);
    myNum.value = event.target.value;
}

function onNumInp(event) {
    console.log("Num Input Value Input", event.target.value);

    myRange.value = event.target.value;
}

myNum.addEventListener('input', onNumInp);

// myRange.addEventListener('change', () => console.log("I was changed"));
myRange.addEventListener('change', onChange);
// myRange.addEventListener('input', (ev) => console.log("V:", ev.target.value));
// myRange.addEventListener('input', onInput);

