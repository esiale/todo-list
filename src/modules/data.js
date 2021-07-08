import {renderAllTodos} from "../modules/dom";

let todoStorage = [];
const todoProjects = ["Default"];

const Todo = function(title, desc, dueDate, project, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority; 
    this.isDone = false;
}

function addTodo(title, desc, dueDate, project, priority) {
    const newEntry = new Todo(title, desc, dueDate, project, priority);
    todoStorage.push(newEntry);
    renderAllTodos();
    syncData();
}

function syncData() {
    if (!todoStorage.length && !window.localStorage.length) return

    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    } console.log(todoStorage[index].priority);
    syncData();
}

function deleteTodo(index) {
    todoStorage.splice(index, 1);
    renderAllTodos();
    syncData();
}

function editTodo(title, desc, dueDate, project, priority, index) {
    const editedTodo = new Todo(title, desc, dueDate, project, priority);
    todoStorage.splice(index, 1, editedTodo);
    renderAllTodos();
    syncData();
}


export {addTodo, deleteTodo, editTodo, todoStorage, todoProjects, syncData, setPriority}

