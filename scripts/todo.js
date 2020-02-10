console.log("Started my TODO app");
const descInp = document.getElementById("desc");
const jobsCont = document.querySelector(".jobs-cont");
const createBtn = document.querySelector("#create-btn");
const clearBtn = document.querySelector("#clear-btn");

function onCreate() {
    console.log("Adding new TODO item! Using description", descInp.value);
    const jobdiv = document.createElement("div");
    jobdiv.innerText = descInp.value;
    jobsCont.appendChild(jobdiv);
}

function onClear() {
    console.log("Clear all elements");
    while (jobsCont.firstChild) {
        jobsCont.removeChild(jobsCont.firstChild);
    }
}

function addListeners() {
    console.log("Adding listeners");
    // createBtn.addEventListener("click", () => console.log("Clicked Create!"));
    createBtn.addEventListener("click", onCreate);
    clearBtn.addEventListener("click", onClear);
}

function main() {
    console.log("Running Main");
    addListeners();
}

// window.onload = main; //not necessary with defer in our script
main();