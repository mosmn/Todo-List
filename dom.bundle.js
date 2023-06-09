"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["dom"],{

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = textContent;

  return element;
};

const createTask = () => {
  const task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createNewTodo)(
    document.querySelector(".task-title").value,
    document.querySelector(".task-description").value,
    document.querySelector(".task-due-date").value,
    document.querySelector(".task-priority").value
  );

  return task;
};

const taskFactory = (todo) => {
  const i = _todo_js__WEBPACK_IMPORTED_MODULE_1__.todoList.indexOf(todo);
  const task = createElement("div", "task", "");
  task.setAttribute("task-index", i);
  task.innerHTML = `
        <div class="task-header">
            <div class="left">
                <div class="complete-task" id="${i}">
                    <div class="checkmark">&#10004;</div>
                </div>
                <h2>${todo.title}</h2>
            </div>
            <img class="delete-task" id="${i}" src="https://img.icons8.com/ios/50/000000/delete-filled.png"/>
        </div>
        <div class="task-body">
            <p>${todo.description}</p>
            <p>${todo.dueDate}</p>
            <p>${todo.priority}</p>
        </div>
    `;
  return task;
};

const renderTasks = () => {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";
  _todo_js__WEBPACK_IMPORTED_MODULE_1__.todoList.forEach((todo) => {
    taskList.appendChild(taskFactory(todo));
  });
  remover();
};

const addTask = () => {
  _todo_js__WEBPACK_IMPORTED_MODULE_1__.todoLogic.addTodo(createTask());
  renderTasks();
};

const addTaskFormbtn = () => {
  const addTaskBtn = createElement("div", "add-taskbtn", "");
  addTaskBtn.innerHTML = `
    <div class="add-symbol">+</div>
    <div class="add-task">Add Task</div>
    `;
  const tasks = document.querySelector(".tasks");
  tasks.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", renderAddTaskForm);
};

const adder = () => {
  const taskSubmit = document.querySelector(".task-submit");
  const taskCancel = document.querySelector(".task-cancel");
  taskSubmit.addEventListener("click", () => {
    addTask();
    closeAddTaskForm();
  });
  taskCancel.addEventListener("click", () => {
    closeAddTaskForm();
  });
};

const renderAddTaskForm = () => {
  const inputForm = createElement("div", "task-form", "");
  inputForm.innerHTML = `
    <input class="task-title" type="text" placeholder="Title" required>
    <input class="task-description" type="text" placeholder="Description" required>
    <input class="task-due-date" type="date">
    <select class="task-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    <input class="task-submit" type="submit" value="Add Task">
    <button class="task-cancel">Cancel</button>
    `;
  const addTaskBtn = document.querySelector(".add-taskbtn");
  const tasks = document.querySelector(".tasks");
  tasks.removeChild(addTaskBtn);
  tasks.appendChild(inputForm);
  adder();
};

const closeAddTaskForm = () => {
  const inputForm = document.querySelector(".task-form");
  const tasks = document.querySelector(".tasks");
  tasks.removeChild(inputForm);
  addTaskFormbtn();
};

const removeTaskElement = (index) => {
  const taskList = document.querySelector(".task-list");
  const task = document.querySelector(`[task-index="${index}"]`);
  taskList.removeChild(task);
};

const deleteTask = (index) => {
  _todo_js__WEBPACK_IMPORTED_MODULE_1__.todoLogic.removeTodo(index);
  removeTaskElement(index);
  renderTasks();
};

const remover = () => {
  const deleteTaskButtons = document.querySelectorAll(".delete-task");
  const completeTaskButtons = document.querySelectorAll(".complete-task");
  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteTask(button.id);
    });
  });
  completeTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteTask(button.id);
    });
  });
};

