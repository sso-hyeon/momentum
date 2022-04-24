const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoTotal = document.querySelector(".todo-total");
const toDoDoing = document.querySelector(".todo-doing");
const toDoDone = document.querySelector(".todo-done");

const TODOS_KEY = "todos";
const DONETODOS_KEY = "doneTodos";

let toDos = [];
let doneToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    localStorage.setItem(DONETODOS_KEY, JSON.stringify(doneToDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    doneToDos.forEach(id => {
        if (newTodo.id === parseInt(id)) {
            li.className = "doneBg";
            span.className = "done";
        }
    });
    const statusBtn = document.createElement("button");
    statusBtn.innerText = "✔️";
    statusBtn.addEventListener("click", doneToDo);
    statusBtn.className = "todo-status-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteToDo);
    deleteBtn.className = "todo-delete-btn";
    li.appendChild(statusBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
    printToDoStatus();
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDoneToDos = localStorage.getItem(DONETODOS_KEY);

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    SaveDoneList();
    saveToDos();
    printToDoStatus();
}

function doneToDo(e) {
    e.target.parentElement.classList.toggle("doneBg");
    e.target.nextSibling.classList.toggle("done");

    printToDoStatus();
    SaveDoneList();
    saveToDos();
}

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    if (savedDoneToDos !== null) {
        const parsedDoneToDos = JSON.parse(savedDoneToDos);
        doneToDos = parsedDoneToDos;
    }
    parsedToDos.forEach(paintToDo);
}

function printToDoStatus() {
    const total = toDoList.querySelectorAll("li").length;
    const done = toDoList.querySelectorAll(".done").length;
    toDoTotal.innerText = total;
    toDoDoing.innerText = total - done;
    toDoDone.innerText = done;
}

function SaveDoneList() {
    const doneList = toDoList.querySelectorAll(".done");
    doneToDos = [];
    doneList.forEach(list => {
        doneToDos.push(list.parentElement.id);
    });
}
