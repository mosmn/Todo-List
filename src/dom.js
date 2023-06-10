import "./style.css";
import { todoList, createNewTodo, todoLogic } from "./todo.js";
import { projectsList, createNewProject, projectLogic } from "./projects.js";
import dateLogic from "./date.js";

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
  task.setAttribute("task-index", i);
  task.innerHTML = `
        <div class="task-header">
            <div class="left">
                <div class="complete-task" id="${i}">
                    <div class="checkmark">&#10004;</div>
                </div>
                <h2>${todo.title}</h2>
            </div>
            <img class="delete-task" id="${i}" src="https://img.icons8.com/ios/50/000000/delete-filled.png"/>
        </div>
        <div class="task-body">
            <p>${todo.description}</p>
            <p>${dateLogic.defaultDateFormatter(new Date(todo.dueDate))}</p>
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

const addTaskFormbtn = () => {
  const addTaskBtn = createElement("div", "add-taskbtn", "");
  addTaskBtn.innerHTML = `
    <div class="add-symbol">+</div>
    <div class="add-task">Add Task</div>
    `;
  const tasks = document.querySelector(".tasks");
  tasks.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", renderAddTaskForm);
};

const adder = () => {
  const taskSubmit = document.querySelector(".task-submit");
  const taskCancel = document.querySelector(".task-cancel");
  taskSubmit.addEventListener("click", () => {
    addTask();
    addTaskToCurrentProject();
    closeAddTaskForm();
  });
  taskCancel.addEventListener("click", () => {
    closeAddTaskForm();
  });
};

const renderAddTaskForm = () => {
  const inputForm = createElement("div", "task-form", "");
  inputForm.innerHTML = `
    <input class="task-title" type="text" placeholder="Title" required>
    <input class="task-description" type="text" placeholder="Description" required>
    <input class="task-due-date" type="date">
    <select class="task-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    <input class="task-submit" type="submit" value="Add Task">
    <button class="task-cancel">Cancel</button>
    `;
  const addTaskBtn = document.querySelector(".add-taskbtn");
  const tasks = document.querySelector(".tasks");
  tasks.removeChild(addTaskBtn);
  tasks.appendChild(inputForm);
  adder();
};

const closeAddTaskForm = () => {
  const inputForm = document.querySelector(".task-form");
  const tasks = document.querySelector(".tasks");
  tasks.removeChild(inputForm);
  addTaskFormbtn();
};

const removeTaskElement = (index) => {
  const taskList = document.querySelector(".task-list");
  const task = document.querySelector(`[task-index="${index}"]`);
  taskList.removeChild(task);
};

const deleteTask = (index) => {
  todoLogic.removeTodo(index);
  removeTaskElement(index);
  renderTasks();
};

const remover = () => {
  const deleteTaskButtons = document.querySelectorAll(".delete-task");
  const completeTaskButtons = document.querySelectorAll(".complete-task");
  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteTask(button.id);
    });
  });
  completeTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteTask(button.id);
    });
  });
};

const renderAddProjectForm = () => {
  const inputForm = createElement("div", "project-form", "");
  inputForm.innerHTML = `
        <h2>Add Project</h2>
        <label for="project-title">Name</label>
        <input class="project-title" type="text" required>
        <label for="project-color">Color</label>
        <select class="project-color">
            <option value="#9b111e">Berry Red</option>
            <option value="#d11d1d">Red</option>
            <option value="#e76f51">Orange</option>
            <option value="#f4d35e">Yellow</option>
            <option value="#a8d8ea">Olive Green</option>
            <option value="#90be6d">Lime Green</option>
            <option value="#43aa8b">Green</option>
            <option value="#4d908e">Mint Green</option>
            <option value="#277da1">Teal</option>
            <option value="#56a3a6">Sky Blue</option>
            <option value="#80ced6">Light Blue</option>
            <option value="#6497b1">Blue</option>
            <option value="#8d6e63">Grape</option>
            <option value="#b19cd9">Violet</option>
            <option value="#d7bde2">Lavender</option>
            <option value="#e599f7">Magenta</option>
            <option value="#f7a8b8">Salmon</option>
            <option value="#4a4a4a">Charcoal</option>
            <option value="#9a9a9a">Grey</option>
            <option value="#c7c7c7">Taupe</option>
        </select>
        <input class="project-submit" type="submit" value="Add Project">
        <button class="project-cancel">Cancel</button>
    `;
  document.body.appendChild(inputForm);
  adderProject();
};

const addProjectFormbtn = () => {
  const addProjectBtn = document.querySelector(".add-project");
  addProjectBtn.addEventListener("click", renderAddProjectForm);
};

const closeAddProjectForm = () => {
  const inputForm = document.querySelector(".project-form");
  document.body.removeChild(inputForm);
};

const addProject = (projectForm) => {
  const projectTitle = projectForm.querySelector(".project-title").value;
  const projectColor = projectForm.querySelector(".project-color").value;
  const project = createNewProject(projectTitle, projectColor);
  projectLogic.addProject(project);
  renderProjects();
  closeAddProjectForm();
};

const adderProject = () => {
  const projectSubmit = document.querySelector(".project-submit");
  const projectCancel = document.querySelector(".project-cancel");
  projectSubmit.addEventListener("click", (event) => {
    const projectForm = event.target.closest(".project-form");
    addProject(projectForm);
  });
  projectCancel.addEventListener("click", closeAddProjectForm);
};

const projectFactory = (project) => {
  const i = projectsList.indexOf(project);
  const projectElement = createElement("div", "project", "");
  projectElement.setAttribute("project-index", i);
  projectElement.innerHTML = `
        <div class="color" style="background-color: ${project.color}"></div>
        <div class="project-title">${project.title}</div>
        <div class="delete-project" id="${i}">&#10540;</div>
    `;
  return projectElement;
};

const renderProjects = () => {
  const projects = document.querySelector(".projects-list");
  projects.innerHTML = "";
  projectsList.forEach((project) => {
    projects.appendChild(projectFactory(project));
  });
  removerProject();
};

const removeProjectElement = (index) => {
  const projects = document.querySelector(".projects-list");
  const project = document.querySelector(`[project-index="${index}"]`);
  projects.removeChild(project);
};

const deleteProject = (index) => {
  projectLogic.removeProject(index);
  removeProjectElement(index);
  renderProjects();
};

const removerProject = () => {
  const deleteProjectButtons = document.querySelectorAll(".delete-project");
  deleteProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteProject(button.id);
    });
  });
};

const showHideSidebar = () => {
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });    
};

const tasksHeaderGenerator = (title) => {
    const tasksHeader = createElement("div", "tasks-header", "");
    tasksHeader.innerHTML = `
        <div class="tasks-header-title">${title}</div>
    `;
    const tasks = document.querySelector(".tasks");
    tasks.insertBefore(tasksHeader, tasks.childNodes[1]);
};

const eraseTasksHeader = () => {
    const tasksHeader = document.querySelector(".tasks-header");
    const tasks = document.querySelector(".tasks");
    tasks.removeChild(tasksHeader);
};

const inboxPage = () => {
    eraseTasksHeader();
    tasksHeaderGenerator("Inbox");
    renderTasks();
};

const todaysDate = () => {
    const today = dateLogic.defaultDate();
    const todayDate = createElement("div", "today-date", today);
    const tasksHeader = document.querySelector(".tasks-header");
    tasksHeader.appendChild(todayDate);
};

const filterTodayTasks = () => {
    const newArrayList = [];
    todoList.forEach((todo) => {
        if (dateLogic.checkIfDateIsToday(todo.dueDate)) {
            newArrayList.push(todo);
        }
    }
    );
    return newArrayList;
};

const renderTodayTasks = () => {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
    filterTodayTasks().forEach((todo) => {
        taskList.appendChild(taskFactory(todo));
    });
    remover();
};

const todayPage = () => {
    eraseTasksHeader();
    tasksHeaderGenerator("Today");
    todaysDate();
    filterTodayTasks();
    renderTodayTasks();
};

const filterUpcomingTasks = () => {
    const newArrayList = [];
    todoList.forEach((todo) => {
        if (dateLogic.checkIfDateIsFuture(todo.dueDate)) {
            newArrayList.push(todo);
        }
    }
    );
    return newArrayList;
};

const renderUpcomingTasks = () => {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
    filterUpcomingTasks().forEach((todo) => {
        taskList.appendChild(taskFactory(todo));
    });
    remover();
};

const upcomingPage = () => {
    eraseTasksHeader();
    tasksHeaderGenerator("Upcoming");
    renderUpcomingTasks();
};

const getCurrentProject = () => {
    const tasksHeader = document.querySelector(".tasks-header");
    const currentProject = tasksHeader.querySelector(".tasks-header-title").textContent;
    return currentProject;
};

const addTaskToCurrentProject = () => {
    const currentProject = getCurrentProject();
    projectsList.forEach((project) => {
        if (project.title === currentProject) {
            project.customTodos.push(todoList[todoList.length - 1]);
        }
    });
};

const renderTasksOfCurrentProject = (project) => {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";
    project.customTodos.forEach((todo) => {
        taskList.appendChild(taskFactory(todo));
    });
    remover();
};

const projectPage = (project) => {
    eraseTasksHeader();
    tasksHeaderGenerator(project.title);
    renderTasksOfCurrentProject(project);
};

const sidebarClick = () => {
    const inbox = document.querySelector(".Inbox");
    inbox.addEventListener("click", () => {
        inboxPage();
    });
    const today = document.querySelector(".Today");
    today.addEventListener("click", () => {
        todayPage();
    });
    const upcoming = document.querySelector(".Upcoming");
    upcoming.addEventListener("click", () => {
        upcomingPage();
    });
    const projects = document.querySelector(".projects-list");
    projects.addEventListener("click", (event) => {
        const project = projectsList[event.target.closest(".project").getAttribute("project-index")];
        projectPage(project);
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
                <div class="Inbox">
                    <img src="https://img.icons8.com/ios/50/000000/inbox-filled.png"/>
                    <div class="inbox">Inbox</div>
                    <div class="inbox-count">0</div>
                </div>
                <div class="Today">
                    <img src="https://img.icons8.com/ios/50/000000/sun-filled.png"/>
                    <div class="today">Today</div>
                    <div class="today-count">0</div>
                </div>
                <div class="Upcoming">
                    <img src="https://img.icons8.com/ios/50/000000/calendar-filled.png"/>
                    <div class="upcoming">Upcoming</div>
                </div>
            </div>
            <div class="projects">
                <div class="projects-header">
                    <div class="title">Projects</div>
                    <div class="add-project">+</div>
                </div>
                <div class="projects-list"></div>
            </div>
        </div>
        <div class="tasks">
            <div class="tasks-header">
                <div class="tasks-header-title">Inbox</div>
            </div>
            <div class="task-list"></div>
        </div>
    `;
  document.body.appendChild(mainContainer);
  addTaskFormbtn();
  addProjectFormbtn();
    showHideSidebar();
    sidebarClick();
};

document.addEventListener("DOMContentLoaded", initialPageLoad);
