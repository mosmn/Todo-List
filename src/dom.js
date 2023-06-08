import "./style.css";
// eslint-disable-next-line import/named, import/extensions
import { todoList, createNewTodo, todoLogic } from "./todo.js";

const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = textContent;

  return element;
};

const createTask = () => {
  const task = createNewTodo(
    document.querySelector(".task-title").value,
    document.querySelector(".task-description").value,
    document.querySelector(".task-due-date").value,
    document.querySelector(".task-priority").value
  );

  return task;
};

const taskFactory = (todo) => {
  const i = todoList.indexOf(todo);
  const task = createElement("div", "task", "");
  task.setAttribute("data-index", i);
  task.innerHTML = `
        <div class="task-header">
            <div class="complete-task">
                <div class="checkmark">&#10004;</div>
            </div>
            <h2>${todo.title}</h2>
            <img class="delete-task" id="${i}" src="https://img.icons8.com/ios/50/000000/delete-filled.png"/>
        </div>
        <div class="task-body">
            <p>${todo.description}</p>
            <p>${todo.dueDate}</p>
            <p>${todo.priority}</p>
        </div>
    `;
  return task;
};

const renderTasks = () => {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";
  todoList.forEach((todo) => {
    taskList.appendChild(taskFactory(todo));
  });
  remover();
};

const addTask = () => {
  todoLogic.addTodo(createTask());
  renderTasks();
};

const removeTaskElement = (index) => {
  const taskList = document.querySelector(".task-list");
  const task = document.querySelector(`[data-index="${index}"]`);
  taskList.removeChild(task);
};

const deleteTask = (index) => {
  todoLogic.removeTodo(index);
  removeTaskElement(index);
  renderTasks();
};

const remover = () => {
  const deleteTaskButtons = document.querySelectorAll(".delete-task");
  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteTask(button.id);
    });
  });
};

const initialPageLoad = () => {
  const mainContainer = createElement("div", "main-container", "");
  mainContainer.innerHTML = `
        <div class="header-bar">
            <button class="menu-button">
                <img src="https://img.icons8.com/ios/50/000000/menu-filled.png"/>
            </button>
            <div class="logo">
                <img src="https://img.icons8.com/ios/50/000000/todo-list-filled.png"/>
                <h1>Todo List</h1>
            </div>
            <div class="user">
                <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
            </div>
        </div>
        <div class="sidebar">
            <div class="default">
                <div class="Inbox">Inbox</div>
                <div class="Today">Today</div>
                <div class="Upcoming">Upcoming</div>
            </div>
            <div class="projects">Projects</div>
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
                <button class="task-cancel">Cancel</button>
            </div>
            <div class="task-list"></div>
        </div>
    `;
  document.body.appendChild(mainContainer);

  const submitTask = document.querySelector(".task-submit");
  submitTask.addEventListener("click", addTask);
};

document.addEventListener("DOMContentLoaded", initialPageLoad);
