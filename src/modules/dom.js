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
    hambIcon.className = "material-icons-round style";
    hambIcon.textContent = "menu";
    hamburgerButton.addEventListener("click", showNav);
    hamburgerButton.addEventListener("click", rotateIcon);
    hamburgerButton.append(hambIcon);

    const addButton = document.createElement("div");
    addButton.className = "add-button";
    const addIcon = document.createElement("span");
    addIcon.className = "material-icons-round style";
    addIcon.textContent = "add_circle";
    addButton.append(addIcon);
    mobileNav.append(addButton, hamburgerButton);
    wrapper.append(header, main, nav, mobileNav);
    document.querySelector("#content").append(wrapper);
}

function showNav() {
    const nav = document.querySelector("nav");

    if (window.getComputedStyle(nav).display === "none") {
    nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

function rotateIcon(e) {
    if (this.style.transform === "rotate(90deg)") {
    this.style.transform = "rotate(0deg)";
    } else {
        this.style.transform = "rotate(90deg)";
    }
}

export {renderLayout}