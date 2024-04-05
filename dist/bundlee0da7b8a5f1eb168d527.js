/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tasks = /*#__PURE__*/function () {
  function Tasks() {
    _classCallCheck(this, Tasks);
    this.allTasks = [];
  }
  return _createClass(Tasks, [{
    key: "addTask",
    value: function addTask(task) {
      this.allTasks.push(task);
    }
  }, {
    key: "removeTask",
    value: function removeTask(task) {
      var index = this.allTasks.indexOf(task);
      if (index !== -1) {
        this.allTasks.splice(index, 1);
      }
    }
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      return this.allTasks;
    }
  }]);
}();

var tasks = new Tasks();

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateFooter)
/* harmony export */ });
/* harmony import */ var _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/github-mark-white.svg */ "./src/assets/github-mark-white.svg");

function generateFooter() {
  var body = document.querySelector("body");
  var footerTag = document.createElement("div");
  footerTag.setAttribute("id", "footer");
  var footerText = document.createTextNode("Copyright © 2024 NewGen2022");
  footerTag.appendChild(footerText);
  var footerLink = document.createElement("a");
  footerLink.href = "https://github.com/NewGen2022";
  footerLink.target = "_blank";
  var footerImg = document.createElement("img");
  footerImg.src = _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__;
  footerLink.appendChild(footerImg);
  footerTag.appendChild(footerText);
  footerTag.appendChild(footerLink);
  body.appendChild(footerTag);
}
;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHeader)
/* harmony export */ });
/* harmony import */ var _assets_transparent_bg_honey_badger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/transparent-bg-honey-badger.png */ "./src/assets/transparent-bg-honey-badger.png");

function generateHeader() {
  var body = document.querySelector("body");
  var headerTag = document.createElement("div");
  headerTag.setAttribute("id", "header");
  var headerLogo = document.createElement("img");
  headerLogo.src = _assets_transparent_bg_honey_badger_png__WEBPACK_IMPORTED_MODULE_0__;
  headerLogo.setAttribute("id", "logoImg");
  var headerText = document.createTextNode("ToBadger");
  headerTag.appendChild(headerText);
  headerTag.appendChild(headerLogo);
  headerTag.appendChild(headerText);
  body.appendChild(headerTag);
}
;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");


