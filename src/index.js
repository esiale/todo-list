import "./styles/style.css"
import {renderLayout, renderAllTodos} from "./modules/dom"
import {syncData, addTodo} from "./modules/data"

addTodo("test test test", "test test test TEST TEST TEST test test test TEST TEST TEST", "12.04/2021", false)

syncData();
renderLayout();
renderAllTodos();