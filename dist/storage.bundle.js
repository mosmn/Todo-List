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

  const countTodos = () => todoList.length;
    

  return { addTodo, removeTodo, countTodos };
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbkI7QUFDUTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBWTtBQUNwQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZvQjs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlTG9naWMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHRpdGxlLCBjb2xvcikgPT4gKHtcbiAgdGl0bGUsXG4gIGNvbG9yLFxuICBjdXN0b21Ub2RvczogW10sXG59KTtcblxuY29uc3QgcHJvamVjdExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0xpc3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RMb2dpYyB9O1xuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzdG9yYWdlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBzYXZlVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVQcm9qZWN0c0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9qZWN0c0xpc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTGlzdFwiKTtcbiAgICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgY29uc3QgbG9hZFNhdmVkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRvZG9MaXN0ID0gbG9hZFRvZG9MaXN0KCk7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0c0xpc3QgPSBsb2FkUHJvamVjdHNMaXN0KCk7XG4gICAgaWYgKHNhdmVkVG9kb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2F2ZWRUb2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNhdmVkUHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkUHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzYXZlVG9kb0xpc3QsXG4gICAgcmVtb3ZlVG9kb0xpc3QsXG4gICAgbG9hZFRvZG9MaXN0LFxuICAgIHNhdmVQcm9qZWN0c0xpc3QsXG4gICAgcmVtb3ZlUHJvamVjdHNMaXN0LFxuICAgIGxvYWRQcm9qZWN0c0xpc3QsXG4gICAgbG9hZFNhdmVkRGF0YSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2VMb2dpYyB9O1xuIiwiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG59KTtcblxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfTtcblxuICBjb25zdCBjb3VudFRvZG9zID0gKCkgPT4gdG9kb0xpc3QubGVuZ3RoO1xuICAgIFxuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIGNvdW50VG9kb3MgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVOZXdUb2RvLCB0b2RvTG9naWMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==