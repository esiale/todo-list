import "./styles/style.css"
import {renderLayout, renderAllTodos, renderForm} from "./modules/dom"
import {syncData, addTodo} from "./modules/data"

syncData();
renderLayout();
renderForm();
renderAllTodos();