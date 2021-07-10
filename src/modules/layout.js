import {renderProjectsTab, showProjectsTab, displayProjectStatus} from "./projects"
import {showForm} from "./form"
import {renderAllTodos} from "./todos"


function renderLayout() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const header = document.createElement("header");
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.textContent = "esiale TodoApp";

    const projectStatus = document.createElement("div");
    projectStatus.className = "project-status";

    header.append(logo, projectStatus);

    const main = document.createElement("main");
    main.dataset.display = "inbox";
    main.dataset.project = "none";

    const nav = document.createElement("nav");
    nav.className = "nav-closed";

        const inbox = document.createElement("div");
        inbox.textContent = "Inbox";
        inbox.classList.add("nav-active-tab");
        inbox.addEventListener("click", () => {
            main.dataset.display = "inbox";
            inbox.classList.add("nav-active-tab");
            today.classList.remove("nav-active-tab");
            week.classList.remove("nav-active-tab");
            renderAllTodos();
        });
        const today = document.createElement("div");
        today.textContent = "Today";
        today.addEventListener("click", () => {
            main.dataset.display = "today"
            today.classList.add("nav-active-tab");
            inbox.classList.remove("nav-active-tab");
            week.classList.remove("nav-active-tab");
            renderAllTodos();
        });
        const week = document.createElement("div");
        week.textContent = "Week";
        week.addEventListener("click", () => {
            main.dataset.display = "week"
            week.classList.add("nav-active-tab");
            inbox.classList.remove("nav-active-tab");
            today.classList.remove("nav-active-tab");
            renderAllTodos();
        });
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
    displayProjectStatus();
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

export {renderLayout}