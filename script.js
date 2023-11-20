const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const warningParagraph = document.querySelector("#warningParagraph");

document.addEventListener("keydown", function(event) {
    if (inputBox.value != "" && event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if(inputBox.value == "" || /^\s+$/.test(inputBox.value)) {
        warningParagraph.style.display = "block";
    } else {
        warningParagraph.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        warningParagraph.style.display = "none";
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        warningParagraph.style.display = "none";
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();