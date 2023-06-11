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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEIsZ0JBQWdCLHFEQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUV1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qm5CO0FBQ1E7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFZO0FBQ3BCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZvQjs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQixnQkFBZ0IscURBQVk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JhZ2VMb2dpYyB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAodGl0bGUsIGNvbG9yKSA9PiAoe1xuICB0aXRsZSxcbiAgY29sb3IsXG4gIGN1c3RvbVRvZG9zOiBbXSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2VMb2dpYy5sb2FkUHJvamVjdHNMaXN0KCkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3RzTGlzdCwgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdExvZ2ljIH07XG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCB7IHByb2plY3RzTGlzdCB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3JhZ2VMb2dpYyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZVRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2RvTGlzdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBsb2FkVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBzYXZlUHJvamVjdHNMaXN0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdHNMaXN0XCIpO1xuICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNMaXN0XCIpO1xuICAgICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICAgIH07XG5cbiAgY29uc3QgbG9hZFNhdmVkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRvZG9MaXN0ID0gbG9hZFRvZG9MaXN0KCk7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0c0xpc3QgPSBsb2FkUHJvamVjdHNMaXN0KCk7XG4gICAgaWYgKHNhdmVkVG9kb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2F2ZWRUb2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNhdmVkUHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkUHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzYXZlVG9kb0xpc3QsXG4gICAgcmVtb3ZlVG9kb0xpc3QsXG4gICAgbG9hZFRvZG9MaXN0LFxuICAgIHNhdmVQcm9qZWN0c0xpc3QsXG4gICAgcmVtb3ZlUHJvamVjdHNMaXN0LFxuICAgIGxvYWRQcm9qZWN0c0xpc3QsXG4gICAgbG9hZFNhdmVkRGF0YSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2VMb2dpYyB9O1xuXG4iLCJpbXBvcnQgeyBzdG9yYWdlTG9naWMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbn0pO1xuXG5jb25zdCB0b2RvTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIGNvbnNvbGUubG9nKHN0b3JhZ2VMb2dpYy5sb2FkVG9kb0xpc3QoKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkVG9kbywgcmVtb3ZlVG9kbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9kb0xpc3QsIGNyZWF0ZU5ld1RvZG8sIHRvZG9Mb2dpYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9