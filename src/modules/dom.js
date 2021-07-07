import {todoStorage, todoProjects, setPriority, addTodo, syncData} from "../modules/data"

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
    nav.append(inbox, today, week, projects);

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
    addButton.addEventListener("click", showForm);

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
        const main = document.querySelector("main");
        const allTodos = main.querySelectorAll(".todo-wrapper");

        allTodos.forEach(todo => {
            main.removeChild(todo);
        })

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
    todoDate.textContent = dueDate;

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
    priorityIcon.addEventListener("click", activatePriority);

    const todoSecondary = document.createElement("div");
    todoSecondary.className = "todo-secondary";
    const todoDesc = document.createElement("p");
    todoDesc.textContent = desc;
    todoDesc.className = "todo-desc";

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

function activatePriority(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;
    setPriority(thisIndex);
    if (this.classList.contains("priority-icon-activated")) {
        this.classList.remove("priority-icon-activated");
    } else {
        this.classList.add("priority-icon-activated");
    }
}

function renderForm() {
    const wrapper = document.querySelector(".wrapper");

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper form-wrapper-closed";
    const form = document.createElement("form");

    const titleWrapper = document.createElement("div");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "todo-title");
    titleLabel.textContent = "Choose a new title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "todo-title");
    titleInput.setAttribute("id", "todo-title");

    const descWrapper = document.createElement("div");
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todo-desc");
    descLabel.textContent = "Write a description for your new Todo:";

    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "todo-desc");
    descInput.setAttribute("id", "todo-desc");

    const dateWrapper = document.createElement("div");
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todo-date");
    dateLabel.textContent = "When is this Todo due?";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "todo-date");
    dateInput.setAttribute("id", "todo-date");

    const projectWrapper = document.createElement("div");
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todo-project");
    projectLabel.textContent = "Assign your Todo to a project:";

    const projectInput = document.createElement("select");
    projectInput.setAttribute("id", "todo-project")
    todoProjects.forEach(project => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", project);
        newOption.textContent = project;
        projectInput.append(newOption);
    })

    const priorityWrapper = document.createElement("div");
    priorityWrapper.className = "form-priority-wrapper";
    const priorityText = document.createElement("p");
    priorityText.textContent = "Is this Todo a priority?";

    const priorityYesLabel = document.createElement("label");
    priorityYesLabel.setAttribute("for", "todo-priority-yes");
    priorityYesLabel.textContent = "Yes";

    const priorityNoLabel = document.createElement("label");
    priorityNoLabel.setAttribute("for", "todo-priority-no");
    priorityNoLabel.textContent = "No";

    const priorityRadios = document.createElement("div");
    priorityRadios.className = "form-radios";

    const priorityYesInput = document.createElement("input");
    priorityYesInput.setAttribute("type", "radio");
    priorityYesInput.setAttribute("name", "todo-priority");
    priorityYesInput.setAttribute("id", "todo-priority-yes");
    priorityYesInput.setAttribute("value", true);

    const priorityNoInput = document.createElement("input");
    priorityNoInput.setAttribute("type", "radio");
    priorityNoInput.setAttribute("name", "todo-priority");
    priorityNoInput.setAttribute("id", "todo-priority-no");
    priorityNoInput.setAttribute("value", false);
    priorityNoInput.setAttribute("checked", true);

    const formButtons = document.createElement("div");
    formButtons.className = "form-buttons";
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Done")
    submitButton.addEventListener("click", submitForm);

    const cancelButton = document.createElement("input");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel")
    cancelButton.addEventListener("click", showForm);

    titleWrapper.append(titleLabel, titleInput);
    descWrapper.append(descLabel, descInput);
    dateWrapper.append(dateLabel, dateInput);
    projectWrapper.append(projectLabel, projectInput);
    formButtons.append(submitButton, cancelButton);
    priorityRadios.append(priorityYesLabel, priorityYesInput, priorityNoLabel, priorityNoInput);
    priorityWrapper.append(priorityText, priorityRadios);
    form.append(titleWrapper, descWrapper, dateWrapper, projectWrapper, priorityWrapper, formButtons);
    formWrapper.append(form);
    wrapper.append(formWrapper);
}

function submitForm(e) {
    e.preventDefault();
    const title = document.getElementById("todo-title");
    const desc =  document.getElementById("todo-desc");
    const date = document.getElementById("todo-date");
    const project = document.getElementById("todo-project");
    const priority = document.querySelector("input[name='todo-priority']:checked");
    
    if (title.value === "") {
        title.style.border = "0.15rem var(--red) solid";
    } else {
        title.style.border = "";
    }
    if (desc.value === "") {
        desc.style.border = "0.15rem var(--red) solid";
    } else {
        desc.style.border = "";
    }
    if (date.value === "") {
        date.style.border = "0.15rem var(--red) solid";
    } else {
        date.style.border = "";
    }
    if (date.value === "" || desc.value === "" || date.value === "") {
        return
    } else {
        addTodo(title.value, desc.value, date.value, project.value, priority.value);
        showForm();
    }
}

function showForm() {
    const formWrapper = document.querySelector(".form-wrapper");
    if (formWrapper.classList.contains("form-wrapper-closed")) {
        formWrapper.classList.remove("form-wrapper-closed");
        formWrapper.classList.add("form-wrapper-open");
    } else {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }
}

// function confirmDelete() {
//     const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;

//     const confirmDelete = document.createElement("div");
//     confirmDelete.className = "confirm-delete";

//     const confirmDeleteText = document.createElement("div");
//     confirmDeleteText.className = "confirm-delete-text";

//     const confirmDeleteButtons = document.createElement("div");
//     confirmDeleteButtons.className = "confirm-delete-buttons";

//     const deleteMessage = document.createElement("div");
//     deleteMessage.textContent = "Confirm if you want to delete:"
//     const todoTitle = document.createElement("div");
//     todoTitle.textContent = todoStorage[thisIndex].title;

//     const yesButton = document.createElement("button");
//     yesButton.textContent = "Yes";
//     const noButton = document.createElement("button");
//     noButton.textContent = "No";

//     confirmDeleteText.append(deleteMessage, todoTitle);
//     confirmDeleteButtons.append(yesButton, noButton);

//     confirmDelete.append(confirmDeleteText, confirmDeleteButtons);
//     overlay.append(confirmDelete);
//     body.append(overlay);
// }

export {renderLayout, renderAllTodos, renderForm}