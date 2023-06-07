import './style.css';
import {todoList, createNewTodo, addTodo} from './todo.js';

// a factory function that takes in a todo object and returns a dom elements

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

const mainContainer = createElement('div', 'main-container', '');
document.body.appendChild(mainContainer);
