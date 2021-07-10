import "./styles/style.css"
import {renderLayout} from "./modules/layout"
import {syncData} from "./modules/data"
import {renderAllTodos} from "./modules/todos"
import {renderForm} from "./modules/form"
import {renderProjectOptions} from "./modules/projects"

syncData();
renderLayout();
renderForm();
renderAllTodos();
renderProjectOptions();