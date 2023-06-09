"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #ffffff;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.6em;
  margin: 0;
  padding: 0px;
  height: 100vh;
}

.main-container {
  display: grid;
  grid-template-columns: min(450px, 30%) 1fr;
  grid-template-rows: 45px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  height: 100%;
  width: 100%;
}

.header-bar {
  grid-area: header;
  background-color: #d29797;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.menu-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 35px;
}

.menu-button img {
  width: 25px;
  height: 30px;
  fill: #ffffff;
}

.menu-button:hover {
  background-color: #fafafa;
  border-radius: 15%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.logo h1 {
  margin: 0;
  color: #ffffff;
  font-size: 20px;
}

.user img {
  width: 35px;
  height: 35px;
  margin: 9px 10px 0px;
  border: 1px solid #ffffff;
  border-radius: 50%;
}

.sidebar {
  grid-area: sidebar;
  background-color: #fafafa;
  padding: 20px;
  height: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slideIn 0.3s ease;
}

.sidebar.collapsed {
    width: 0;
    padding: 0;
    overflow: hidden;
    max-width: 0;
    animation: slideOut 0.3s ease;
  }

  .sidebar.collapsed + .tasks{
    grid-column: 1 / span 2;
}

.sidebar .default {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  color: #ababab;
}

.sidebar .default img {
  width: 30px;
  height: 30px;
}

.Inbox,
.Today,
.Upcoming {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

.inbox-count,
.today-count {
  margin-left: auto;
}

.Inbox:hover,
.Today:hover,
.Upcoming:hover,
.project:hover {
  background-color: #d29797;
  color: #ffffff;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.projects-header .title {
  font-size: 20px;
  font-weight: 900;
  color: #6c6c6c;
}

.add-project {
  font-size: 35px;
  color: #6c6c6c;
  cursor: pointer;
}

.add-project:hover {
  color: #d29797;
}

.tasks {
  grid-area: main;
  background-color: #ffffff;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.task-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  padding: 20px;
  width: 80%;
}

.task-form input,
.task-form select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-form .task-title,
.task-form .task-description {
  font-size: 35px;
  font-weight: 500;
  border: none;
}

.task-form .task-title:focus,
.task-form .task-description:focus {
  outline: none;
}

.task-form .task-title::placeholder,
.task-form .task-description::placeholder {
  color: #d2d2d2;
}

.task-form .task-description {
  font-size: 16px;
  font-weight: 300;
}

.task-form input[type="submit"],
.task-form button,
.project-form input[type="submit"],
.project-form button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-form input[type="submit"],
.project-form input[type="submit"] {
  background-color: #d29797;
  color: #ffffff;
}

.task-form button,
.project-form button {
  background-color: #fafafa;
  color: #000000;
}

.task-form input[type="submit"]:hover,
.project-form input[type="submit"]:hover {
  background-color: #b76f6f;
}

.task-form button:hover,
.project-form button:hover {
  background-color: #e6e6e6;
}

.task-form input[type="submit"]:focus,
.task-form button:focus,
.project-form input[type="submit"]:focus,
.project-form button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #d29797;
}

.task-list {
  margin-top: 20px;
  width: 80%;
}

.task {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-header .left {
  display: flex;
  align-items: center;
}

.task-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 900;
}

.task-body p {
  margin: 5px 0;
}

.task-header .complete-task {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 3px solid #b76f6f;
  border-radius: 50%;
  cursor: pointer;
}

.task-header .complete-task .checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #b76f6f;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.task-header .complete-task:hover .checkmark {
  margin-top: 2px;
  opacity: 1;
}

.task-header .complete-task.checked .checkmark {
  opacity: 1;
}

