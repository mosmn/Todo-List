import { storageLogic } from "./storage.js";

const todoList = [];

const createNewTodo = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
});

const todoLogic = (() => {
  const addTodo = (todo) => {
    todoList.push(todo);
    storageLogic.saveTodoList(todoList);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
    storageLogic.saveTodoList(todoList);
  };

  return { addTodo, removeTodo };
})();

export { todoList, createNewTodo, todoLogic };
