import {renderAllTodos, renderProjectOptions} from "../modules/dom";

let todoStorage = [];
let todoProjects = [];

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
    syncData("todo");
}

function syncData(data) {
    if (data === "todo") {
        if (!todoStorage.length && localStorage.getItem("todoLocal") === null) return

        if (!Array.isArray(todoStorage) || !todoStorage.length) {
            todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        } else {
            window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
        }
    }
    if (data === "projects") {
        if (!todoProjects.length && localStorage.getItem("projectsLocal") === null) return

        if (!Array.isArray(todoProjects) || !todoProjects.length) {
            todoProjects = JSON.parse(window.localStorage.getItem("projectsLocal"));
        } else {
            window.localStorage.setItem("projectsLocal", JSON.stringify(todoProjects));
        }
    }
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    } console.log(todoStorage[index].priority);
    syncData("todo");
}

function deleteTodo(index) {
    todoStorage.splice(index, 1);
    renderAllTodos();
    syncData("todo");
}

function editTodo(title, desc, dueDate, project, priority, index) {
    const editedTodo = new Todo(title, desc, dueDate, project, priority);
    todoStorage.splice(index, 1, editedTodo);
    renderAllTodos();
    syncData("todo");
}

function addProject(project) {
    if (todoProjects.includes(project) || (!/\S/.test(project))) {
        return "error"
    } else {
        todoProjects.push(project);
        syncData("projects");
    }
}

function deleteProject(project) {
    const index = todoProjects.indexOf(project)
    todoProjects.splice(index, 1);
    renderProjectOptions();
    syncData("projects");
}


export {addTodo, deleteTodo, editTodo, todoStorage, todoProjects, syncData, setPriority, addProject, deleteProject}

