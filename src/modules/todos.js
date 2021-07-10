import {sortTodos, todoStorage, addTodo, deleteTodo, editTodo, setDone, setPriority} from "./data"
import {showForm} from "./form"
import format from 'date-fns/format'

function renderAllTodos() {
    const storage = sortTodos();
    if (todoStorage === null) {
        return
    } else {
        const main = document.querySelector("main");
        const allTodos = main.querySelectorAll(".todo-wrapper");

        allTodos.forEach(todo => {
            main.removeChild(todo);
        })

        storage.forEach(function(item, index) {
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
    todoDate.textContent = format(new Date(dueDate), "MM/dd/yyyy");

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-icons delete-icon";
    deleteIcon.textContent = "delete";
    deleteIcon.addEventListener("click", confirmDelete)

    const expandMoreIcon = document.createElement("span");
    expandMoreIcon.className = "material-icons";
    expandMoreIcon.textContent = "expand_more";
    expandMoreIcon.addEventListener("click", expandTodo);
    
    const editIcon = document.createElement("span");
    editIcon.className = "material-icons-outlined";
    editIcon.setAttribute("id", "edit-todo-button")
    editIcon.textContent = "edit_note";
    editIcon.addEventListener("click", showEdit);

    const priorityIcon = document.createElement("span");
    priorityIcon.className = "material-icons-outlined"
    priorityIcon.textContent = "priority_high";
    priorityIcon.addEventListener("click", activatePriority);
    if (todoStorage[index].priority === true && todoStorage[index].done === false) {
        priorityIcon.classList.add("priority-icon-activated");
        todoMain.style.backgroundColor = "var(--pale-red)";
    }

    const doneIcon = document.createElement("span");
    doneIcon.className = "material-icons-outlined todo-check-icon";
    doneIcon.addEventListener("click", activateDone);
    if (todoStorage[index].done === true) {
        todoMain.classList.add("todo-main-done");
        doneIcon.textContent = "radio_button_checked";
        priorityIcon.removeEventListener("click", activatePriority);
    } else {
        doneIcon.textContent ="radio_button_unchecked"
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

    todoMain.append(doneIcon, todoTitle, todoDate, expandMoreIcon);
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
    renderAllTodos();
}

function activateDone(e) {
    const thisIndex = this.parentNode.parentNode.dataset.index;
    const todoMain = this.parentNode;
    const icon = todoMain.querySelector(".todo-check-icon");
    setDone(thisIndex);
    renderAllTodos();
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

    let deleteTimer = setTimeout(()  => {
    if (todoStorage[thisIndex] === undefined) return
    thisDesc.classList.remove("todo-confirm-delete");
    thisDesc.textContent = todoStorage[thisIndex].desc;
    this.removeAttribute("confirm-delete");
    }, 4000)
}

function showEdit(e) {
    const caller = this;
    showForm("editTodo", caller);
}

export {renderAllTodos, addTodo, editTodo}