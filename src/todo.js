const todoList = [];

const createNewTodo = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
});

const todoLogic = (() => {
  const todoListGenerator = () => {
    const custList = [];
    return custList;
  };

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  return { addTodo, removeTodo, todoListGenerator };
})();

export { todoList, createNewTodo, todoLogic };