function generateMain() {
  var body = document.querySelector("body");
  var main = document.createElement("div");
  main.setAttribute("id", "main");
  body.appendChild(main);
  var sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var content = new _mainContent__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Content = /*#__PURE__*/function () {
  function Content() {
    _classCallCheck(this, Content);
    this.main = document.getElementById("main");
    this.content = document.createElement("div");
    this.content.setAttribute("id", "content");
    this.main.appendChild(this.content);
    this.addEventListeners();
    this.allTasks = _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.getAllTasks();
  }
  return _createClass(Content, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      var inboxBtn = document.getElementById("inbox");
      var todayBtn = document.getElementById("today");
      var thisWeekBtn = document.getElementById("thisWeek");
      var addProjectBtn = document.getElementById("addProjectBtn");
      inboxBtn.addEventListener("click", function () {
        return _this.inboxTasks();
      });
      todayBtn.addEventListener("click", function () {
        return _this.todayTasks();
      });
      thisWeekBtn.addEventListener("click", function () {
        return _this.thisWeekTasks();
      });
      addProjectBtn.addEventListener("click", function () {
        return _this.createAddProjectBtn();
      });
    }
  }, {
    key: "inboxTasks",
    value: function inboxTasks() {
      this.clearContent();
      this.createHeaderDay("Inbox");
      var task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("JS", "05.04.2024");
      var task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("JS2", "05.04.2024");
      this.displayAllTasks();
      this.createAddTaskBtn();
    }
  }, {
    key: "todayTasks",
    value: function todayTasks() {
      this.clearContent();
      this.createHeaderDay("Today");
      this.createAddTaskBtn();
    }
  }, {
    key: "thisWeekTasks",
    value: function thisWeekTasks() {
      this.clearContent();
      this.createHeaderDay("This week");
      this.createAddTaskBtn();
    }
  }, {
    key: "createAddProjectBtn",
    value: function createAddProjectBtn() {
      this.clearContent();
      this.createHeaderDay("Add Project");
      this.createAddTaskBtn();
    }
  }, {
    key: "createHeaderDay",
    value: function createHeaderDay(textContent) {
      var headerDay = document.createElement("div");
      headerDay.classList.add("headerDay");
      headerDay.textContent = textContent;
      this.content.appendChild(headerDay);
    }
  }, {
    key: "createAddTaskBtn",
    value: function createAddTaskBtn() {
      var btn = document.createElement("button");
      btn.classList.add("addTaskBtn");
      btn.textContent = "+ Add task";
      this.content.appendChild(btn);
    }

    // createTask(name, date) {
    //     const taskContainer = document.createElement("div");
    //     taskContainer.classList.add("task");

    //     const taskInfo = document.createElement("div");
    //     taskInfo.classList.add("task-info");

    //     const buttons = document.createElement("div");
    //     buttons.classList.add("buttons");

    //     const checkboxNameContainer = document.createElement("div");
    //     checkboxNameContainer.classList.add("checkbox-name-container");

    //     const isDoneCheckbox = document.createElement("input");
    //     isDoneCheckbox.classList.add("custom-checkbox");
    //     isDoneCheckbox.type = "checkbox";

    //     const taskName = document.createElement("div");
    //     taskName.classList.add("task-name");
    //     taskName.textContent = name;

    //     checkboxNameContainer.appendChild(isDoneCheckbox);
    //     checkboxNameContainer.appendChild(taskName);

    //     const dateBtn = document.createElement("button");
    //     dateBtn.textContent = date;
    //     dateBtn.classList.add("date");

    //     const editBtn = document.createElement("button");
    //     const editIconImg = document.createElement("img");
    //     editIconImg.src = editIcon;
    //     editBtn.appendChild(editIconImg);
    //     editBtn.classList.add("edit");

    //     const deleteBtn = document.createElement("button");
    //     const deleteIconImg = document.createElement("img");
    //     deleteIconImg.src = deleteIcon;
    //     deleteBtn.appendChild(deleteIconImg)
    //     deleteBtn.classList.add("delete");

    //     buttons.appendChild(editBtn);
    //     buttons.appendChild(deleteBtn);

    //     taskInfo.appendChild(checkboxNameContainer);
    //     taskInfo.appendChild(buttons);

    //     taskContainer.appendChild(taskInfo);
    //     taskContainer.appendChild(dateBtn);

    //     return taskContainer;
    // }
  }, {
    key: "displayAllTasks",
    value: function displayAllTasks() {
      var tasksContainer = document.createElement("div");
      tasksContainer.classList.add("tasks");
      this.allTasks.forEach(function (task) {
        tasksContainer.appendChild(task);
      });
      this.content.appendChild(tasksContainer);
    }
  }, {
    key: "clearContent",
    value: function clearContent() {
      this.content.textContent = "";
    }
  }]);
}();

;

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _assets_all_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/all.png */ "./src/assets/all.png");
/* harmony import */ var _assets_availability_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/availability.png */ "./src/assets/availability.png");
/* harmony import */ var _assets_bulletin_board_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/bulletin-board.png */ "./src/assets/bulletin-board.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Sidebar = /*#__PURE__*/_createClass(function Sidebar() {
  _classCallCheck(this, Sidebar);
  var main = document.getElementById("main");
  var sidebar = document.createElement("div");
  sidebar.setAttribute("id", "sidebar");
  var inbox = document.createElement("button");
  var today = document.createElement("button");
  var thisWeek = document.createElement("button");
  var inboxImg = document.createElement("img");
  var todayImg = document.createElement("img");
  var thisWeekImg = document.createElement("img");
  inboxImg.src = _assets_all_png__WEBPACK_IMPORTED_MODULE_0__;
  todayImg.src = _assets_availability_png__WEBPACK_IMPORTED_MODULE_1__;
  thisWeekImg.src = _assets_bulletin_board_png__WEBPACK_IMPORTED_MODULE_2__;
  inbox.appendChild(inboxImg);
  today.appendChild(todayImg);
  thisWeek.appendChild(thisWeekImg);
  inbox.textContent = "Inbox";
  today.textContent = "Today";
  thisWeek.textContent = "This week";
  inbox.classList.add("buttonDays", "with-icon");
  today.classList.add("buttonDays", "with-icon");
  thisWeek.classList.add("buttonDays", "with-icon");
  inbox.setAttribute("id", "inbox");
  today.setAttribute("id", "today");
  thisWeek.setAttribute("id", "thisWeek");
  var projectsHeader = document.createElement("h2");
  projectsHeader.textContent = "Projects";
  var addProjectButton = document.createElement("button");
  addProjectButton.textContent = "Add project";
  addProjectButton.setAttribute("id", "addProjectBtn");
  addProjectButton.classList.add("buttonDays", "with-icon");
  sidebar.appendChild(inbox);
  sidebar.appendChild(today);
  sidebar.appendChild(thisWeek);
  sidebar.appendChild(projectsHeader);
  sidebar.appendChild(addProjectButton);
  main.appendChild(sidebar);
});

