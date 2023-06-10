# Todo List App

The Todo List app is a web application that allows users to create and manage their tasks in an organized manner. Users can create projects, add tasks to those projects, set due dates and priorities for tasks, mark tasks as complete, and delete tasks. The app provides a user-friendly interface for managing tasks and projects effectively.

## Live Demo

Check out the live demo [here](https://mosmn.github.ioTodo-List/).

## Screenshots

### Inbox

### Today

### Upcoming

### Projects

## Features

- **Task Creation**: Users can create tasks by providing a title, description, due date, and priority.
- **Project Management**: Users can create multiple projects to organize their tasks. Each project can have its own set of tasks.
- **Task Display**: Users can view all tasks within a project. The tasks are displayed with their title, due date, and priority.
- **Task Details**: Users can expand a task to view and edit its details, including the description and due date.
- **Task Completion**: Users can mark tasks as complete, indicating that they have been finished.
- **Task Deletion**: Users can delete tasks from the list.
- **Data Persistence**: The app uses the Web Storage API (localStorage) to store the projects and tasks. This allows the data to persist even if the user refreshes the page.

## Tech Stack

- JavaScript
- CSS
- date-fns
- Web Storage API

## Approach

The Todo List app is structured using modules to separate the application logic from the DOM-related functionality. Here's an overview of the key modules and their responsibilities:

- **Todo Logic**: Handles the creation, deletion, completion, and storage of individual tasks. It provides functions for adding tasks, deleting tasks, completing tasks, and retrieving the task list.
- **Project Logic**: Manages the creation, deletion, and storage of projects. It offers functions for adding projects, deleting projects, and retrieving the project list.
- **DOM Handler**: Interacts with the DOM to display projects, tasks, and handle user interactions. It updates the UI based on the data from Todo Logic and Project Logic modules.
- **LocalStorage**: Handles data persistence using the Web Storage API (localStorage). It saves and retrieves projects and tasks from the local storage to maintain data across page refreshes.

The app's user interface is designed to provide a clear overview of projects and their associated tasks. Users can interact with the app to create, edit, and delete tasks, as well as manage projects. The UI is responsive and intuitive, ensuring a seamless user experience.

## Challenges

During the development of the Todo List app, several challenges were encountered, including:

- **Data Management**: Ensuring proper synchronization and consistency between the Todo Logic, Project Logic, and DOM Handler modules was crucial. Managing data flow and handling updates across modules required careful attention.
- **Dynamic UI Updates**: Implementing dynamic rendering and updates of projects and tasks on the UI required efficient DOM manipulation and event handling. Coordinating the UI changes with user interactions and data updates posed a challenge.
- **Data Persistence**: Adding data persistence using the Web Storage API involved handling JSON data serialization, deserialization, and dealing with potential data retrieval errors. Ensuring a smooth user experience when loading and saving data was a priority.

Despite these challenges, the Todo List app was successfully implemented, providing users with a powerful tool to manage their tasks effectively.