const renderAddProjectForm = () => {
  const inputForm = createElement("div", "project-form", "");
  inputForm.innerHTML = `
        <h2>Add Project</h2>
        <label for="project-title">Name</label>
        <input class="project-title" type="text" required>
        <label for="project-color">Color</label>
        <select class="project-color">
            <option value="#9b111e">Berry Red</option>
            <option value="#d11d1d">Red</option>
            <option value="#e76f51">Orange</option>
            <option value="#f4d35e">Yellow</option>
            <option value="#a8d8ea">Olive Green</option>
            <option value="#90be6d">Lime Green</option>
            <option value="#43aa8b">Green</option>
            <option value="#4d908e">Mint Green</option>
            <option value="#277da1">Teal</option>
            <option value="#56a3a6">Sky Blue</option>
            <option value="#80ced6">Light Blue</option>
            <option value="#6497b1">Blue</option>
            <option value="#8d6e63">Grape</option>
            <option value="#b19cd9">Violet</option>
            <option value="#d7bde2">Lavender</option>
            <option value="#e599f7">Magenta</option>
            <option value="#f7a8b8">Salmon</option>
            <option value="#4a4a4a">Charcoal</option>
            <option value="#9a9a9a">Grey</option>
            <option value="#c7c7c7">Taupe</option>
        </select>
        <input class="project-submit" type="submit" value="Add Project">
        <button class="project-cancel">Cancel</button>
    `;
  document.body.appendChild(inputForm);
  adderProject();
};

const addProjectFormbtn = () => {
  const addProjectBtn = document.querySelector(".add-project");
  addProjectBtn.addEventListener("click", renderAddProjectForm);
};

const closeAddProjectForm = () => {
  const inputForm = document.querySelector(".project-form");
  document.body.removeChild(inputForm);
};

const addProject = (projectForm) => {
  const projectTitle = projectForm.querySelector(".project-title").value;
  const projectColor = projectForm.querySelector(".project-color").value;
  const project = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectTitle, projectColor);
  _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectLogic.addProject(project);
  renderProjects();
  closeAddProjectForm();
};

const adderProject = () => {
  const projectSubmit = document.querySelector(".project-submit");
  const projectCancel = document.querySelector(".project-cancel");
  projectSubmit.addEventListener("click", (event) => {
    const projectForm = event.target.closest(".project-form");
    addProject(projectForm);
  });
  projectCancel.addEventListener("click", closeAddProjectForm);
};

const projectFactory = (project) => {
  const i = _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsList.indexOf(project);
  const projectElement = createElement("div", "project", "");
  projectElement.setAttribute("project-index", i);
  projectElement.innerHTML = `
        <div class="color" style="background-color: ${project.color}"></div>
        <div class="project-title">${project.title}</div>
        <div class="delete-project" id="${i}">&#10540;</div>
    `;
  return projectElement;
};

const renderProjects = () => {
  const projects = document.querySelector(".projects-list");
  projects.innerHTML = "";
  _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsList.forEach((project) => {
    projects.appendChild(projectFactory(project));
  });
  removerProject();
};

const removeProjectElement = (index) => {
  const projects = document.querySelector(".projects-list");
  const project = document.querySelector(`[project-index="${index}"]`);
  projects.removeChild(project);
};

const deleteProject = (index) => {
  _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectLogic.removeProject(index);
  removeProjectElement(index);
  renderProjects();
};

const removerProject = () => {
  const deleteProjectButtons = document.querySelectorAll(".delete-project");
  deleteProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteProject(button.id);
    });
  });
};

const showHideSidebar = () => {
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });    
};

const initialPageLoad = () => {
  const mainContainer = createElement("div", "main-container", "");
  mainContainer.innerHTML = `
        <div class="header-bar">
            <button class="menu-button">
                <img src="https://img.icons8.com/ios/50/000000/menu-filled.png"/>
            </button>
            <div class="logo">
                <img src="https://img.icons8.com/ios/50/000000/todo-list-filled.png"/>
                <h1>Todo List</h1>
            </div>
            <div class="user">
                <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
            </div>
        </div>
        <div class="sidebar">
            <div class="default">
                <div class="Inbox">
                    <img src="https://img.icons8.com/ios/50/000000/inbox-filled.png"/>
                    <div class="inbox">Inbox</div>
                    <div class="inbox-count">0</div>
                </div>
                <div class="Today">
                    <img src="https://img.icons8.com/ios/50/000000/sun-filled.png"/>
                    <div class="today">Today</div>
                    <div class="today-count">0</div>
                </div>
                <div class="Upcoming">
                    <img src="https://img.icons8.com/ios/50/000000/calendar-filled.png"/>
                    <div class="upcoming">Upcoming</div>
                </div>
            </div>
            <div class="projects">
                <div class="projects-header">
                    <div class="title">Projects</div>
                    <div class="add-project">+</div>
                </div>
                <div class="projects-list"></div>
            </div>
        </div>
        <div class="tasks">
            <div class="task-list"></div>
        </div>
    `;
  document.body.appendChild(mainContainer);
  addTaskFormbtn();
  addProjectFormbtn();
    showHideSidebar();
};

