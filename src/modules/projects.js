import {renderAllTodos} from "./todos"
import {projectsStorage, addProject, deleteProject} from "./data"

function renderProjectsTab() {
    const projectsTab = document.querySelector(".nav-projects-tab");
    const nav = document.querySelector("nav");
    
    const newProjectPanel = document.createElement("div");
    newProjectPanel.className = "nav-projects-new";
    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "new-project-name");
    newProjectInput.setAttribute("id", "new-project-name");
    newProjectInput.setAttribute("autocomplete", "off");
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
        const noProject = document.createElement("option");
        const main = document.querySelector("main");
        noProject.setAttribute("value", "none");
        noProject.setAttribute("selected", "");
        noProject.textContent = "No project selected";    
        item.append(noProject);

        if (projectsStorage === null) return

        projectsStorage.forEach(project => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", project);
            newOption.textContent = project;
            item.append(newOption);

        if (item.id === "nav-projects-tab-select") {
            item.addEventListener("change", function() {
                main.dataset.project = this.value;
                renderAllTodos();
                displayProjectStatus();
            })
        }
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

        const main = document.querySelector("main");
        main.dataset.project = "none";
        renderAllTodos();
        displayProjectStatus();
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

function displayProjectStatus() {
    const headerStatus = document.querySelector(".project-status");
    const main = document.querySelector("main");
    const mainDisplay = main.dataset.project;

    if (mainDisplay === "none") {
        headerStatus.textContent = "You're currently viewing no projects."
    } else {
        headerStatus.textContent = `You're viewing: ${main.dataset.project} project.`;
    }
}

export {renderProjectOptions, renderProjectsTab, showProjectsTab, displayProjectStatus}