;

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   tasks: () => (/* reexport safe */ _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks)
/* harmony export */ });
/* harmony import */ var _assets_edit_text_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/edit-text.png */ "./src/assets/edit-text.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/delete.png */ "./src/assets/delete.png");
/* harmony import */ var _allTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTasks.js */ "./src/allTasks.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Task = /*#__PURE__*/function () {
  function Task(name, date) {
    _classCallCheck(this, Task);
    this.name = name;
    this.date = date;
    this.taskElement = this.createTaskElement();
    _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.addTask(this.taskElement);
  }
  return _createClass(Task, [{
    key: "createTaskElement",
    value: function createTaskElement() {
      var taskContainer = document.createElement("div");
      taskContainer.classList.add("task");
      var taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      var buttons = document.createElement("div");
      buttons.classList.add("buttons");
      var checkboxNameContainer = document.createElement("div");
      checkboxNameContainer.classList.add("checkbox-name-container");
      var isDoneCheckbox = document.createElement("input");
      isDoneCheckbox.classList.add("custom-checkbox");
      isDoneCheckbox.type = "checkbox";
      var taskName = document.createElement("div");
      taskName.classList.add("task-name");
      taskName.textContent = this.name;
      checkboxNameContainer.appendChild(isDoneCheckbox);
      checkboxNameContainer.appendChild(taskName);
      var dateBtn = document.createElement("button");
      dateBtn.textContent = this.date;
      dateBtn.classList.add("date");
      var editBtn = document.createElement("button");
      var editIconImg = document.createElement("img");
      editIconImg.src = _assets_edit_text_png__WEBPACK_IMPORTED_MODULE_0__;
      editBtn.appendChild(editIconImg);
      editBtn.classList.add("edit");
      var deleteBtn = document.createElement("button");
      var deleteIconImg = document.createElement("img");
      deleteIconImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;
      deleteBtn.appendChild(deleteIconImg);
      deleteBtn.classList.add("delete");
      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      taskInfo.appendChild(checkboxNameContainer);
      taskInfo.appendChild(buttons);
      taskContainer.appendChild(taskInfo);
      taskContainer.appendChild(dateBtn);
      return taskContainer;
    }
  }]);
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/all.png */ "./src/assets/all.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/availability.png */ "./src/assets/availability.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bulletin-board.png */ "./src/assets/bulletin-board.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/plus-symbol-button.png */ "./src/assets/plus-symbol-button.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: #d5d5d5;
}

body{
    margin: 0;
    padding: 0;
    background-color: #232023;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

button{
    cursor: pointer;
}

#logoImg{
    width: 110px;
    border-radius: 100px;
    margin-left: 2vw;
}

#header{
    display: flex;
    align-items: center;
    font-size: clamp(28px, 5vw, 38px);
    font-weight: 700;
    background-color: #5a5a5a;
    gap: 10px;
}

#main{
    display: flex;
    flex-grow: 1;
    background-color: #232023;
}


/* SIDEBAR STYLES */
#sidebar{
    display: flex;
    flex-direction: column;
    background-color: #2f2d2f;
    padding: 30px;
    width: clamp(220px, 30vw, 300px);
}

.buttonDays, #addProjectBtn{
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: #dddddd;
    padding: 10px 20px;
    font-size: clamp(14px, 2vw, 16px);
    font-weight: 700;
    border-radius: 10px;
    margin-bottom: 10px;
    gap: 10px;
}
.buttonDays:hover{
    transform: scale(1.05);
    background-color: #444444;
}
.buttonDays:active{
    transform: scale(0.99);
}
.buttonDays:focus{
    background-color: #444444;
}

.with-icon::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: contain;
}
#inbox::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
#today::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
#thisWeek::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#addProjectBtn{
    background-color: #232023;
    margin: 0 10px;
    font-size: clamp(12px, 2vw, 14px);
}
#addProjectBtn:hover{
    background-color: #545454;
}
#addProjectBtn::before{
    width: 15px;
    height: 15px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
/* SIDEBAR STYLES */


/* CONTENT STYLES */
#content{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 50px clamp(50px, 12vw, 200px);
}

.headerDay{
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
}

