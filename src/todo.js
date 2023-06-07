import './style.css';

const todoList = [];

const createNewTodo = (title, description, dueDate, priority) => ({title, description, dueDate, priority})

const addTodo = (todo) => {
    todoList.push(todo);
}

export { todoList, createNewTodo, addTodo };