import format from 'date-fns/format'
import {todoStorage} from "./data"
import {addTodo, editTodo} from "./todos";

function renderForm() {
    const wrapper = document.querySelector(".wrapper");

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper form-wrapper-closed";
    const form = document.createElement("form");

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "form-title-wrapper";
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "todo-title");
    titleLabel.textContent = "Choose a new title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "todo-title");
    titleInput.setAttribute("id", "todo-title");
    titleInput.setAttribute("autocomplete", "off");

    const descWrapper = document.createElement("div");
    descWrapper.className = "form-desc-wrapper";
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todo-desc");
    descLabel.textContent = "Write a description for your new Todo:";

    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "todo-desc");
    descInput.setAttribute("id", "todo-desc");
    descInput.setAttribute("autocomplete", "off");

    const dateWrapper = document.createElement("div");
    dateWrapper.className = "form-date-wrapper";
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todo-date");
    dateLabel.textContent = "When is this Todo due?";

    const today = format(new Date(), "yyyy-MM-dd");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "todo-date");
    dateInput.setAttribute("id", "todo-date");
    dateInput.setAttribute("min", today);
    dateInput.setAttribute("placeholder", "dd/mm/yyyy");

    const projectWrapper = document.createElement("div");
    projectWrapper.className = "form-project-wrapper";
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todo-project");
    projectLabel.textContent = "Assign your Todo to a project:";

    const projectInput = document.createElement("select");
    projectInput.setAttribute("id", "todo-project")

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
    if (!/\S/.test(date.value)) {
        date.style.border = "0.15rem var(--red) solid";
    } else {
        date.style.border = "";
    }
    if (!/\S/.test(title.value) || !/\S/.test(date.value)) {
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
    const editTodoButton = document.getElementById("edit-todo-button");

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
        project.value = "none";
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

export {renderForm, showForm}