document.addEventListener("DOMContentLoaded", initialPageLoad);


/***/ }),

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const projectsList = [];

const createNewProject = (title, color) => ({
  title,
  color,
  todoList: _todo_js__WEBPACK_IMPORTED_MODULE_1__.todoLogic.todoListGenerator(),
});

const projectLogic = (() => {
  const addProject = (project) => {
    projectsList.push(project);
  };

  const removeProject = (index) => {
    projectsList.splice(index, 1);
  };

  return { addProject, removeProject };
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSx1QkFBdUIsT0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4oNDUwcHgsIDMwJSkgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgXCJzaWRlYmFyIG1haW5cIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1iYXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTc5NztcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWVudS1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmlsbDogI2ZmZmZmZjtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxvZ28gaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51c2VyIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogOXB4IDEwcHggMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zaWRlYmFyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZTtcbn1cblxuLnNpZGViYXIuY29sbGFwc2VkIHtcbiAgICB3aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGVPdXQgMC4zcyBlYXNlO1xuICB9XG5cbiAgLnNpZGViYXIuY29sbGFwc2VkICsgLnRhc2tze1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xufVxuXG4uc2lkZWJhciAuZGVmYXVsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjYWJhYmFiO1xufVxuXG4uc2lkZWJhciAuZGVmYXVsdCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uSW5ib3gsXG4uVG9kYXksXG4uVXBjb21pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmJveC1jb3VudCxcbi50b2RheS1jb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uSW5ib3g6aG92ZXIsXG4uVG9kYXk6aG92ZXIsXG4uVXBjb21pbmc6aG92ZXIsXG4ucHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3RzLWhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjNmM2YzZjO1xufVxuXG4uYWRkLXByb2plY3Qge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNmM2YzZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdDpob3ZlciB7XG4gIGNvbG9yOiAjZDI5Nzk3O1xufVxuXG4udGFza3Mge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLnRhc2stZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnRhc2stZm9ybSBpbnB1dCxcbi50YXNrLWZvcm0gc2VsZWN0IHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50YXNrLWZvcm0gLnRhc2stdGl0bGUsXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50YXNrLWZvcm0gLnRhc2stdGl0bGU6Zm9jdXMsXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2stZm9ybSAudGFzay10aXRsZTo6cGxhY2Vob2xkZXIsXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG4udGFzay1mb3JtIC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG4udGFzay1mb3JtIGJ1dHRvbixcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGFzay1mb3JtIGJ1dHRvbixcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50YXNrLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3Zlcixcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzZmNmY7XG59XG5cbi50YXNrLWZvcm0gYnV0dG9uOmhvdmVyLFxuLnByb2plY3QtZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMsXG4udGFzay1mb3JtIGJ1dHRvbjpmb2N1cyxcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpmb2N1cyxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmZmZmYsIDAgMCAwIDRweCAjZDI5Nzk3O1xufVxuXG4udGFzay1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2staGVhZGVyIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2staGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi50YXNrLWJvZHkgcCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjYjc2ZjZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2staGVhZGVyIC5jb21wbGV0ZS10YXNrIC5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjYjc2ZjZmO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLnRhc2staGVhZGVyIC5jb21wbGV0ZS10YXNrOmhvdmVyIC5jaGVja21hcmsge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzay5jaGVja2VkIC5jaGVja21hcmsge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGFzay1oZWFkZXIgaW1nLmRlbGV0ZS10YXNrIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLnRhc2staGVhZGVyIGltZy5kZWxldGUtdGFzazpob3ZlciB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbi5hZGQtdGFza2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtdGFza2J0biAuYWRkLXN5bWJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZDI5Nzk3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZGQtdGFza2J0biAuYWRkLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4uYWRkLXRhc2tidG46aG92ZXIge1xuICAuYWRkLXN5bWJvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTc5NztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAuYWRkLXRhc2sge1xuICAgIGNvbG9yOiAjYjc2ZjZmO1xuICB9XG59XG5cbi5wcm9qZWN0LWZvcm0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC02MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMjAwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnByb2plY3QtZm9ybSAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWZvcm0gaDIge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG59XG5cbi5wcm9qZWN0LWZvcm0gbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG59XG5cbi5wcm9qZWN0LWZvcm0gaW5wdXQsXG4ucHJvamVjdC1mb3JtIHNlbGVjdCB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWZvcm0gLnByb2plY3QtdGl0bGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucHJvamVjdC1mb3JtIHNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucHJvamVjdC1mb3JtIHNlbGVjdCBvcHRpb24ge1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5wcm9qZWN0LWZvcm0gc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYjc2ZjZmO1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG59XG5cbi5wcm9qZWN0IC5jb2xvciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuXG4uZGVsZXRlLXByb2plY3Qge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuM3MgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgXCJtYWluXCI7XG4gICAgfVxuXG4gICAgLnNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogNDVweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHNpZGViYXIgd2hlbiBjb2xsYXBzZWQgKi9cbiAgICAgIH1cbiAgICBcbiAgICAgIC50YXNrcy1jb250YWluZXIge1xuICAgICAgICBncmlkLWFyZWE6IG1haW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBlYXNlO1xuICAgICAgICB3aWR0aDogMTAwJTsgLyogU2V0IHdpZHRoIHRvIDEwMCUgKi9cbiAgICAgIH1cbiAgICBcbiAgICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB+IC50YXNrcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cblxuICAgIC50YXNrcyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC50YXNrLWZvcm0ge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICAudGFzay1saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC50YXNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5hZGQtdGFza2J0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYWRkLXRhc2tidG4gLmFkZC1zeW1ib2wge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuXG4gICAgLmFkZC10YXNrYnRuIC5hZGQtdGFzayB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mb3JtIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mb3JtIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mb3JtIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mb3JtIHNlbGVjdCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZm9ybSBzZWxlY3Qgb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucHJvamVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAuZGVsZXRlLXByb2plY3Q6aG92ZXIge1xuICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAubWVudS1idXR0b24gaW1nIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5sb2dvIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAudXNlciBpbWcge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLnNpZGViYXIgLmRlZmF1bHQgaW1nIHtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLDRCQUE0QjtFQUM1Qjs7a0JBRWdC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RUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDs7SUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbig0NTBweCwgMzAlKSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTc5NztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIGltZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZpbGw6ICNmZmZmZmY7XFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubG9nbyBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnVzZXIgaW1nIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luOiA5cHggMTBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XFxufVxcblxcbi5zaWRlYmFyLmNvbGxhcHNlZCB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtd2lkdGg6IDA7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVPdXQgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgLnNpZGViYXIuY29sbGFwc2VkICsgLnRhc2tze1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuLnNpZGViYXIgLmRlZmF1bHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjb2xvcjogI2FiYWJhYjtcXG59XFxuXFxuLnNpZGViYXIgLmRlZmF1bHQgaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uSW5ib3gsXFxuLlRvZGF5LFxcbi5VcGNvbWluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmJveC1jb3VudCxcXG4udG9kYXktY291bnQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5JbmJveDpob3ZlcixcXG4uVG9kYXk6aG92ZXIsXFxuLlVwY29taW5nOmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjk3OTc7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjNmM2YzZjO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgY29sb3I6ICM2YzZjNmM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2QyOTc5NztcXG59XFxuXFxuLnRhc2tzIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4udGFzay1mb3JtIGlucHV0LFxcbi50YXNrLWZvcm0gc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50YXNrLWZvcm0gLnRhc2stdGl0bGUsXFxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtIC50YXNrLXRpdGxlOmZvY3VzLFxcbi50YXNrLWZvcm0gLnRhc2stZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSAudGFzay10aXRsZTo6cGxhY2Vob2xkZXIsXFxuLnRhc2stZm9ybSAudGFzay1kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNkMmQyZDI7XFxufVxcblxcbi50YXNrLWZvcm0gLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnRhc2stZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG4udGFzay1mb3JtIGJ1dHRvbixcXG4ucHJvamVjdC1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTc5NztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbixcXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi50YXNrLWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuLnByb2plY3QtZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjc2ZjZmO1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbjpob3ZlcixcXG4ucHJvamVjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbn1cXG5cXG4udGFzay1mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzLFxcbi50YXNrLWZvcm0gYnV0dG9uOmZvY3VzLFxcbi5wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuLnByb2plY3QtZm9ybSBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmLCAwIDAgMCA0cHggI2QyOTc5NztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWhlYWRlciAubGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staGVhZGVyIGgyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi50YXNrLWJvZHkgcCB7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjYjc2ZjZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmNvbXBsZXRlLXRhc2sgLmNoZWNrbWFyayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNiNzZmNmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzazpob3ZlciAuY2hlY2ttYXJrIHtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWhlYWRlciAuY29tcGxldGUtdGFzay5jaGVja2VkIC5jaGVja21hcmsge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2staGVhZGVyIGltZy5kZWxldGUtdGFzayB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi50YXNrLWhlYWRlciBpbWcuZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmFkZC10YXNrYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2tidG4gLmFkZC1zeW1ib2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY29sb3I6ICNkMjk3OTc7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5hZGQtdGFza2J0biAuYWRkLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2NjY2NjYztcXG59XFxuXFxuLmFkZC10YXNrYnRuOmhvdmVyIHtcXG4gIC5hZGQtc3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTc5NztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAuYWRkLXRhc2sge1xcbiAgICBjb2xvcjogI2I3NmY2ZjtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC02MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBoMiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG59XFxuXFxuLnByb2plY3QtZm9ybSBsYWJlbCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBpbnB1dCxcXG4ucHJvamVjdC1mb3JtIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSAucHJvamVjdC10aXRsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHNlbGVjdCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIHNlbGVjdCBvcHRpb24ge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSBzZWxlY3Q6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjYjc2ZjZmO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdCAuY29sb3Ige1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGNvbG9yOiAjODY4Njg2O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC4zcyBlYXNlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCBhdXRvO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm1haW5cXFwiO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDQ1cHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAuc2lkZWJhci5jb2xsYXBzZWQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZSB0aGUgc2lkZWJhciB3aGVuIGNvbGxhcHNlZCAqL1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IG1haW47XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjNzIGVhc2U7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogU2V0IHdpZHRoIHRvIDEwMCUgKi9cXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB+IC50YXNrcy1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgfVxcblxcbiAgICAudGFza3Mge1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stZm9ybSB7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICAudGFzay1saXN0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAudGFzayB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmFkZC10YXNrYnRuIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuYWRkLXRhc2tidG4gLmFkZC1zeW1ib2wge1xcbiAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIH1cXG5cXG4gICAgLmFkZC10YXNrYnRuIC5hZGQtdGFzayB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm0ge1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgaGVpZ2h0OiA0MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSBoMiB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWZvcm0gbGFiZWwge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSBzZWxlY3Qge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIHNlbGVjdCBvcHRpb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtbGlzdCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3Qge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYnV0dG9uIGltZyB7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIGgxIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgLnVzZXIgaW1nIHtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNpZGViYXIgLmRlZmF1bHQgaW1nIHtcXG4gICAgICB3aWR0aDogMjVweDtcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHRvZG9MaXN0LCBjcmVhdGVOZXdUb2RvLCB0b2RvTG9naWMgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RMb2dpYyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnTmFtZSwgY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVOZXdUb2RvKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWR1ZS1kYXRlXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wcmlvcml0eVwiKS52YWx1ZVxuICApO1xuXG4gIHJldHVybiB0YXNrO1xufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAodG9kbykgPT4ge1xuICBjb25zdCBpID0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrXCIsIFwiXCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcInRhc2staW5kZXhcIiwgaSk7XG4gIHRhc2suaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBsZXRlLXRhc2tcIiBpZD1cIiR7aX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrbWFya1wiPiYjMTAwMDQ7PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPiR7dG9kby50aXRsZX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiZGVsZXRlLXRhc2tcIiBpZD1cIiR7aX1cIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvZGVsZXRlLWZpbGxlZC5wbmdcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib2R5XCI+XG4gICAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgPHA+JHt0b2RvLnByaW9yaXR5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tGYWN0b3J5KHRvZG8pKTtcbiAgfSk7XG4gIHJlbW92ZXIoKTtcbn07XG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gIHRvZG9Mb2dpYy5hZGRUb2RvKGNyZWF0ZVRhc2soKSk7XG4gIHJlbmRlclRhc2tzKCk7XG59O1xuXG5jb25zdCBhZGRUYXNrRm9ybWJ0biA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhZGQtdGFza2J0blwiLCBcIlwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImFkZC1zeW1ib2xcIj4rPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFkZC10YXNrXCI+QWRkIFRhc2s8L2Rpdj5cbiAgICBgO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIHRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBZGRUYXNrRm9ybSk7XG59O1xuXG5jb25zdCBhZGRlciA9ICgpID0+IHtcbiAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1zdWJtaXRcIik7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY2FuY2VsXCIpO1xuICB0YXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFzaygpO1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgfSk7XG4gIHRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLWZvcm1cIiwgXCJcIik7XG4gIGlucHV0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGlucHV0IGNsYXNzPVwidGFzay10aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlcXVpcmVkPlxuICAgIDxpbnB1dCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiByZXF1aXJlZD5cbiAgICA8aW5wdXQgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCIgdHlwZT1cImRhdGVcIj5cbiAgICA8c2VsZWN0IGNsYXNzPVwidGFzay1wcmlvcml0eVwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGlucHV0IGNsYXNzPVwidGFzay1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgVGFza1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIGA7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrYnRuXCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIHRhc2tzLnJlbW92ZUNoaWxkKGFkZFRhc2tCdG4pO1xuICB0YXNrcy5hcHBlbmRDaGlsZChpbnB1dEZvcm0pO1xuICBhZGRlcigpO1xufTtcblxuY29uc3QgY2xvc2VBZGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza3MucmVtb3ZlQ2hpbGQoaW5wdXRGb3JtKTtcbiAgYWRkVGFza0Zvcm1idG4oKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tFbGVtZW50ID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbdGFzay1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2spO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICB0b2RvTG9naWMucmVtb3ZlVG9kbyhpbmRleCk7XG4gIHJlbW92ZVRhc2tFbGVtZW50KGluZGV4KTtcbiAgcmVuZGVyVGFza3MoKTtcbn07XG5cbmNvbnN0IHJlbW92ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcbiAgY29uc3QgY29tcGxldGVUYXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcGxldGUtdGFza1wiKTtcbiAgZGVsZXRlVGFza0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVUYXNrKGJ1dHRvbi5pZCk7XG4gICAgfSk7XG4gIH0pO1xuICBjb21wbGV0ZVRhc2tCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlVGFzayhidXR0b24uaWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dEZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1mb3JtXCIsIFwiXCIpO1xuICBpbnB1dEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDI+QWRkIFByb2plY3Q8L2gyPlxuICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC10aXRsZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtY29sb3JcIj5Db2xvcjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcm9qZWN0LWNvbG9yXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzliMTExZVwiPkJlcnJ5IFJlZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNkMTFkMWRcIj5SZWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjZTc2ZjUxXCI+T3JhbmdlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2Y0ZDM1ZVwiPlllbGxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiNhOGQ4ZWFcIj5PbGl2ZSBHcmVlbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM5MGJlNmRcIj5MaW1lIEdyZWVuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzQzYWE4YlwiPkdyZWVuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRkOTA4ZVwiPk1pbnQgR3JlZW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjMjc3ZGExXCI+VGVhbDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM1NmEzYTZcIj5Ta3kgQmx1ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiM4MGNlZDZcIj5MaWdodCBCbHVlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzY0OTdiMVwiPkJsdWU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjOGQ2ZTYzXCI+R3JhcGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjYjE5Y2Q5XCI+VmlvbGV0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2Q3YmRlMlwiPkxhdmVuZGVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiI2U1OTlmN1wiPk1hZ2VudGE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjZjdhOGI4XCI+U2FsbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzRhNGE0YVwiPkNoYXJjb2FsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIzlhOWE5YVwiPkdyZXk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIjYzdjN2M3XCI+VGF1cGU8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInByb2plY3Qtc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkIFByb2plY3RcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dEZvcm0pO1xuICBhZGRlclByb2plY3QoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RGb3JtYnRuID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWRkUHJvamVjdEZvcm0pO1xufTtcblxuY29uc3QgY2xvc2VBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXRGb3JtKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEZvcm0pID0+IHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0Q29sb3IgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29sb3JcIikudmFsdWU7XG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdENvbG9yKTtcbiAgcHJvamVjdExvZ2ljLmFkZFByb2plY3QocHJvamVjdCk7XG4gIHJlbmRlclByb2plY3RzKCk7XG4gIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbn07XG5cbmNvbnN0IGFkZGVyUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zdWJtaXRcIik7XG4gIGNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FuY2VsXCIpO1xuICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtZm9ybVwiKTtcbiAgICBhZGRQcm9qZWN0KHByb2plY3RGb3JtKTtcbiAgfSk7XG4gIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQWRkUHJvamVjdEZvcm0pO1xufTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBpID0gcHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3RcIiwgXCJcIik7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcInByb2plY3QtaW5kZXhcIiwgaSk7XG4gIHByb2plY3RFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb2plY3QuY29sb3J9XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIiBpZD1cIiR7aX1cIj4mIzEwNTQwOzwvZGl2PlxuICAgIGA7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbiAgcHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RmFjdG9yeShwcm9qZWN0KSk7XG4gIH0pO1xuICByZW1vdmVyUHJvamVjdCgpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdEVsZW1lbnQgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbcHJvamVjdC1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3QpO1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICBwcm9qZWN0TG9naWMucmVtb3ZlUHJvamVjdChpbmRleCk7XG4gIHJlbW92ZVByb2plY3RFbGVtZW50KGluZGV4KTtcbiAgcmVuZGVyUHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHJlbW92ZXJQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXByb2plY3RcIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlUHJvamVjdChidXR0b24uaWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dIaWRlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcbiAgICB9KTsgICAgXG59O1xuXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1jb250YWluZXJcIiwgXCJcIik7XG4gIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJhclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvbWVudS1maWxsZWQucG5nXCIvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDAwMDAwL3RvZG8tbGlzdC1maWxsZWQucG5nXCIvPlxuICAgICAgICAgICAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDAwMDAwL3VzZXItZmlsbGVkLnBuZ1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkluYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDAwMDAwL2luYm94LWZpbGxlZC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveFwiPkluYm94PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC1jb3VudFwiPjA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVG9kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvc3VuLWZpbGxlZC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheVwiPlRvZGF5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1jb3VudFwiPjA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVXBjb21pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY2FsZW5kYXItZmlsbGVkLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwY29taW5nXCI+VXBjb21pbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5Qcm9qZWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3RcIj4rPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWxpc3RcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1saXN0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIGFkZFRhc2tGb3JtYnRuKCk7XG4gIGFkZFByb2plY3RGb3JtYnRuKCk7XG4gICAgc2hvd0hpZGVTaWRlYmFyKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsUGFnZUxvYWQpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHRvZG9Mb2dpYyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAodGl0bGUsIGNvbG9yKSA9PiAoe1xuICB0aXRsZSxcbiAgY29sb3IsXG4gIHRvZG9MaXN0OiB0b2RvTG9naWMudG9kb0xpc3RHZW5lcmF0b3IoKSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdHNMaXN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0TG9naWMgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gW107XG5cbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbn0pO1xuXG5jb25zdCB0b2RvTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdEdlbmVyYXRvciA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFRvZG8sIHJlbW92ZVRvZG8sIHRvZG9MaXN0R2VuZXJhdG9yIH07XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvTGlzdCwgY3JlYXRlTmV3VG9kbywgdG9kb0xvZ2ljIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=