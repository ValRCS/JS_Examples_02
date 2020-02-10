console.log("Started my TODO app");
const descInp = document.getElementById("desc");
const jobsCont = document.querySelector(".jobs-cont");
const createBtn = document.querySelector("#create-btn");
const clearBtn = document.querySelector("#clear-btn");

function onDeleteCurrent(event) {
    console.log("Deleting current item", event.currentTarget.innerText);
    const parentDiv = event.currentTarget.parentElement;
    const grandParent = parentDiv.parentElement;
    grandParent.removeChild(parentDiv);
}

function onCreate() {
    console.log("Adding new TODO item! Using description", descInp.value);
    const jobDiv = document.createElement("div");
    const descSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete current row";
    delBtn.addEventListener("click", onDeleteCurrent);
    descSpan.innerText = descInp.value;
    jobDiv.appendChild(descSpan);
    jobDiv.appendChild(delBtn);
    jobsCont.appendChild(jobDiv);
}

function onClearAll() {
    console.log("Clear all elements");
    while (jobsCont.firstChild) {
        jobsCont.removeChild(jobsCont.firstChild);
    }
}

function addListeners() {
    console.log("Adding listeners");
    // createBtn.addEventListener("click", () => console.log("Clicked Create!"));
    createBtn.addEventListener("click", onCreate);
    clearBtn.addEventListener("click", onClearAll);
}

function main() {
    console.log("Running Main");
    addListeners();
}

// window.onload = main; //not necessary with defer in our script
main();