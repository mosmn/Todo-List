import "./style.css";
import {todoLogic} from "./todo.js";

const projectsList = [];

const createNewProject = (title, color) => ({
    title,
    color,
    todoList: todoLogic.todoListGenerator(),
});

const projectLogic = (() => {
    const addProject = (project) => {
        projectsList.push(project);
    };

    const removeProject = (index) => {
        projectsList.splice(index, 1);
    };

    return { addProject, removeProject };
})();

export { projectsList, createNewProject, projectLogic };

