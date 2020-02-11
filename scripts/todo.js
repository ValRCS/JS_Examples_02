console.log("Started my TODO app");
const descInp = document.getElementById("desc");
const jobsCont = document.querySelector(".jobs-cont");
const createBtn = document.querySelector("#create-btn");
const clearBtn = document.querySelector("#clear-btn");

let jobs = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
}
];

function createSingleJob(parent, data) {
    const jobDiv = document.createElement("div");
    const descSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete current row";
    delBtn.addEventListener("click", onDeleteCurrent);
    descSpan.innerText = data.title; //because we have title property in our data
    jobDiv.appendChild(descSpan);
    jobDiv.appendChild(delBtn);
    parent.appendChild(jobDiv);
}

function render() {
    console.log("Render Jobs");
    for (let i = 0; i < jobs.length; i++) {
        console.log("Adding job with id:", jobs[i].id);
        createSingleJob(jobsCont, jobs[i]);
    }

    $('span').addClass('my-spans').css('background-color', 'red');
    const mySpans = document.querySelectorAll('span');
    for (let i = 0; i < mySpans.length; i++) {
        mySpans[i].classList.add('also-span-class');
    }

}

function onDeleteCurrent(event) {
    console.log("Deleting current item", event.currentTarget.innerText);
    const parentDiv = event.currentTarget.parentElement;
    const grandParent = parentDiv.parentElement;
    grandParent.removeChild(parentDiv);
}

function onCreate() {
    console.log("Adding new TODO item! Using description", descInp.value);
    const lastEl = jobs[jobs.length - 1]; //will not work on empty list

    const jobObj = {
        "title": descInp.value,
        "id": lastEl.id + 1,
        "userId": lastEl.userId,
        "completed": false
    }
    jobs = jobs.concat(jobObj);
    createSingleJob(jobsCont, jobObj);
    // createSingleJob(jobsCont, { "title": descInp.value });
    // const jobDiv = document.createElement("div");
    // const descSpan = document.createElement("span");
    // const delBtn = document.createElement("button");
    // delBtn.innerText = "Delete current row";
    // delBtn.addEventListener("click", onDeleteCurrent);
    // descSpan.innerText = descInp.value;
    // jobDiv.appendChild(descSpan);
    // jobDiv.appendChild(delBtn);
    // jobsCont.appendChild(jobDiv);
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

function processJSON(json) {
    console.log("We got entries count:", json.length);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    jobs = jobs.concat(json);
    render();
}
function fetchOutsideData(url) {
    console.log("Fetching Outside Data");
    fetch(url)
        .then(response => response.json())
        .then(processJSON);
}

function main() {
    console.log("Running Main");
    addListeners();
    render();
    fetchOutsideData('https://jsonplaceholder.typicode.com/todos');
}

// window.onload = main; //not necessary with defer in our script
main();