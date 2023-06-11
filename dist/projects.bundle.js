"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["projects"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLGdCQUFnQixxREFBWTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJuQjtBQUNROztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBWTtBQUNwQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGb0I7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEIsZ0JBQWdCLHFEQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlTG9naWMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHRpdGxlLCBjb2xvcikgPT4gKHtcbiAgdGl0bGUsXG4gIGNvbG9yLFxuICBjdXN0b21Ub2RvczogW10sXG59KTtcblxuY29uc3QgcHJvamVjdExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlTG9naWMubG9hZFByb2plY3RzTGlzdCgpKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0xpc3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RMb2dpYyB9O1xuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzdG9yYWdlTG9naWMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVUb2RvTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb2RvTGlzdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcblxuXG4gICAgY29uc3Qgc2F2ZVByb2plY3RzTGlzdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2plY3RzTGlzdFwiKTtcbiAgICB9XG4gICAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTGlzdFwiKTtcbiAgICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG4gIGNvbnN0IGxvYWRTYXZlZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvTGlzdCA9IGxvYWRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHNMaXN0ID0gbG9hZFByb2plY3RzTGlzdCgpO1xuICAgIGlmIChzYXZlZFRvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzYXZlZFByb2plY3RzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzYXZlZFByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG9MaXN0LFxuICAgIHJlbW92ZVRvZG9MaXN0LFxuICAgIGxvYWRUb2RvTGlzdCxcbiAgICBzYXZlUHJvamVjdHNMaXN0LFxuICAgIHJlbW92ZVByb2plY3RzTGlzdCxcbiAgICBsb2FkUHJvamVjdHNMaXN0LFxuICAgIGxvYWRTYXZlZERhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTG9naWMgfTtcblxuIiwiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG59KTtcblxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICBjb25zb2xlLmxvZyhzdG9yYWdlTG9naWMubG9hZFRvZG9MaXN0KCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVOZXdUb2RvLCB0b2RvTG9naWMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==