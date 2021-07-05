const todoStorage = [];

function addTodo(title, desc, dueDate, priority, notes, checklist) {
    const newEntry = {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checklist: checklist,
        isDone: false
    };
    todoStorage.push(newEntry);
    syncData();
}

function syncData() {x
    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        return
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

export {addTodo}

