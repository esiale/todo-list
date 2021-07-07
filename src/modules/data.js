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
}

function syncData() {
    if (!todoStorage.length && !window.localStorage.length) return

    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        return
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    }
}

export {addTodo, todoStorage, todoProjects, syncData, setPriority}

