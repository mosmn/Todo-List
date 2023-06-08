import "./style.css";

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
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  // when a task is completed, it is moved to the end of the list
  const completeTodo = (index) => {
    const completedTodo = todoList.splice(index, 1);
    todoList.push(completedTodo[0]);
    };

  return { addTodo, removeTodo, completeTodo };
})();

export { todoList, createNewTodo, todoLogic };
