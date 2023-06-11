"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   projectLogic: () => (/* binding */ projectLogic),
/* harmony export */   projectsList: () => (/* binding */ projectsList)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


const projectsList = [];

const createNewProject = (title, color) => ({
  title,
  color,
  customTodos: [],
});

const projectLogic = (() => {
  const addProject = (project) => {
    projectsList.push(project);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveProjectsList(projectsList);
    console.log(_storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.loadProjectsList());
  };

  const removeProject = (index) => {
    projectsList.splice(index, 1);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveProjectsList(projectsList);
  };

  return { addProject, removeProject };
})();




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageLogic: () => (/* binding */ storageLogic)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");



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
      localStorage.setItem(_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoList, JSON.stringify(data));
    }
  };

  const removeTodoList = () => {
    if (storageAvailable("localStorage")) {
      localStorage.removeItem(_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoList);
    }
  };

  const loadTodoList = () => {
    if (storageAvailable("localStorage")) {
      const data = localStorage.getItem(_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoList);
      return data ? JSON.parse(data) : [];
    }
    return [];
  };

  const saveProjectsList = (data) => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsList, JSON.stringify(data));
    }
  };

  const removeProjectsList = () => {
    if (storageAvailable("localStorage")) {
      localStorage.removeItem(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsList);
    }
  };

  const loadProjectsList = () => {
    if (storageAvailable("localStorage")) {
      const data = localStorage.getItem(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsList);
      return data ? JSON.parse(data) : [];
    }
    return [];
  };

  const loadSavedData = () => {
    const savedTodoList = loadTodoList();
    const savedProjectsList = loadProjectsList();
    if (savedTodoList.length > 0) {
      savedTodoList.forEach((todo) => {
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.todoList.push(todo);
      });
    }
    if (savedProjectsList.length > 0) {
      savedProjectsList.forEach((project) => {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsList.push(project);
      });
    }
  };

  return {
    saveTodoList,
    removeTodoList,
    loadTodoList,
    saveProjectsList,
    removeProjectsList,
    loadProjectsList,
    loadSavedData,
  };
})();





/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo),
/* harmony export */   todoList: () => (/* binding */ todoList),
/* harmony export */   todoLogic: () => (/* binding */ todoLogic)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


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
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveTodoList(todoList);
    console.log(_storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.loadTodoList());
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveTodoList(todoList);
  };

  return { addTodo, removeTodo };
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEIsZ0JBQWdCLHFEQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUV1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm5CO0FBQ1E7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQVE7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLDhDQUFRO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFZO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixzREFBWTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0Msc0RBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQVE7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVk7QUFDcEIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRm9COztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLGdCQUFnQixxREFBWTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICh0aXRsZSwgY29sb3IpID0+ICh7XG4gIHRpdGxlLFxuICBjb2xvcixcbiAgY3VzdG9tVG9kb3M6IFtdLFxufSk7XG5cbmNvbnN0IHByb2plY3RMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gICAgY29uc29sZS5sb2coc3RvcmFnZUxvZ2ljLmxvYWRQcm9qZWN0c0xpc3QoKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0TG9naWMgfTtcbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcmFnZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3Qgc2F2ZVRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0xpc3QsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9MaXN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kb0xpc3QpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdHNMaXN0LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdHNMaXN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RzTGlzdCk7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRTYXZlZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvTGlzdCA9IGxvYWRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHNMaXN0ID0gbG9hZFByb2plY3RzTGlzdCgpO1xuICAgIGlmIChzYXZlZFRvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzYXZlZFByb2plY3RzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzYXZlZFByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG9MaXN0LFxuICAgIHJlbW92ZVRvZG9MaXN0LFxuICAgIGxvYWRUb2RvTGlzdCxcbiAgICBzYXZlUHJvamVjdHNMaXN0LFxuICAgIHJlbW92ZVByb2plY3RzTGlzdCxcbiAgICBsb2FkUHJvamVjdHNMaXN0LFxuICAgIGxvYWRTYXZlZERhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTG9naWMgfTtcblxuIiwiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG59KTtcblxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlTG9naWMubG9hZFRvZG9MaXN0KCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVOZXdUb2RvLCB0b2RvTG9naWMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==