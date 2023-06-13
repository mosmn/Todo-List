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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0QsT0FBTyxDQUFDO01BQzVCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUVELE9BQU87SUFDTHNCLFlBQVk7SUFDWkssY0FBYztJQUNkQyxZQUFZO0lBQ1oxQixnQkFBZ0I7SUFDaEI2QixrQkFBa0I7SUFDbEJDLGdCQUFnQjtJQUNoQkM7RUFDRixDQUFDO0FBQ0gsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGd0M7QUFFNUMsTUFBTXhCLFFBQVEsR0FBRyxFQUFFO0FBRW5CLE1BQU02QixhQUFhLEdBQUdBLENBQUMzQyxLQUFLLEVBQUU0QyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxNQUFNO0VBQ2hFOUMsS0FBSztFQUNMNEMsV0FBVztFQUNYQyxPQUFPO0VBQ1BDO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsTUFBTUMsU0FBUyxHQUFHLENBQUMsTUFBTTtFQUN2QixNQUFNQyxPQUFPLEdBQUlOLElBQUksSUFBSztJQUN4QjVCLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDb0MsSUFBSSxDQUFDO0lBQ25CN0MscURBQVksQ0FBQzhCLFlBQVksQ0FBQ2IsUUFBUSxDQUFDO0VBQ3JDLENBQUM7RUFFRCxNQUFNbUMsVUFBVSxHQUFJeEMsS0FBSyxJQUFLO0lBQzVCSyxRQUFRLENBQUNKLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QloscURBQVksQ0FBQzhCLFlBQVksQ0FBQ2IsUUFBUSxDQUFDO0VBQ3JDLENBQUM7RUFFRCxNQUFNb0MsVUFBVSxHQUFHQSxDQUFBLEtBQU1wQyxRQUFRLENBQUNZLE1BQU07RUFFeEMsT0FBTztJQUFFc0IsT0FBTztJQUFFQyxVQUFVO0lBQUVDO0VBQVcsQ0FBQztBQUM1QyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlTG9naWMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHRpdGxlLCBjb2xvcikgPT4gKHtcbiAgdGl0bGUsXG4gIGNvbG9yLFxuICBjdXN0b21Ub2RvczogW10sXG59KTtcblxuY29uc3QgcHJvamVjdExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpID0+IHtcbiAgICBwcm9qZWN0c0xpc3RbcHJvamVjdEluZGV4XS5jdXN0b21Ub2Rvcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICBzdG9yYWdlTG9naWMuc2F2ZVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIHJlbW92ZVRhc2tGcm9tUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0TG9naWMgfTtcbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcmFnZUxvZ2ljID0gKCgpID0+IHtcbiAgY29uc3Qgc2F2ZVRvZG9MaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRvZG9MaXN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNMaXN0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdHNMaXN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIik7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRTYXZlZERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvTGlzdCA9IGxvYWRUb2RvTGlzdCgpO1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHNMaXN0ID0gbG9hZFByb2plY3RzTGlzdCgpO1xuICAgIGlmIChzYXZlZFRvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNhdmVkVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzYXZlZFByb2plY3RzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzYXZlZFByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG9MaXN0LFxuICAgIHJlbW92ZVRvZG9MaXN0LFxuICAgIGxvYWRUb2RvTGlzdCxcbiAgICBzYXZlUHJvamVjdHNMaXN0LFxuICAgIHJlbW92ZVByb2plY3RzTGlzdCxcbiAgICBsb2FkUHJvamVjdHNMaXN0LFxuICAgIGxvYWRTYXZlZERhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTG9naWMgfTtcbiIsImltcG9ydCB7IHN0b3JhZ2VMb2dpYyB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuY29uc3QgdG9kb0xpc3QgPSBbXTtcblxuY29uc3QgY3JlYXRlTmV3VG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxufSk7XG5cbmNvbnN0IHRvZG9Mb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc3RvcmFnZUxvZ2ljLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH07XG5cbiAgY29uc3QgY291bnRUb2RvcyA9ICgpID0+IHRvZG9MaXN0Lmxlbmd0aDtcblxuICByZXR1cm4geyBhZGRUb2RvLCByZW1vdmVUb2RvLCBjb3VudFRvZG9zIH07XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvTGlzdCwgY3JlYXRlTmV3VG9kbywgdG9kb0xvZ2ljIH07XG4iXSwibmFtZXMiOlsic3RvcmFnZUxvZ2ljIiwicHJvamVjdHNMaXN0IiwiY3JlYXRlTmV3UHJvamVjdCIsInRpdGxlIiwiY29sb3IiLCJjdXN0b21Ub2RvcyIsInByb2plY3RMb2dpYyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicHVzaCIsInNhdmVQcm9qZWN0c0xpc3QiLCJyZW1vdmVQcm9qZWN0IiwiaW5kZXgiLCJzcGxpY2UiLCJyZW1vdmVUYXNrRnJvbVByb2plY3QiLCJwcm9qZWN0SW5kZXgiLCJ0YXNrSW5kZXgiLCJ0b2RvTGlzdCIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwic3RvcmFnZSIsIndpbmRvdyIsIngiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImUiLCJET01FeGNlcHRpb24iLCJjb2RlIiwibmFtZSIsImxlbmd0aCIsInNhdmVUb2RvTGlzdCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlVG9kb0xpc3QiLCJsb2FkVG9kb0xpc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJyZW1vdmVQcm9qZWN0c0xpc3QiLCJsb2FkUHJvamVjdHNMaXN0IiwibG9hZFNhdmVkRGF0YSIsInNhdmVkVG9kb0xpc3QiLCJzYXZlZFByb2plY3RzTGlzdCIsImZvckVhY2giLCJ0b2RvIiwiY3JlYXRlTmV3VG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidG9kb0xvZ2ljIiwiYWRkVG9kbyIsInJlbW92ZVRvZG8iLCJjb3VudFRvZG9zIl0sInNvdXJjZVJvb3QiOiIifQ==