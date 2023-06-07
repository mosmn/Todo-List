import './style.css';
import {todoList, createNewTodo, addTodo} from './todo.js';

const createElement = (tagName, className, textContent) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = textContent;

    return element;
};

const taskFactory = (todo) => {
    const task = createElement('div', 'task', '');
    task.innerHTML = `
        <div class="task-title">${todo.title}</div>
        <div class="task-description">${todo.description}</div>
        <div class="task-due-date">${todo.dueDate}</div>
        <div class="task-priority">${todo.priority}</div>
    `
    return task;
}

const initialPageLoad = () => {
    const mainContainer = createElement('div', 'main-container', '');
    mainContainer.innerHTML = `
        <div class="header-bar">
            <img src="https://img.icons8.com/ios/50/000000/todo-list-filled.png"/>
            <h1>Todo List</h1>
        </div>
        <div class="sidebar">
            <div class="sidebar-title">Projects</div>
            <div class="sidebar-projects">
                <div class="sidebar-project">Project 1</div>
                <div class="sidebar-project">Project 2</div>
                <div class="sidebar-project">Project 3</div>
            </div>
        </div>
        <div class="tasks">
            <div class="task-form">
                <input class="task-title" type="text" placeholder="Title">
                <input class="task-description" type="text" placeholder="Description">
                <input class="task-due-date" type="date">
                <select class="task-priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input class="task-submit" type="submit" value="Add Task">
            </div>
            <div class="task-list"></div>
        </div>
    `   
    document.body.appendChild(mainContainer);
}

document.addEventListener('DOMContentLoaded', initialPageLoad);


