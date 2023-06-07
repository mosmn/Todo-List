import './style.css';
import {todoList, createNewTodo, addTodo} from './todo.js';

const createElement = (tagName, className, textContent) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.textContent = textContent;

    return element;
};

const createTask = () => {
    const task = createNewTodo(
        document.querySelector('.task-title').value,
        document.querySelector('.task-description').value,
        document.querySelector('.task-due-date').value,
        document.querySelector('.task-priority').value
    )

    return task;
}

const taskFactory = (todo) => {
    const task = createElement('div', 'task', '');
    task.innerHTML = `
        <div class="task-header">
            <h2>${todo.title}</h2>
            <img class="delete-task" src="https://img.icons8.com/ios/50/000000/delete-sign-filled.png"/>
        </div>
        <div class="task-body">
            <p>${todo.description}</p>
            <p>${todo.dueDate}</p>
            <p>${todo.priority}</p>
        </div>
    `
    return task;
}

const renderTasks = () => {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';
    todoList.forEach(todo => {
        taskList.appendChild(taskFactory(todo));
    })
}

const addTask = () => {
    addTodo(createTask());
    renderTasks();
}

const initialPageLoad = () => {
    const mainContainer = createElement('div', 'main-container', '');
    mainContainer.innerHTML = `
        <div class="header-bar">
            <img src="https://img.icons8.com/ios/50/000000/todo-list-filled.png"/>
            <h1>Todo List</h1>
        </div>
        <div class="sidebar">
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

    const submitTask = document.querySelector('.task-submit');
    submitTask.addEventListener('click', addTask);
}

document.addEventListener('DOMContentLoaded', initialPageLoad);