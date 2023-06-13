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
  customTodos: []
});
const projectLogic = (() => {
  const addProject = project => {
    projectsList.push(project);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveProjectsList(projectsList);
  };
  const removeProject = index => {
    projectsList.splice(index, 1);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveProjectsList(projectsList);
  };
  const removeTaskFromProject = (projectIndex, taskIndex) => {
    projectsList[projectIndex].customTodos.splice(taskIndex, 1);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveProjectsList(projectsList);
  };
  return {
    addProject,
    removeProject,
    removeTaskFromProject
  };
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


const storageAvailable = type => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0;
  }
};
const storageLogic = (() => {
  const saveTodoList = data => {
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
  const saveProjectsList = data => {
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
      savedTodoList.forEach(todo => {
        _todo_js__WEBPACK_IMPORTED_MODULE_0__.todoList.push(todo);
      });
    }
    if (savedProjectsList.length > 0) {
      savedProjectsList.forEach(project => {
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
    loadSavedData
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
  priority
});
const todoLogic = (() => {
  const addTodo = todo => {
    todoList.push(todo);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveTodoList(todoList);
  };
  const removeTodo = index => {
    todoList.splice(index, 1);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.storageLogic.saveTodoList(todoList);
  };
  const countTodos = () => todoList.length;
  return {
    addTodo,
    removeTodo,
    countTodos
  };
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFPLENBQUM7TUFDNUIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUQsT0FBTztJQUNMc0IsWUFBWTtJQUNaSyxjQUFjO0lBQ2RDLFlBQVk7SUFDWjFCLGdCQUFnQjtJQUNoQjZCLGtCQUFrQjtJQUNsQkMsZ0JBQWdCO0lBQ2hCQztFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZ3QztBQUU1QyxNQUFNeEIsUUFBUSxHQUFHLEVBQUU7QUFFbkIsTUFBTTZCLGFBQWEsR0FBR0EsQ0FBQzNDLEtBQUssRUFBRTRDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLE1BQU07RUFDaEU5QyxLQUFLO0VBQ0w0QyxXQUFXO0VBQ1hDLE9BQU87RUFDUEM7QUFDRixDQUFDLENBQUM7QUFFRixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxNQUFNO0VBQ3ZCLE1BQU1DLE9BQU8sR0FBSU4sSUFBSSxJQUFLO0lBQ3hCNUIsUUFBUSxDQUFDUixJQUFJLENBQUNvQyxJQUFJLENBQUM7SUFDbkI3QyxxREFBWSxDQUFDOEIsWUFBWSxDQUFDYixRQUFRLENBQUM7RUFDckMsQ0FBQztFQUVELE1BQU1tQyxVQUFVLEdBQUl4QyxLQUFLLElBQUs7SUFDNUJLLFFBQVEsQ0FBQ0osTUFBTSxDQUFDRCxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCWixxREFBWSxDQUFDOEIsWUFBWSxDQUFDYixRQUFRLENBQUM7RUFDckMsQ0FBQztFQUVELE1BQU1vQyxVQUFVLEdBQUdBLENBQUEsS0FBTXBDLFFBQVEsQ0FBQ1ksTUFBTTtFQUV4QyxPQUFPO0lBQUVzQixPQUFPO0lBQUVDLFVBQVU7SUFBRUM7RUFBVyxDQUFDO0FBQzVDLENBQUMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JhZ2VMb2dpYyB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAodGl0bGUsIGNvbG9yKSA9PiAoe1xuICB0aXRsZSxcbiAgY29sb3IsXG4gIGN1c3RvbVRvZG9zOiBbXSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2tGcm9tUHJvamVjdCA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICAgIHByb2plY3RzTGlzdFtwcm9qZWN0SW5kZXhdLmN1c3RvbVRvZG9zLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHN0b3JhZ2VMb2dpYy5zYXZlUHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0xpc3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RMb2dpYyB9O1xuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBzdG9yYWdlQXZhaWxhYmxlID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBzdG9yYWdlTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBzYXZlVG9kb0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVQcm9qZWN0c0xpc3QgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9qZWN0c0xpc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTGlzdFwiKTtcbiAgICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgY29uc3QgbG9hZFNhdmVkRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRvZG9MaXN0ID0gbG9hZFRvZG9MaXN0KCk7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0c0xpc3QgPSBsb2FkUHJvamVjdHNMaXN0KCk7XG4gICAgaWYgKHNhdmVkVG9kb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2F2ZWRUb2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNhdmVkUHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkUHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzYXZlVG9kb0xpc3QsXG4gICAgcmVtb3ZlVG9kb0xpc3QsXG4gICAgbG9hZFRvZG9MaXN0LFxuICAgIHNhdmVQcm9qZWN0c0xpc3QsXG4gICAgcmVtb3ZlUHJvamVjdHNMaXN0LFxuICAgIGxvYWRQcm9qZWN0c0xpc3QsXG4gICAgbG9hZFNhdmVkRGF0YSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN0b3JhZ2VMb2dpYyB9O1xuIiwiaW1wb3J0IHsgc3RvcmFnZUxvZ2ljIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG59KTtcblxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfTtcblxuICBjb25zdCBjb3VudFRvZG9zID0gKCkgPT4gdG9kb0xpc3QubGVuZ3RoO1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIGNvdW50VG9kb3MgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVOZXdUb2RvLCB0b2RvTG9naWMgfTtcbiJdLCJuYW1lcyI6WyJzdG9yYWdlTG9naWMiLCJwcm9qZWN0c0xpc3QiLCJjcmVhdGVOZXdQcm9qZWN0IiwidGl0bGUiLCJjb2xvciIsImN1c3RvbVRvZG9zIiwicHJvamVjdExvZ2ljIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwic2F2ZVByb2plY3RzTGlzdCIsInJlbW92ZVByb2plY3QiLCJpbmRleCIsInNwbGljZSIsInJlbW92ZVRhc2tGcm9tUHJvamVjdCIsInByb2plY3RJbmRleCIsInRhc2tJbmRleCIsInRvZG9MaXN0Iiwic3RvcmFnZUF2YWlsYWJsZSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsImNvZGUiLCJuYW1lIiwibGVuZ3RoIiwic2F2ZVRvZG9MaXN0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVUb2RvTGlzdCIsImxvYWRUb2RvTGlzdCIsImdldEl0ZW0iLCJwYXJzZSIsInJlbW92ZVByb2plY3RzTGlzdCIsImxvYWRQcm9qZWN0c0xpc3QiLCJsb2FkU2F2ZWREYXRhIiwic2F2ZWRUb2RvTGlzdCIsInNhdmVkUHJvamVjdHNMaXN0IiwiZm9yRWFjaCIsInRvZG8iLCJjcmVhdGVOZXdUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJ0b2RvTG9naWMiLCJhZGRUb2RvIiwicmVtb3ZlVG9kbyIsImNvdW50VG9kb3MiXSwic291cmNlUm9vdCI6IiJ9