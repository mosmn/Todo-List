"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["storage"],{

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
      localStorage.setItem("todoList", JSON.stringify(data));
    }
  };

  const removeTodoList = () => {
    if (storageAvailable("localStorage")) {
      localStorage.removeItem("todoList");
    }
  };

  const loadTodoList = () => {
    if (storageAvailable("localStorage")) {
      const data = localStorage.getItem("todoList");
      return data ? JSON.parse(data) : [];
    }
    return [];
  };

  const saveProjectsList = (data) => {
    if (storageAvailable("localStorage")) {
      localStorage.setItem("projectsList", JSON.stringify(data));
    }
  };

  const removeProjectsList = () => {
    if (storageAvailable("localStorage")) {
      localStorage.removeItem("projectsList");
    }
  };

  const loadProjectsList = () => {
    if (storageAvailable("localStorage")) {
      const data = localStorage.getItem("projectsList");
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbkI7QUFDUTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBWTtBQUNwQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZvQjs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICh0aXRsZSwgY29sb3IpID0+ICh7XG4gIHRpdGxlLFxuICBjb2xvcixcbiAgY3VzdG9tVG9kb3M6IFtdLFxufSk7XG5cbmNvbnN0IHByb2plY3RMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0TG9naWMgfTtcbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcmFnZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3Qgc2F2ZVRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvZG9MaXN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdHNMaXN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIik7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRTYXZlZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvTGlzdCA9IGxvYWRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHNMaXN0ID0gbG9hZFByb2plY3RzTGlzdCgpO1xuICAgIGlmIChzYXZlZFRvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzYXZlZFByb2plY3RzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzYXZlZFByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG9MaXN0LFxuICAgIHJlbW92ZVRvZG9MaXN0LFxuICAgIGxvYWRUb2RvTGlzdCxcbiAgICBzYXZlUHJvamVjdHNMaXN0LFxuICAgIHJlbW92ZVByb2plY3RzTGlzdCxcbiAgICBsb2FkUHJvamVjdHNMaXN0LFxuICAgIGxvYWRTYXZlZERhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTG9naWMgfTtcbiIsImltcG9ydCB7IHN0b3JhZ2VMb2dpYyB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgdG9kb0xpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3VG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxufSk7XG5cbmNvbnN0IHRvZG9Mb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9kb0xpc3QsIGNyZWF0ZU5ld1RvZG8sIHRvZG9Mb2dpYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9