.addTaskBtn{
    border: 2px solid rgb(111, 111, 111);
    background: none;
    font-size: 16px;
    background-color: #2f2d2f;
    border-radius: 10px;
    padding: 8px 20px;
    outline: none;
    margin-top: 10px;
}
.addTaskBtn:hover{
    border: 2px solid rgb(173, 173, 173);
    background-color: #696769;
    transform: scale(1.01);
}
.addTaskBtn:active{
    transform: scale(1);
}

.tasks{
    display: flex;
    flex-direction: column;
}

.task{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
    justify-content: center;
}

.task-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.checkbox-name-container{
    display: flex;
    gap: 10px;
}


input[type="checkbox"] {
  appearance: none;
  background: #eaeaea;
  outline: none;
  border: none;
  height: 1.75em;
  width: 1.75em;
  border-radius: 100%;
  vertical-align: text-bottom;
  position: relative;
  cursor: pointer;
  transition: transform 0.5s ease;
}
input[type="checkbox"] {
  border-radius: 10px;
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}
input[type="checkbox"]:checked::before {
  border-right: 5px solid #2ee700;
  border-bottom: 6px solid #33ff00;
  height: 90%;
  width: 30%;
  transform: rotate(50deg) translateY(-20%) translateX(-10%);
}
input[type="checkbox"]:active, input[type="checkbox"]:focus{
    background-color: #fff;
    border: 2px solid #fff;
    transform: scale(1.05);
}

.buttons{
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
}
.buttons img{
    width: 25px;
    height: 25px;
}

.date{
    background: none;
    border: 2px solid #747474;
    border-radius: 5px;
    width: 100px;
    outline: none;
    margin-top: 5px;
}

.edit, .delete{
    background: none;
    border: none;
}

.edit:hover, .delete:hover{
    transform: scale(1.07);
}

.edit:active, .delete:active{
    transform: scale(0.95);
}
/* CONTENT STYLES */


