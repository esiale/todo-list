import {todoStorage, setPriority} from "../modules/data"

function renderLayout() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const header = document.createElement("header");
    const logo = document.createElement("logo");
    logo.className = "logo";
    logo.textContent = "esiale TodoApp";
    header.append(logo);

    const main = document.createElement("main");

    const nav = document.createElement("nav");
    nav.className = "nav-closed";
        const inbox = document.createElement("div");
        inbox.textContent = "Inbox";
        const today = document.createElement("div");
        today.textContent = "Today";
        const week = document.createElement("div");
        week.textContent = "Week";
        const projects = document.createElement("div");
        projects.textContent = "Projects";  
        const addNew = document.createElement("div");
        addNew.textContent = "Add New";  
    nav.append(inbox, today, week, projects, addNew);

    const mobileNav = document.createElement("div");
    mobileNav.className = "mobile-nav";

    const hamburgerButton = document.createElement("div");
    hamburgerButton.className = "hamburger-button";
    const hambIcon = document.createElement("span");
    hambIcon.className = "material-icons-round mobile-buttons";
    hambIcon.textContent = "menu";
    hamburgerButton.addEventListener("click", showNav);
    hamburgerButton.append(hambIcon);
    
    const addButton = document.createElement("div");
    addButton.className = "add-button";
    const addIcon = document.createElement("span");
    addIcon.className = "material-icons-round mobile-buttons";
    addIcon.textContent = "add_circle";
    addButton.append(addIcon);
    mobileNav.append(addButton, hamburgerButton);
    wrapper.append(header, main, nav, mobileNav);
    document.querySelector("#content").append(wrapper);
}

function showNav() {
    const nav = document.querySelector("nav");

    if (nav.classList.contains("nav-closed")) {
        nav.className = "nav-open";
    } else {
        nav.className = "nav-closed";
    }
}

function renderAllTodos() {
    if (todoStorage === null) {
        return
    } else {
        todoStorage.forEach(function(item, index) {
            renderTodo(item.title, item.desc, item.dueDate, index);
        })
    }
}


function renderTodo(title, desc, dueDate, index) {
    const main = document.querySelector("main");
    const todoWrapper = document.createElement("div");
    todoWrapper.className = "todo-wrapper";
    todoWrapper.dataset.index = index;

    const todoMain = document.createElement("div");
    todoMain.className = "todo-main";

    const todoTitle = document.createElement("p");
    todoTitle.textContent = title;
    todoTitle.className = "todo-title";
    const todoDate = document.createElement("p");
    todoDate.className = "todo-date";
    todoDate.textContent = "12/03/2012";

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-icons delete-icon";
    deleteIcon.textContent = "delete";

    const expandMoreIcon = document.createElement("span");
    expandMoreIcon.className = "material-icons";
    expandMoreIcon.textContent = "expand_more";
    expandMoreIcon.addEventListener("click", expandTodo);

    const unckeckedIcon = document.createElement("span");
    unckeckedIcon.className = "material-icons-outlined";
    unckeckedIcon.textContent = "radio_button_unchecked";

    const editIcon = document.createElement("span");
    editIcon.className = "material-icons-outlined";
    editIcon.textContent = "edit_note";

    const priorityIcon = document.createElement("span");
    priorityIcon.className = "material-icons-outlined"
    priorityIcon.textContent = "priority_high";
    priorityIcon.addEventListener("click", todoPriority);

    const todoSecondary = document.createElement("div");
    todoSecondary.className = "todo-secondary";
    const todoDesc = document.createElement("p");
    todoDesc.textContent = desc;
    const secondaryIcons = document.createElement("div");
    secondaryIcons.className = "todo-secondary-icons"
    secondaryIcons.append(priorityIcon, editIcon, deleteIcon);

    todoSecondary.append(todoDesc, secondaryIcons);

    todoMain.append(unckeckedIcon, todoTitle, todoDate, expandMoreIcon);
    todoWrapper.append(todoMain, todoSecondary);
    main.append(todoWrapper);
}

function expandTodo(e) {
    const thisSecondary = this.parentNode.parentNode.querySelector(".todo-secondary");

    if (this.textContent === "expand_more") {
        this.textContent = "expand_less";

        thisSecondary.classList.add("todo-secondary-active");
    } else {
        this.textContent = "expand_more";
        thisSecondary.classList.remove("todo-secondary-active");
    }
}

function todoPriority(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;
    setPriority(thisIndex);
    if (this.classList.contains("priority-icon-activated")) {
        this.classList.remove("priority-icon-activated");
    } else {
        this.classList.add("priority-icon-activated");
    }
}

export {renderLayout, renderAllTodos}