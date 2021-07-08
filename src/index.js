import "./styles/style.css"
import {renderLayout, renderAllTodos, renderForm, renderProjectOptions} from "./modules/dom"
import {syncData, addTodo} from "./modules/data"

syncData("todo");
syncData("projects");
renderLayout();
renderForm();
renderAllTodos();
renderProjectOptions();