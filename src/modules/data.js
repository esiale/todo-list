let todoStorage = [];

function addTodo(title, desc, dueDate, priority) {
    const newEntry = {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
        isDone: false
    };
    todoStorage.push(newEntry);
    syncData();
}

function syncData() {
    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        return
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    }
}

export {addTodo, todoStorage, syncData, setPriority}

