import {todoStorage, todoProjects, setPriority, 
addTodo, deleteTodo, editTodo, syncData, addProject,
deleteProject
} from "../modules/data"

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
        projects.className = "nav-projects";
        projects.addEventListener("click", showProjectsTab);

        const projectsTab = document.createElement("div");
        projectsTab.className = "nav-projects-tab";
        
    nav.append(inbox, today, week, projects, projectsTab);

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

    renderProjectsTab();
}

function showNav() {
    const nav = document.querySelector("nav");
    const formWrapper = document.querySelector(".form-wrapper");
    
    if (formWrapper.classList.contains("form-wrapper-open")) {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }

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
    deleteIcon.addEventListener("click", confirmDelete)

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
    editIcon.addEventListener("click", showEdit);

    const priorityIcon = document.createElement("span");
    priorityIcon.className = "material-icons-outlined"
    priorityIcon.textContent = "priority_high";
    priorityIcon.addEventListener("click", activatePriority);
    if (todoStorage[index].priority === true) {
        priorityIcon.classList.add("priority-icon-activated");
    }

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
    // todoProjects.forEach(project => {
    //     const newOption = document.createElement("option");
    //     newOption.setAttribute("value", project);
    //     newOption.textContent = project;
    //     projectInput.append(newOption);
    // })

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
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Done")
    submitButton.addEventListener("click", submitForm);

    const cancelButton = document.createElement("input");
    cancelButton.setAttribute("id", "cancel-button")
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
    const submitButton = document.getElementById("submit-button");
    
    if (!/\S/.test(title.value)) {
        title.style.border = "0.15rem var(--red) solid";
    } else {
        title.style.border = "";
    }
    if (!/\S/.test(desc.value)) {
        desc.style.border = "0.15rem var(--red) solid";
    } else {
        desc.style.border = "";
    }
    if (!/\S/.test(date.value)) {
        date.style.border = "0.15rem var(--red) solid";
    } else {
        date.style.border = "";
    }
    if (!/\S/.test(title.value) || !/\S/.test(desc.value) || !/\S/.test(date.value)) {
        return
    } else {
        if (submitButton.value === "Done") {
        addTodo(title.value, desc.value, date.value, project.value, JSON.parse(priority.value));
        showForm();
        } else if (submitButton.value === "Edit") {
            editTodo(title.value, desc.value, date.value, project.value, JSON.parse(priority.value), submitButton.dataset.editIndex);
            submitButton.value = "Done";
            delete submitButton.dataset.editIndex;
            showForm();
        }
    }
}

function showForm(action, caller) {
    const formWrapper = document.querySelector(".form-wrapper");
    const title = document.getElementById("todo-title");
    const desc =  document.getElementById("todo-desc");
    const date = document.getElementById("todo-date");
    const project = document.getElementById("todo-project");
    const priority = document.querySelectorAll("input[name='todo-priority']");
    const submitButton = document.getElementById("submit-button");
    const addButton = document.querySelector(".add-button");
    const nav = document.querySelector("nav");

    if (formWrapper.classList.contains("form-wrapper-open") && this === addButton && submitButton.value === "Edit") return
    if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        nav.classList.add("nav-closed");
    }

    if (action === "editTodo") {
        const thisIndex = caller.parentNode.parentNode.parentNode.dataset.index;
        title.value = todoStorage[thisIndex].title;
        desc.value = todoStorage[thisIndex].desc;
        date.value = todoStorage[thisIndex].dueDate;
        project.value = todoStorage[thisIndex].project;
        if (todoStorage[thisIndex].priority === true) {
            priority[0].checked = true;
            priority[1].checked = false;
        } else {
            priority[0].checked = false;
            priority[1].checked = true;
        }

        submitButton.value = "Edit";
        submitButton.dataset.editIndex = thisIndex;
    } else {
        title.value = "";
        desc.value = "";
        date.value = "";
        project.value = "Default";
        priority.value = true;
        submitButton.value = "Done";
        priority[0].checked = false;
        priority[1].checked = true
    }
    
    if (formWrapper.classList.contains("form-wrapper-closed")) {
        formWrapper.classList.remove("form-wrapper-closed");
        formWrapper.classList.add("form-wrapper-open");
    } else {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }
}