.task-header img.delete-task {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.task-header img.delete-task:hover {
  animation: shake 0.3s;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.add-taskbtn {
  display: flex;
  gap: 15px;
  width: 80%;
  justify-content: flex-start;
  cursor: pointer;
}

.add-taskbtn .add-symbol {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 35px;
  height: 35px;
  color: #d29797;
  border-radius: 50%;
}

.add-taskbtn .add-task {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #cccccc;
}

.add-taskbtn:hover {
  .add-symbol {
    background-color: #d29797;
    color: #ffffff;
  }
  .add-task {
    color: #b76f6f;
  }
}

.project-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 400px;
  width: 450px;
  border-radius: 20px;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
}

.project-form * {
  width: 100%;
}

.project-form h2 {
  padding: 5px;
  margin-right: auto;
  border-bottom: 1px solid #cccccc;
}

.project-form label {
  padding: 5px;
  margin-right: auto;
  margin-bottom: -20px;
}

.project-form input,
.project-form select {
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.project-form .project-title {
  border: none;
  border-bottom: 1px solid #cccccc;
  color: #000;
  font-size: 25px;
}

.project-form select {
  appearance: none;
  background-color: #fafafa;
  color: #000000;
}

.project-form select option {
  padding: 4px;
  background-color: #ffffff;
}

.project-form select:hover {
  border-color: #b76f6f;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.project {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  animation: slideIn 0.3s ease;
}

.project .color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.project-title {
  margin-right: auto;
  color: #868686;
}

.delete-project {
  font-size: 25px;
}

.delete-project:hover {
  animation: rotate 0.3s ease;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@media screen and (max-width: 600px) {
    .main-container {
      grid-template-columns: 100%;
      grid-template-rows: 45px auto;
      grid-template-areas:
        "header"
        "main";
    }

    .sidebar {
        position: absolute;
        left: 0;
        top: 45px;
        bottom: 0;
        max-width: 100%;
        width: 100%;
        padding: 20px;
        height: 100%;
        background-color: #fafafa;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    
      .sidebar.collapsed {
        display: none; /* Hide the sidebar when collapsed */
      }
    
      .tasks-container {
        grid-area: main;
        background-color: #ffffff;
        padding: 20px;
        height: 100%;
        overflow-y: auto;
        transition: margin-left 0.3s ease;
        width: 100%; /* Set width to 100% */
      }
    
      .sidebar.collapsed ~ .tasks-container {
        margin-left: 0;
      }

    .tasks {
      padding: 0;
    }

    .task-form {
      width: 80%;
    }

    .task-list {
      width: 100%;
    }

    .task {
      width: 100%;
    }

    .add-taskbtn {
      width: 100%;
    }

    .add-taskbtn .add-symbol {
      width: 30px;
      height: 30px;
      font-size: 40px;
    }

    .add-taskbtn .add-task {
      font-size: 16px;
    }

    .project-form {
      width: 60%;
      height: 40%;
      transform: translate(-50%, -50%);
    }

    .project-form h2 {
      font-size: 20px;
    }

    .project-form label {
      font-size: 16px;
    }

    .project-form .project-title {
      font-size: 20px;
    }

    .project-form select {
      font-size: 16px;
    }

    .project-form select option {
      font-size: 16px;
    }

    .projects-list {
      width: 100%;
    }

    .project {
      width: 100%;
    }

    .project-title {
      font-size: 16px;
    }

    .delete-project {
      font-size: 20px;
    }

    .delete-project:hover {
      animation: none;
    }

    .menu-button {
      width: 30px;
      height: 25px;
    }

    .menu-button img {
      width: 20px;
      height: 25px;
    }

    .logo h1 {
      font-size: 16px;
    }

    .user img {
      width: 30px;
      height: 30px;
    }

    .sidebar .default img {
      width: 25px;
      height: 25px;
    }
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: #ffffff;\n  color: #000000;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 1.6em;\n  margin: 0;\n  padding: 0px;\n  height: 100vh;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: min(450px, 30%) 1fr;\n  grid-template-rows: 45px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\";\n  height: 100%;\n  width: 100%;\n}\n\n.header-bar {\n  grid-area: header;\n  background-color: #d29797;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.menu-button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  width: 40px;\n  height: 35px;\n}\n\n.menu-button img {\n  width: 25px;\n  height: 30px;\n  fill: #ffffff;\n}\n\n.menu-button:hover {\n  background-color: #fafafa;\n  border-radius: 15%;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n.logo img {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n\n.logo h1 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.user img {\n  width: 35px;\n  height: 35px;\n  margin: 9px 10px 0px;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: #fafafa;\n  padding: 20px;\n  height: 100%;\n  max-width: 450px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: slideIn 0.3s ease;\n}\n\n.sidebar.collapsed {\n    width: 0;\n    padding: 0;\n    overflow: hidden;\n    max-width: 0;\n    animation: slideOut 0.3s ease;\n  }\n\n  .sidebar.collapsed + .tasks{\n    grid-column: 1 / span 2;\n}\n\n.sidebar .default {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 20px;\n  color: #ababab;\n}\n\n.sidebar .default img {\n  width: 30px;\n  height: 30px;\n}\n\n.Inbox,\n.Today,\n.Upcoming {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  width: 100%;\n}\n\n.inbox-count,\n.today-count {\n  margin-left: auto;\n}\n\n.Inbox:hover,\n.Today:hover,\n.Upcoming:hover,\n.project:hover {\n  background-color: #d29797;\n  color: #ffffff;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n\n.projects-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.projects-header .title {\n  font-size: 20px;\n  font-weight: 900;\n  color: #6c6c6c;\n}\n\n.add-project {\n  font-size: 35px;\n  color: #6c6c6c;\n  cursor: pointer;\n}\n\n.add-project:hover {\n  color: #d29797;\n}\n\n.tasks {\n  grid-area: main;\n  background-color: #ffffff;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid #d2d2d2;\n  border-radius: 20px;\n  padding: 20px;\n  width: 80%;\n}\n\n.task-form input,\n.task-form select {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.task-form .task-title,\n.task-form .task-description {\n  font-size: 35px;\n  font-weight: 500;\n  border: none;\n}\n\n.task-form .task-title:focus,\n.task-form .task-description:focus {\n  outline: none;\n}\n\n.task-form .task-title::placeholder,\n.task-form .task-description::placeholder {\n  color: #d2d2d2;\n}\n\n.task-form .task-description {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.task-form input[type=\"submit\"],\n.task-form button,\n.project-form input[type=\"submit\"],\n.project-form button {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.task-form input[type=\"submit\"],\n.project-form input[type=\"submit\"] {\n  background-color: #d29797;\n  color: #ffffff;\n}\n\n.task-form button,\n.project-form button {\n  background-color: #fafafa;\n  color: #000000;\n}\n\n.task-form input[type=\"submit\"]:hover,\n.project-form input[type=\"submit\"]:hover {\n  background-color: #b76f6f;\n}\n\n.task-form button:hover,\n.project-form button:hover {\n  background-color: #e6e6e6;\n}\n\n.task-form input[type=\"submit\"]:focus,\n.task-form button:focus,\n.project-form input[type=\"submit\"]:focus,\n.project-form button:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #d29797;\n}\n\n.task-list {\n  margin-top: 20px;\n  width: 80%;\n}\n\n.task {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: 1px solid #cccccc;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-header .left {\n  display: flex;\n  align-items: center;\n}\n\n.task-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 900;\n}\n\n.task-body p {\n  margin: 5px 0;\n}\n\n.task-header .complete-task {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border: 3px solid #b76f6f;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.task-header .complete-task .checkmark {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: #b76f6f;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.task-header .complete-task:hover .checkmark {\n  margin-top: 2px;\n  opacity: 1;\n}\n\n.task-header .complete-task.checked .checkmark {\n  opacity: 1;\n}\n\n.task-header img.delete-task {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.3s ease;\n}\n\n.task-header img.delete-task:hover {\n  animation: shake 0.3s;\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(0deg);\n  }\n  20% {\n    transform: rotate(10deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  60% {\n    transform: rotate(10deg);\n  }\n  80% {\n    transform: rotate(-10deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.add-taskbtn {\n  display: flex;\n  gap: 15px;\n  width: 80%;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n\n.add-taskbtn .add-symbol {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  width: 35px;\n  height: 35px;\n  color: #d29797;\n  border-radius: 50%;\n}\n\n.add-taskbtn .add-task {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  color: #cccccc;\n}\n\n.add-taskbtn:hover {\n  .add-symbol {\n    background-color: #d29797;\n    color: #ffffff;\n  }\n  .add-task {\n    color: #b76f6f;\n  }\n}\n\n.project-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%);\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  height: 400px;\n  width: 450px;\n  border-radius: 20px;\n  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);\n}\n\n.project-form * {\n  width: 100%;\n}\n\n.project-form h2 {\n  padding: 5px;\n  margin-right: auto;\n  border-bottom: 1px solid #cccccc;\n}\n\n.project-form label {\n  padding: 5px;\n  margin-right: auto;\n  margin-bottom: -20px;\n}\n\n.project-form input,\n.project-form select {\n  height: 40px;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n}\n\n.project-form .project-title {\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  color: #000;\n  font-size: 25px;\n}\n\n.project-form select {\n  appearance: none;\n  background-color: #fafafa;\n  color: #000000;\n}\n\n.project-form select option {\n  padding: 4px;\n  background-color: #ffffff;\n}\n\n.project-form select:hover {\n  border-color: #b76f6f;\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  width: 100%;\n  animation: slideIn 0.3s ease;\n}\n\n.project .color {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\n.project-title {\n  margin-right: auto;\n  color: #868686;\n}\n\n.delete-project {\n  font-size: 25px;\n}\n\n.delete-project:hover {\n  animation: rotate 0.3s ease;\n}\n\n@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideOut {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n}\n\n@media screen and (max-width: 600px) {\n    .main-container {\n      grid-template-columns: 100%;\n      grid-template-rows: 45px auto;\n      grid-template-areas:\n        \"header\"\n        \"main\";\n    }\n\n    .sidebar {\n        position: absolute;\n        left: 0;\n        top: 45px;\n        bottom: 0;\n        max-width: 100%;\n        width: 100%;\n        padding: 20px;\n        height: 100%;\n        background-color: #fafafa;\n        display: flex;\n        flex-direction: column;\n        gap: 20px;\n      }\n    \n      .sidebar.collapsed {\n        display: none; /* Hide the sidebar when collapsed */\n      }\n    \n      .tasks-container {\n        grid-area: main;\n        background-color: #ffffff;\n        padding: 20px;\n        height: 100%;\n        overflow-y: auto;\n        transition: margin-left 0.3s ease;\n        width: 100%; /* Set width to 100% */\n      }\n    \n      .sidebar.collapsed ~ .tasks-container {\n        margin-left: 0;\n      }\n\n    .tasks {\n      padding: 0;\n    }\n\n    .task-form {\n      width: 80%;\n    }\n\n    .task-list {\n      width: 100%;\n    }\n\n    .task {\n      width: 100%;\n    }\n\n    .add-taskbtn {\n      width: 100%;\n    }\n\n    .add-taskbtn .add-symbol {\n      width: 30px;\n      height: 30px;\n      font-size: 40px;\n    }\n\n    .add-taskbtn .add-task {\n      font-size: 16px;\n    }\n\n    .project-form {\n      width: 60%;\n      height: 40%;\n      transform: translate(-50%, -50%);\n    }\n\n    .project-form h2 {\n      font-size: 20px;\n    }\n\n    .project-form label {\n      font-size: 16px;\n    }\n\n    .project-form .project-title {\n      font-size: 20px;\n    }\n\n    .project-form select {\n      font-size: 16px;\n    }\n\n    .project-form select option {\n      font-size: 16px;\n    }\n\n    .projects-list {\n      width: 100%;\n    }\n\n    .project {\n      width: 100%;\n    }\n\n    .project-title {\n      font-size: 16px;\n    }\n\n    .delete-project {\n      font-size: 20px;\n    }\n\n    .delete-project:hover {\n      animation: none;\n    }\n\n    .menu-button {\n      width: 30px;\n      height: 25px;\n    }\n\n    .menu-button img {\n      width: 20px;\n      height: 25px;\n    }\n\n    .logo h1 {\n      font-size: 16px;\n    }\n\n    .user img {\n      width: 30px;\n      height: 30px;\n    }\n\n    .sidebar .default img {\n      width: 25px;\n      height: 25px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const todoList = [];

const createNewTodo = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
});

const todoLogic = (() => {
  const todoListGenerator = () => {
    const todoList = [];
    return todoList;
  };

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  return { addTodo, removeTodo, todoListGenerator };
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLHNCQUFzQixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsdUJBQXVCLE9B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LENBQUM7O0FBRTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluKDQ1MHB4LCAzMCUpIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgIFwic2lkZWJhciBtYWluXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItYmFyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1lbnUtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZpbGw6ICNmZmZmZmY7XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sb2dvIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udXNlciBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDlweCAxMHB4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2lkZWJhciB7XG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG59XG5cbi5zaWRlYmFyLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMDtcbiAgICBhbmltYXRpb246IHNsaWRlT3V0IDAuM3MgZWFzZTtcbiAgfVxuXG4gIC5zaWRlYmFyLmNvbGxhcHNlZCArIC50YXNrc3tcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbn1cblxuLnNpZGViYXIgLmRlZmF1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2FiYWJhYjtcbn1cblxuLnNpZGViYXIgLmRlZmF1bHQgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLkluYm94LFxuLlRvZGF5LFxuLlVwY29taW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5ib3gtY291bnQsXG4udG9kYXktY291bnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLkluYm94OmhvdmVyLFxuLlRvZGF5OmhvdmVyLFxuLlVwY29taW5nOmhvdmVyLFxuLnByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI5Nzk3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3RzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzZjNmM2Yztcbn1cblxuLmFkZC1wcm9qZWN0IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzZjNmM2YztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3Q6aG92ZXIge1xuICBjb2xvcjogI2QyOTc5Nztcbn1cblxuLnRhc2tzIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi50YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi50YXNrLWZvcm0gaW5wdXQsXG4udGFzay1mb3JtIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udGFzay1mb3JtIC50YXNrLXRpdGxlLFxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGFzay1mb3JtIC50YXNrLXRpdGxlOmZvY3VzLFxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrLWZvcm0gLnRhc2stdGl0bGU6OnBsYWNlaG9sZGVyLFxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRhc2stZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuLnRhc2stZm9ybSBidXR0b24sXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI5Nzk3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRhc2stZm9ybSBidXR0b24sXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc2ZjZmO1xufVxuXG4udGFzay1mb3JtIGJ1dHRvbjpob3Zlcixcbi5wcm9qZWN0LWZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRhc2stZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzLFxuLnRhc2stZm9ybSBidXR0b246Zm9jdXMsXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsXG4ucHJvamVjdC1mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmLCAwIDAgMCA0cHggI2QyOTc5Nztcbn1cblxuLnRhc2stbGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWhlYWRlciAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4udGFzay1ib2R5IHAge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2I3NmY2ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzayAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2I3NmY2ZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzazpob3ZlciAuY2hlY2ttYXJrIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2suY2hlY2tlZCAuY2hlY2ttYXJrIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRhc2staGVhZGVyIGltZy5kZWxldGUtdGFzayB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi50YXNrLWhlYWRlciBpbWcuZGVsZXRlLXRhc2s6aG92ZXIge1xuICBhbmltYXRpb246IHNoYWtlIDAuM3M7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuXG4uYWRkLXRhc2tidG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRhc2tidG4gLmFkZC1zeW1ib2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2QyOTc5NztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWRkLXRhc2tidG4gLmFkZC10YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLmFkZC10YXNrYnRuOmhvdmVyIHtcbiAgLmFkZC1zeW1ib2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLmFkZC10YXNrIHtcbiAgICBjb2xvcjogI2I3NmY2ZjtcbiAgfVxufVxuXG4ucHJvamVjdC1mb3JtIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNjAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5wcm9qZWN0LWZvcm0gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1mb3JtIGgyIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuXG4ucHJvamVjdC1mb3JtIGxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG4ucHJvamVjdC1mb3JtIGlucHV0LFxuLnByb2plY3QtZm9ybSBzZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvamVjdC1mb3JtIC5wcm9qZWN0LXRpdGxlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByb2plY3QtZm9ybSBzZWxlY3Qge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnByb2plY3QtZm9ybSBzZWxlY3Qgb3B0aW9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucHJvamVjdC1mb3JtIHNlbGVjdDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2I3NmY2Zjtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xufVxuXG4ucHJvamVjdCAuY29sb3Ige1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzg2ODY4Njtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xuICBhbmltYXRpb246IHJvdGF0ZSAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IGF1dG87XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImhlYWRlclwiXG4gICAgICAgIFwibWFpblwiO1xuICAgIH1cblxuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICB9XG4gICAgXG4gICAgICAuc2lkZWJhci5jb2xsYXBzZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIHRoZSBzaWRlYmFyIHdoZW4gY29sbGFwc2VkICovXG4gICAgICB9XG4gICAgXG4gICAgICAudGFza3MtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgZWFzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIFNldCB3aWR0aCB0byAxMDAlICovXG4gICAgICB9XG4gICAgXG4gICAgICAuc2lkZWJhci5jb2xsYXBzZWQgfiAudGFza3MtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAudGFza3Mge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAudGFzay1mb3JtIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgLnRhc2stbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGFzayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYWRkLXRhc2tidG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmFkZC10YXNrYnRuIC5hZGQtc3ltYm9sIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIC5hZGQtdGFza2J0biAuYWRkLXRhc2sge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWZvcm0ge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGhlaWdodDogNDAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSBoMiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSBzZWxlY3Qge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWZvcm0gc2VsZWN0IG9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3RzLWxpc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnByb2plY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnByb2plY3QtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5kZWxldGUtcHJvamVjdCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAubWVudS1idXR0b24ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLm1lbnUtYnV0dG9uIGltZyB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAubG9nbyBoMSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnVzZXIgaW1nIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5zaWRlYmFyIC5kZWZhdWx0IGltZyB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUI7O2tCQUVnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7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ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4oNDUwcHgsIDMwJSkgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyLWJhciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5tZW51LWJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmaWxsOiAjZmZmZmZmO1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmxvZ28gaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi51c2VyIGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbjogOXB4IDEwcHggMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2lkZWJhci5jb2xsYXBzZWQge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LXdpZHRoOiAwO1xcbiAgICBhbmltYXRpb246IHNsaWRlT3V0IDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLmNvbGxhcHNlZCArIC50YXNrc3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbi5zaWRlYmFyIC5kZWZhdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICNhYmFiYWI7XFxufVxcblxcbi5zaWRlYmFyIC5kZWZhdWx0IGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLkluYm94LFxcbi5Ub2RheSxcXG4uVXBjb21pbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5ib3gtY291bnQsXFxuLnRvZGF5LWNvdW50IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uSW5ib3g6aG92ZXIsXFxuLlRvZGF5OmhvdmVyLFxcbi5VcGNvbWluZzpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDI5Nzk3O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogIzZjNmM2YztcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGNvbG9yOiAjNmM2YzZjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6ICNkMjk3OTc7XFxufVxcblxcbi50YXNrcyB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2stZm9ybSBpbnB1dCxcXG4udGFzay1mb3JtIHNlbGVjdCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIC50YXNrLXRpdGxlLFxcbi50YXNrLWZvcm0gLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSAudGFzay10aXRsZTpmb2N1cyxcXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm0gLnRhc2stdGl0bGU6OnBsYWNlaG9sZGVyLFxcbi50YXNrLWZvcm0gLnRhc2stZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZDJkMmQyO1xcbn1cXG5cXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50YXNrLWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuLnRhc2stZm9ybSBidXR0b24sXFxuLnByb2plY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b24sXFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3NmY2ZjtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b246aG92ZXIsXFxuLnByb2plY3QtZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG59XFxuXFxuLnRhc2stZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyxcXG4udGFzay1mb3JtIGJ1dHRvbjpmb2N1cyxcXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZmZmZiwgMCAwIDAgNHB4ICNkMjk3OTc7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciBoMiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4udGFzay1ib2R5IHAge1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLnRhc2staGVhZGVyIC5jb21wbGV0ZS10YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2I3NmY2ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staGVhZGVyIC5jb21wbGV0ZS10YXNrIC5jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjYjc2ZjZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2s6aG92ZXIgLmNoZWNrbWFyayB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2suY2hlY2tlZCAuY2hlY2ttYXJrIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWhlYWRlciBpbWcuZGVsZXRlLXRhc2sge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgaW1nLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4zcztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcXG4gIH1cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcblxcbi5hZGQtdGFza2J0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrYnRuIC5hZGQtc3ltYm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGNvbG9yOiAjZDI5Nzk3O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYWRkLXRhc2tidG4gLmFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNjY2NjY2M7XFxufVxcblxcbi5hZGQtdGFza2J0bjpob3ZlciB7XFxuICAuYWRkLXN5bWJvbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgLmFkZC10YXNrIHtcXG4gICAgY29sb3I6ICNiNzZmNmY7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNjAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gaDIge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gbGFiZWwge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gaW5wdXQsXFxuLnByb2plY3QtZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gLnByb2plY3QtdGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBzZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBzZWxlY3Qgb3B0aW9uIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gc2VsZWN0OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2I3NmY2ZjtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2plY3QgLmNvbG9yIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBjb2xvcjogIzg2ODY4NjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDAuM3MgZWFzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXIge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggYXV0bztcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJtYWluXFxcIjtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiA0NXB4O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLnNpZGViYXIuY29sbGFwc2VkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHNpZGViYXIgd2hlbiBjb2xsYXBzZWQgKi9cXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC50YXNrcy1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBlYXNlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIFNldCB3aWR0aCB0byAxMDAlICovXFxuICAgICAgfVxcbiAgICBcXG4gICAgICAuc2lkZWJhci5jb2xsYXBzZWQgfiAudGFza3MtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIH1cXG5cXG4gICAgLnRhc2tzIHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWZvcm0ge1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stbGlzdCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnRhc2sge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5hZGQtdGFza2J0biB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmFkZC10YXNrYnRuIC5hZGQtc3ltYm9sIHtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGQtdGFza2J0biAuYWRkLXRhc2sge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICAgIGhlaWdodDogNDAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm0gaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIGxhYmVsIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSAucHJvamVjdC10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm0gc2VsZWN0IHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSBzZWxlY3Qgb3B0aW9uIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzLWxpc3Qge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGUtcHJvamVjdCB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJ1dHRvbiBpbWcge1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcblxcbiAgICAubG9nbyBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC51c2VyIGltZyB7XFxuICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyIC5kZWZhdWx0IGltZyB7XFxuICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbn0pO1xuXG5jb25zdCB0b2RvTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdEdlbmVyYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIHRvZG9MaXN0R2VuZXJhdG9yIH07XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvTGlzdCwgY3JlYXRlTmV3VG9kbywgdG9kb0xvZ2ljIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=