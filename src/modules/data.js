import {renderAllTodos} from "./todos";
import {renderProjectOptions} from "./projects"
import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'
import parseISO from 'date-fns/parseISO'
import compareAsc from 'date-fns/compareAsc'

let todoStorage = [];
let projectsStorage = [];

const Todo = function(title, desc, dueDate, project, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority; 
    this.done = false;
}

function addTodo(title, desc, dueDate, project, priority) {
    const newEntry = new Todo(title, desc, dueDate, project, priority);
    todoStorage.push(newEntry);
    syncTodos();
    renderAllTodos();
}

function syncData() {
    if (localStorage.getItem("todoLocal") === null) {
        return
    } else if (!Array.isArray(todoStorage) || !todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
    }
    
    if (localStorage.getItem("projectsLocal") === null) {
        return    
    } else if (!Array.isArray(projectsStorage) || !projectsStorage.length) {
        projectsStorage = JSON.parse(window.localStorage.getItem("projectsLocal"));
    }
}

function syncTodos() {
    if (!todoStorage.length && localStorage.getItem("todoLocal") === null) return

    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function syncProjects() {
    if (!projectsStorage.length && localStorage.getItem("projectsLocal") === null) return

    window.localStorage.setItem("projectsLocal", JSON.stringify(projectsStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    }
    syncTodos();
}

function setDone(index) {
    if (todoStorage[index].done === false) {
        todoStorage[index].done = true;
    } else {
        todoStorage[index].done = false;
    } 
}

function deleteTodo(index) {
    todoStorage.splice(index, 1);
    renderAllTodos();
    syncTodos();
}

function editTodo(title, desc, dueDate, project, priority, index) {
    const editedTodo = new Todo(title, desc, dueDate, project, priority);
    todoStorage.splice(index, 1, editedTodo);
    renderAllTodos();
    syncTodos();
}

function addProject(project) {
    if (projectsStorage.includes(project) || (!/\S/.test(project))) {
        return "error"
    } else {
        projectsStorage.push(project);
        syncProjects();
    }
}

function deleteProject(project) {
    const index = projectsStorage.indexOf(project)
    projectsStorage.splice(index, 1);
    renderProjectOptions();
    syncProjects();
}

function sortTodos() {
    if (todoStorage === null) return;

    const main = document.querySelector("main");
    const display = main.dataset.display;
    const project = main.dataset.project;

    let sortedStorage = todoStorage;
    function sortByProject() {
        if (project !== "none") {
            sortedStorage = sortedStorage.filter(item => item.project === project);
        }
    }

    function sortByDisplay() {
        switch (display) {
            case "inbox":
                break;
            case "today":
                sortedStorage = sortedStorage.filter(item => isToday(parseISO(item.dueDate)));
                break;
            case "week":
                sortedStorage = sortedStorage.filter(item => isThisWeek(parseISO(item.dueDate)), { weekStartsOn: 1 });
                break;
        }  
    }
    
    function sortByDate() {
        sortedStorage.sort((a, b) => compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)));
    }

    function sortByDone() {
        sortedStorage = sortedStorage.sort((a, b) => (b.done === false) - (a.done === false));
    }

    function sortByPriority() {
        sortedStorage.sort((a, b) => (b.priority === true) - (a.priority === true));
    }

    sortByProject();
    sortByDisplay();
    sortByDate();
    sortByPriority();
    sortByDone();

    return sortedStorage
}

export {addTodo, deleteTodo, editTodo, sortTodos, todoStorage, projectsStorage, 
syncData, setPriority, addProject, deleteProject, setDone}