function confirmDelete(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;

    if (this.hasAttribute("confirm-delete")) {
        deleteTodo(thisIndex);
        return
    }
    const thisDesc = this.parentNode.parentNode.querySelector(".todo-desc");

    thisDesc.classList.add("todo-confirm-delete");
    thisDesc.textContent = "Press again the delete button to confirm!";
    this.setAttribute("confirm-delete", true);

    let clearDeleteTimer = setTimeout(()  => {
    if (thisDesc === undefined) return clearTimeout(clearDeleteTimer)

    thisDesc.classList.remove("todo-confirm-delete");
    thisDesc.textContent = todoStorage[thisIndex].desc;
    this.removeAttribute("confirm-delete");
    }, 4000)
}

function showEdit(e) {
    const caller = this;
    showForm("editTodo", caller);
}

function renderProjectsTab() {
    const projectsTab = document.querySelector(".nav-projects-tab");
    const nav = document.querySelector("nav");
    
    const newProjectPanel = document.createElement("div");
    newProjectPanel.className = "nav-projects-new";
    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "new-project-name");
    newProjectInput.setAttribute("id", "new-project-name");
    newProjectInput.placeholder = "Choose name for a new project"

    const newProjectButtons = document.createElement("div");

    const newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("id", "new-project-button");
    newProjectButton.textContent = "Add new project";
    newProjectButton.addEventListener("click", handleNewProject);

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.setAttribute("id", "delete-project-button");
    deleteProjectButton.textContent = "Delete project";
    deleteProjectButton.addEventListener("click", handleDeleteProject);

    newProjectButtons.append(newProjectButton, deleteProjectButton);
    newProjectPanel.append(newProjectInput, newProjectButtons);

    const selectProject = document.createElement("select");
    selectProject.setAttribute("id", "nav-projects-tab-select")

    // const noProject = document.createElement("option");
    // noProject.value = "test";
    // noProject.textContent = "No project selected";

    // selectProject.append(noProject);
    // todoProjects.forEach(project => {
    //     const newOption = document.createElement("option");
    //     newOption.setAttribute("value", project);
    //     newOption.textContent = project;
    //     selectProject.append(newOption);
    // })
    projectsTab.append(selectProject, newProjectPanel);
    nav.append(projectsTab);
}

function showProjectsTab() {
    const projectsTab = document.querySelector(".nav-projects-tab")
    if (projectsTab.classList.contains("nav-projects-tab-open")) {
        projectsTab.classList.remove("nav-projects-tab-open");
    } else {
        projectsTab.classList.add("nav-projects-tab-open");
    }
}

function renderProjectOptions() {
    const allSelects = document.querySelectorAll("select");
    allSelects.forEach(item => {
        const allOptions = item.querySelectorAll("option");
        for (let i = 0; i < allOptions.length; i++) {
            item.removeChild(allOptions[i])
        }
    });
    allSelects.forEach(item => {
        const noProject = document.createElement("option");
        noProject.setAttribute("value", "none");
        noProject.textContent = "No project selected";    
        item.append(noProject);
        todoProjects.forEach(project => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", project);
            newOption.textContent = project;
            item.append(newOption);
        })
    })
}

function handleNewProject(e) {
    const newProjectName = document.getElementById("new-project-name");
    const newProjectButton = document.getElementById("new-project-button");
    if (addProject(newProjectName.value) === "error") {
        newProjectName.value = "This project already exists or input is empty!"
    } else {
        newProjectName.value = "Project added!"
        renderProjectOptions();
    }
    newProjectButton.removeEventListener("click", handleNewProject);
    const timeout = setTimeout(() => {
        newProjectName.value = "";
        newProjectButton.addEventListener("click", handleNewProject);
    }, 1000);
}


function handleDeleteProject() {
    const newProjectName = document.getElementById("new-project-name");
    const newProjectButton = document.getElementById("new-project-button");
    const deleteProjectButton = document.getElementById("delete-project-button");
    const selectProject = document.getElementById("nav-projects-tab-select");
    const selectedProject = selectProject.options[selectProject.selectedIndex];

    if (selectedProject.hasAttribute("confirm-delete")) {
        deleteProject(selectedProject.value);
        newProjectName.value = "";
        return
    }

    if (selectedProject.value === "none") return

    selectedProject.setAttribute("confirm-delete", true);
    newProjectName.value = "Click twice to delete selected project."
    newProjectButton.removeEventListener("click", handleNewProject);
    const timeout = setTimeout(() => {
        newProjectName.value = "";
        newProjectButton.addEventListener("click", handleNewProject);

        if (selectedProject === undefined) return clearTimeout(timeout);
        selectedProject.removeAttribute("confirm-delete")
    }, 2000);
}

export {renderLayout, renderAllTodos, renderForm, renderProjectOptions}