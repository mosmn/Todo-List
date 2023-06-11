import { todoList } from "./todo.js";
import { projectsList } from "./projects.js";

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === "QuotaExceededError" ||
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
};

const storageLogic = (() => {
  const saveTodoList = (data) => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(todoList, JSON.stringify(data));
    }
  };

  const removeTodoList = () => {
    if (storageAvailable("localStorage")) {
        localStorage.removeItem(todoList);
    }
    };

  const loadTodoList = () => {
    if (storageAvailable("localStorage")) {
      const data = localStorage.getItem(todoList);
      return data ? JSON.parse(data) : [];
    }
    return [];
  };

    const saveProjectsList = (data) => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem(projectsList, JSON.stringify(data));
        }
    };

    const removeProjectsList = () => {
        if (storageAvailable("localStorage")) {
            localStorage.removeItem(projectsList);
        }
    };

    const loadProjectsList = () => {
        if (storageAvailable("localStorage")) {
            const data = localStorage.getItem(projectsList);
            return data ? JSON.parse(data) : [];
        }
        return [];
    };

  return {
    saveTodoList,
    removeTodoList,
    loadTodoList,
        saveProjectsList,
        removeProjectsList,
        loadProjectsList
  };
})();

export { storageLogic };