/* FOOTER STYLES */
#footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    background-color: #5a5a5a;
    font-size: clamp(14px, 1vw, 18px);
    padding: 10px;
}
#footer img{
    width: 25px;
    height: 25px;
    border-radius: 40px;
}
#footer img:hover{
    box-shadow: 0 0 5px rgb(9, 183, 0);
    transform: scale(1.1);
}
/* FOOTER STYLES */`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;;;AAGA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,wBAAwB;AAC5B;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAAmD;AACvD;AACA;IACI,yDAAqD;AACzD;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iCAAiC;AACrC;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,YAAY;IACZ,yDAAyD;AAC7D;AACA,mBAAmB;;;AAGnB,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,0DAA0D;AAC5D;AACA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;AACA,mBAAmB;;;AAGnB,kBAAkB;AAClB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,yBAAyB;IACzB,iCAAiC;IACjC,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,kCAAkC;IAClC,qBAAqB;AACzB;AACA,kBAAkB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: #d5d5d5;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #232023;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\nbutton{\r\n    cursor: pointer;\r\n}\r\n\r\n#logoImg{\r\n    width: 110px;\r\n    border-radius: 100px;\r\n    margin-left: 2vw;\r\n}\r\n\r\n#header{\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: clamp(28px, 5vw, 38px);\r\n    font-weight: 700;\r\n    background-color: #5a5a5a;\r\n    gap: 10px;\r\n}\r\n\r\n#main{\r\n    display: flex;\r\n    flex-grow: 1;\r\n    background-color: #232023;\r\n}\r\n\r\n\r\n/* SIDEBAR STYLES */\r\n#sidebar{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #2f2d2f;\r\n    padding: 30px;\r\n    width: clamp(220px, 30vw, 300px);\r\n}\r\n\r\n.buttonDays, #addProjectBtn{\r\n    display: flex;\r\n    align-items: center;\r\n    border: none;\r\n    background: none;\r\n    color: #dddddd;\r\n    padding: 10px 20px;\r\n    font-size: clamp(14px, 2vw, 16px);\r\n    font-weight: 700;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    gap: 10px;\r\n}\r\n.buttonDays:hover{\r\n    transform: scale(1.05);\r\n    background-color: #444444;\r\n}\r\n.buttonDays:active{\r\n    transform: scale(0.99);\r\n}\r\n.buttonDays:focus{\r\n    background-color: #444444;\r\n}\r\n\r\n.with-icon::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n#inbox::before {\r\n    background-image: url('../assets/all.png');\r\n}\r\n#today::before {\r\n    background-image: url('../assets/availability.png');\r\n}\r\n#thisWeek::before {\r\n    background-image: url('../assets/bulletin-board.png');\r\n}\r\n\r\n#addProjectBtn{\r\n    background-color: #232023;\r\n    margin: 0 10px;\r\n    font-size: clamp(12px, 2vw, 14px);\r\n}\r\n#addProjectBtn:hover{\r\n    background-color: #545454;\r\n}\r\n#addProjectBtn::before{\r\n    width: 15px;\r\n    height: 15px;\r\n    background-image: url('../assets/plus-symbol-button.png');\r\n}\r\n/* SIDEBAR STYLES */\r\n\r\n\r\n/* CONTENT STYLES */\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    padding: 50px clamp(50px, 12vw, 200px);\r\n}\r\n\r\n.headerDay{\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.addTaskBtn{\r\n    border: 2px solid rgb(111, 111, 111);\r\n    background: none;\r\n    font-size: 16px;\r\n    background-color: #2f2d2f;\r\n    border-radius: 10px;\r\n    padding: 8px 20px;\r\n    outline: none;\r\n    margin-top: 10px;\r\n}\r\n.addTaskBtn:hover{\r\n    border: 2px solid rgb(173, 173, 173);\r\n    background-color: #696769;\r\n    transform: scale(1.01);\r\n}\r\n.addTaskBtn:active{\r\n    transform: scale(1);\r\n}\r\n\r\n.tasks{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    justify-content: center;\r\n}\r\n\r\n.task-info{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.checkbox-name-container{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"] {\r\n  appearance: none;\r\n  background: #eaeaea;\r\n  outline: none;\r\n  border: none;\r\n  height: 1.75em;\r\n  width: 1.75em;\r\n  border-radius: 100%;\r\n  vertical-align: text-bottom;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: transform 0.5s ease;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 10px;\r\n}\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\ninput[type=\"checkbox\"]:checked::before {\r\n  border-right: 5px solid #2ee700;\r\n  border-bottom: 6px solid #33ff00;\r\n  height: 90%;\r\n  width: 30%;\r\n  transform: rotate(50deg) translateY(-20%) translateX(-10%);\r\n}\r\ninput[type=\"checkbox\"]:active, input[type=\"checkbox\"]:focus{\r\n    background-color: #fff;\r\n    border: 2px solid #fff;\r\n    transform: scale(1.05);\r\n}\r\n\r\n.buttons{\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.buttons img{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n.date{\r\n    background: none;\r\n    border: 2px solid #747474;\r\n    border-radius: 5px;\r\n    width: 100px;\r\n    outline: none;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit, .delete{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.edit:hover, .delete:hover{\r\n    transform: scale(1.07);\r\n}\r\n\r\n.edit:active, .delete:active{\r\n    transform: scale(0.95);\r\n}\r\n/* CONTENT STYLES */\r\n\r\n\r\n/* FOOTER STYLES */\r\n#footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n    font-weight: 600;\r\n    background-color: #5a5a5a;\r\n    font-size: clamp(14px, 1vw, 18px);\r\n    padding: 10px;\r\n}\r\n#footer img{\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 40px;\r\n}\r\n#footer img:hover{\r\n    box-shadow: 0 0 5px rgb(9, 183, 0);\r\n    transform: scale(1.1);\r\n}\r\n/* FOOTER STYLES */"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/all.png":
/*!****************************!*\
  !*** ./src/assets/all.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "all.png";

/***/ }),

/***/ "./src/assets/availability.png":
/*!*************************************!*\
  !*** ./src/assets/availability.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "availability.png";

/***/ }),

/***/ "./src/assets/bulletin-board.png":
/*!***************************************!*\
  !*** ./src/assets/bulletin-board.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bulletin-board.png";

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.png";

/***/ }),

/***/ "./src/assets/edit-text.png":
/*!**********************************!*\
  !*** ./src/assets/edit-text.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit-text.png";

/***/ }),

/***/ "./src/assets/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/assets/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-mark-white.svg";

/***/ }),

/***/ "./src/assets/plus-symbol-button.png":
/*!*******************************************!*\
  !*** ./src/assets/plus-symbol-button.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus-symbol-button.png";

/***/ }),

/***/ "./src/assets/transparent-bg-honey-badger.png":
/*!****************************************************!*\
  !*** ./src/assets/transparent-bg-honey-badger.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "transparent-bg-honey-badger.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");




(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundlee0da7b8a5f1eb168d527.js.map