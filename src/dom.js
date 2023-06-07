import './style.css';
import {todoList, createNewTodo, addTodo} from './app.js';

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

const taskForm = document.createElement('form');
taskForm.classList.add('task-form');
mainContainer.appendChild(taskForm);

const taskTitle = document.createElement('input');
taskTitle.classList.add('task-title');
taskTitle.setAttribute('type', 'text');
taskTitle.setAttribute('placeholder', 'Title');
taskForm.appendChild(taskTitle);

const taskDescription = document.createElement('input');
taskDescription.classList.add('task-description');
taskDescription.setAttribute('type', 'text');
taskDescription.setAttribute('placeholder', 'Description');
taskForm.appendChild(taskDescription);

const taskDueDate = document.createElement('input');
taskDueDate.classList.add('task-due-date');
taskDueDate.setAttribute('type', 'date');
taskForm.appendChild(taskDueDate);

const taskPriority = document.createElement('select');
taskPriority.classList.add('task-priority');
taskForm.appendChild(taskPriority);

const taskPriorityOption1 = document.createElement('option');
taskPriorityOption1.setAttribute('value', 'low');
taskPriorityOption1.textContent = 'Low';
taskPriority.appendChild(taskPriorityOption1);

const taskPriorityOption2 = document.createElement('option');
taskPriorityOption2.setAttribute('value', 'medium');
taskPriorityOption2.textContent = 'Medium';
taskPriority.appendChild(taskPriorityOption2);

const taskPriorityOption3 = document.createElement('option');
taskPriorityOption3.setAttribute('value', 'high');
taskPriorityOption3.textContent = 'High';
taskPriority.appendChild(taskPriorityOption3);

const taskSubmit = document.createElement('input');
taskSubmit.classList.add('task-submit');
taskSubmit.setAttribute('type', 'submit');
taskSubmit.setAttribute('value', 'Add Task');
taskForm.appendChild(taskSubmit);

const taskList = document.createElement('div');
taskList.classList.add('task-list');
mainContainer.appendChild(taskList);

const addTask = () => {
    const task = createNewTodo(
        taskTitle.value,
        taskDescription.value,
        taskDueDate.value,
        taskPriority.value
    );
    addTodo(task);
    taskTitle.value = '';
    taskDescription.value = '';
    taskDueDate.value = '';
    taskPriority.value = 'low';
    renderTasks();
}

const renderTasks = () => {
    taskList.innerHTML = '';
    todoList.forEach((task, index) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainer.setAttribute('data-index', index);
        taskList.appendChild(taskContainer);

        const taskTitle = document.createElement('h2');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        taskContainer.appendChild(taskTitle);

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.textContent = task.description;
        taskContainer.appendChild(taskDescription);

        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = task.dueDate;
        taskContainer.appendChild(taskDueDate);

        const taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        taskPriority.textContent = task.priority;
        taskContainer.appendChild(taskPriority);

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDelete.textContent = 'Delete';
        taskDelete.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTasks();
        });
        taskContainer.appendChild(taskDelete);
    });
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
}
);

renderTasks();
