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
/* harmony import */ var _assets_sad_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sad.png */ "./src/assets/sad.png");
/* harmony import */ var _assets_party_popper_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/party-popper.png */ "./src/assets/party-popper.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var _allTasks = /*#__PURE__*/new WeakMap();
var _doneTasks = /*#__PURE__*/new WeakMap();
var _projects = /*#__PURE__*/new WeakMap();
var Tasks = /*#__PURE__*/function () {
  function Tasks() {
    _classCallCheck(this, Tasks);
    _classPrivateFieldInitSpec(this, _allTasks, []);
    _classPrivateFieldInitSpec(this, _doneTasks, []);
    _classPrivateFieldInitSpec(this, _projects, {});
  }

  // adding task to array with all tasks
  return _createClass(Tasks, [{
    key: "addTask",
    value: function addTask(task, activeTab) {
      if (activeTab && activeTab !== "inbox" && activeTab !== "today" && activeTab !== "thisWeek" && activeTab !== "done") {
        if (_classPrivateFieldGet(_projects, this).hasOwnProperty(activeTab)) {
          _classPrivateFieldGet(_projects, this)[activeTab].push(task);
        } else {
          console.error("Project '".concat(activeTab, "' does not exist."));
        }
      } else {
        _classPrivateFieldGet(_allTasks, this).push(task);
      }
    }

    // adding task to array with done tasks
  }, {
    key: "addDoneTask",
    value: function addDoneTask(doneTask) {
      _classPrivateFieldGet(_doneTasks, this).push(doneTask);
    }

    // adding specific project
  }, {
    key: "addProject",
    value: function addProject(projectName) {
      if (projectName.trim() !== '') {
        _classPrivateFieldGet(_projects, this)[projectName] = [];
        return true;
      } else {
        console.error("Project name cannot be empty");
        return false;
      }
    }

    // removing task from array with all/done tasks
  }, {
    key: "removeTask",
    value: function removeTask(task) {
      var indexAllTasks = _classPrivateFieldGet(_allTasks, this).indexOf(task);
      var indexDoneTasks = _classPrivateFieldGet(_doneTasks, this).indexOf(task);
      if (indexAllTasks !== -1) {
        _classPrivateFieldGet(_allTasks, this).splice(indexAllTasks, 1);
      }
      if (indexDoneTasks !== -1) {
        _classPrivateFieldGet(_doneTasks, this).splice(indexDoneTasks, 1);
      }

      // Check if the active tab is the inbox tab
      this.displayNoTasksMessage();
    }

    // removing task from done tasks array
  }, {
    key: "removeDoneTask",
    value: function removeDoneTask(taskElement) {
      var index = _classPrivateFieldGet(_doneTasks, this).indexOf(taskElement);
      if (index !== -1) {
        _classPrivateFieldGet(_doneTasks, this).splice(index, 1);
      }
    }

    // deleting specific project
  }, {
    key: "removeProject",
    value: function removeProject(projectName) {
      delete _classPrivateFieldGet(_projects, this)[projectName];
    }

    // deleting task from the specific project
  }, {
    key: "removeTaskFromProject",
    value: function removeTaskFromProject(projectName, task) {
      if (_classPrivateFieldGet(_projects, this).hasOwnProperty(projectName)) {
        var projectTasks = _classPrivateFieldGet(_projects, this)[projectName];
        var taskIndex = projectTasks.indexOf(task);
        if (taskIndex !== -1) {
          projectTasks.splice(taskIndex, 1);
        }
      } else {
        console.error("Project '".concat(projectName, "' does not exist."));
      }
    }

    // getting all tasks from array
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      return _classPrivateFieldGet(_allTasks, this);
    }

    // getting done tasks from array
  }, {
    key: "getDoneTasks",
    value: function getDoneTasks() {
      return _classPrivateFieldGet(_doneTasks, this);
    }
  }, {
    key: "getProjectTasks",
    value: function getProjectTasks(projectName) {
      var tasks = _classPrivateFieldGet(_projects, this)[projectName];
      return tasks;
    }

    // setting min and max date that person can add task on
  }, {
    key: "setMinMaxTime",
    value: function setMinMaxTime(dateInput) {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();
      if (day > new Date(year, month, 0).getDate()) {
        month += 1;
        day -= new Date(year, month - 1, 0).getDate();
      }

      // Format today's date as YYYY-MM-DD
      var min = "".concat(year, "-").concat(month < 10 ? '0' + month : month, "-").concat(day < 10 ? '0' + day : day);

      // Calculate the maximum date (365 days from today)
      var maxYear = year;
      var maxMonth = month;
      var maxDay = day + 3650;

      // Check if the calculated day exceeds the number of days in the current month
      while (maxDay > new Date(maxYear, maxMonth, 0).getDate()) {
        // If so, adjust the month and day
        maxDay -= new Date(maxYear, maxMonth, 0).getDate();
        maxMonth += 1;

        // If the month exceeds 12, increment the year and reset the month to 1
        if (maxMonth > 12) {
          maxYear += 1;
          maxMonth = 1;
        }
      }

      // Format the maximum date as YYYY-MM-DD
      var max = "".concat(maxYear, "-").concat(maxMonth < 10 ? '0' + maxMonth : maxMonth, "-").concat(maxDay < 10 ? '0' + maxDay : maxDay);

      // Set minimum and maximum dates
      dateInput.min = min;
      dateInput.max = max;
    }

    // method for making container with message when there is no done tasks 
  }, {
    key: "noDoneTasksYet",
    value: function noDoneTasksYet(text) {
      var noTasksContainer = document.createElement("p");
      noTasksContainer.textContent = text;
      noTasksContainer.classList.add("no-done-tasks");
      var sadImg = document.createElement("img");
      sadImg.src = _assets_sad_png__WEBPACK_IMPORTED_MODULE_0__;
      noTasksContainer.appendChild(sadImg);
      return noTasksContainer;
    }

    // method for making container with message when there is no tasks 
  }, {
    key: "noTasksYet",
    value: function noTasksYet(text) {
      var noTasksContainer = document.createElement("p");
      noTasksContainer.textContent = text;
      noTasksContainer.classList.add("no-tasks");
      var congratulationsImg = document.createElement("img");
      congratulationsImg.src = _assets_party_popper_png__WEBPACK_IMPORTED_MODULE_1__;
      noTasksContainer.appendChild(congratulationsImg);
      return noTasksContainer;
    }

    // method for checking and displaying when there is no done tasks 
  }, {
    key: "displayNoTasksMessage",
    value: function displayNoTasksMessage() {
      var tasksContainer = document.querySelector(".tasks");
      if (tasksContainer.children.length === 0) {
        var activeTab = document.querySelector(".active-tab").id;
        var noTasksContainer = null;
        switch (activeTab) {
          case "inbox":
            noTasksContainer = this.noTasksYet("No tasks yet");
            break;
          case "today":
            noTasksContainer = this.noTasksYet("No tasks today yet");
            break;
          case "thisWeek":
            noTasksContainer = this.noTasksYet("No tasks for this week yet");
            break;
          case "done":
            noTasksContainer = this.noDoneTasksYet("No done tasks yet");
            break;
          default:
            noTasksContainer = this.noTasksYet("No tasks in project \"".concat(activeTab, "\" yet"));
            break;
        }
        tasksContainer.appendChild(noTasksContainer);
      }
    }

    // method for displaying all tasks according to the active tab-button
  }, {
    key: "displayAll",
    value: function displayAll() {
      var content = document.getElementById("content");
      var tasksContainer = document.querySelector(".tasks");
      var activeTab = document.querySelector(".active-tab").id;
      var today = new Date();
      var tasksToDisplay = null;

      // If tasks container doesn't exist, create a new one
      if (!tasksContainer) {
        tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks");
        content.appendChild(tasksContainer);
      } else {
        tasksContainer.innerHTML = "";
      }
      switch (activeTab) {
        case "inbox":
          tasksToDisplay = _classPrivateFieldGet(_allTasks, this).filter(function (task) {
            return !task.classList.contains("done");
          });
          if (tasksToDisplay.length === 0) {
            var noTasksContainer = this.noTasksYet("No tasks yet");
            tasksContainer.appendChild(noTasksContainer);
          } else {
            tasksToDisplay.forEach(function (task) {
              tasksContainer.appendChild(task);
            });
          }
          break;
        case "today":
          var todayDateString = today.toISOString().split('T')[0];

          // Filter tasks with today's date
          tasksToDisplay = _classPrivateFieldGet(_allTasks, this).filter(function (task) {
            var taskDate = task.querySelector(".date-input").value;
            var isUnchecked = !task.querySelector(".custom-checkbox").checked;
            return taskDate === todayDateString && isUnchecked;
          });
          if (tasksToDisplay.length === 0) {
            var _noTasksContainer = this.noTasksYet("No tasks today yet");
            tasksContainer.appendChild(_noTasksContainer);
          } else {
            tasksToDisplay.forEach(function (task) {
              tasksContainer.appendChild(task);
            });
          }
          break;
        case "thisWeek":
          var firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Get the first day of the current week
          var lastDayOfWeek = new Date(today.setDate(firstDayOfWeek.getDate() + 7)); // Get the last day of the current week

          tasksToDisplay = _classPrivateFieldGet(_allTasks, this).filter(function (task) {
            var taskDate = new Date(task.querySelector(".date-input").value);
            var isUnchecked = !task.querySelector(".custom-checkbox").checked;
            return taskDate >= firstDayOfWeek && taskDate <= lastDayOfWeek && isUnchecked;
          });
          if (tasksToDisplay.length === 0) {
            var _noTasksContainer2 = this.noTasksYet("No tasks for this week yet");
            tasksContainer.appendChild(_noTasksContainer2);
          } else {
            tasksToDisplay.forEach(function (task) {
              tasksContainer.appendChild(task);
            });
          }
          break;
        case "done":
          if (_classPrivateFieldGet(_doneTasks, this).length === 0) {
            var _noTasksContainer3 = this.noDoneTasksYet("No done tasks yet");
            tasksContainer.appendChild(_noTasksContainer3);
          } else {
            _classPrivateFieldGet(_doneTasks, this).forEach(function (task) {
              tasksContainer.appendChild(task);
            });
          }
          break;
        default:
          tasksToDisplay = _classPrivateFieldGet(_projects, this)[activeTab].filter(function (task) {
            return !task.classList.contains("done");
          });
          if (tasksToDisplay.length === 0) {
            var _noTasksContainer4 = this.noTasksYet("No tasks in project \"".concat(activeTab, "\" yet"));
            tasksContainer.appendChild(_noTasksContainer4);
          } else {
            tasksToDisplay.forEach(function (task) {
              tasksContainer.appendChild(task);
            });
          }
          break;
      }
      content.appendChild(tasksContainer);
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


// function for creating footer
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


// function for creating header
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
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");

function generateMain() {
  var body = document.querySelector("body");
  var main = document.createElement("div");
  main.setAttribute("id", "main");
  body.appendChild(main);

  // create main content and sidebar
  new _mainContent__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/delete.png */ "./src/assets/delete.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Content = /*#__PURE__*/function () {
  // initialize content and sidebar classes
  function Content() {
    _classCallCheck(this, Content);
    this.sidebar = new _sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.main = document.getElementById("main");
    this.content = document.createElement("div");
    this.content.setAttribute("id", "content");
    this.main.appendChild(this.content);
    this.allTasks = _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.getAllTasks();
    this.sidebarEventListeners();
    this.activeTab = null;
  }

  // adding event listeners for all sidebar buttons
  return _createClass(Content, [{
    key: "sidebarEventListeners",
    value: function sidebarEventListeners() {
      var _this = this;
      var inboxBtn = document.getElementById("inbox");
      var todayBtn = document.getElementById("today");
      var thisWeekBtn = document.getElementById("thisWeek");
      var addProjectBtn = document.getElementById("addProjectBtn");
      var doneBtn = document.getElementById("done");
      inboxBtn.addEventListener("click", function () {
        return _this.tabClicked(inboxBtn);
      });
      todayBtn.addEventListener("click", function () {
        return _this.tabClicked(todayBtn);
      });
      thisWeekBtn.addEventListener("click", function () {
        return _this.tabClicked(thisWeekBtn);
      });
      doneBtn.addEventListener("click", function () {
        return _this.tabClicked(doneBtn);
      });
      addProjectBtn.addEventListener("click", function () {
        return _this.createProjectForm();
      });
      this.tabClicked(inboxBtn);
    }

    // tracking active button of the sidebar
  }, {
    key: "tabClicked",
    value: function tabClicked(tabButton) {
      var allTabs = document.querySelectorAll(".buttonDays");
      allTabs.forEach(function (tab) {
        tab.classList.remove("active-tab");
      });
      tabButton.classList.add("active-tab");
      this.activeTab = tabButton.id;
      this.clearContent();
      switch (this.activeTab) {
        case "inbox":
          this.inboxTasks();
          break;
        case "today":
          this.todayTasks();
          break;
        case "thisWeek":
          this.thisWeekTasks();
          break;
        case "done":
          this.doneTasks();
          break;
        default:
          this.displayProjectTasks(this.activeTab);
          break;
      }
    }

    // displaying all content that belongs to inbox tab-button
  }, {
    key: "inboxTasks",
    value: function inboxTasks() {
      this.createHeaderDay("Inbox");
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
      this.createAddTaskBtn();
    }

    // displaying all content that belongs to today tab-button
  }, {
    key: "todayTasks",
    value: function todayTasks() {
      this.createHeaderDay("Today");
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
      this.createAddTaskBtn();
    }

    // displaying all content that belongs to this week tab-button
  }, {
    key: "thisWeekTasks",
    value: function thisWeekTasks() {
      this.createHeaderDay("This week");
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
      this.createAddTaskBtn();
    }

    // displaying all content that belongs to done tab-button
  }, {
    key: "doneTasks",
    value: function doneTasks() {
      this.createHeaderDay("Done");
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
    }

    // displaying specific project tasks
  }, {
    key: "displayProjectTasks",
    value: function displayProjectTasks(projectName) {
      this.clearContent();
      this.createHeaderDay(projectName);
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
      this.createAddTaskBtn();
    }

    // when project is added make the project tab and display "add project" button
  }, {
    key: "addProjectButtonGeneration",
    value: function addProjectButtonGeneration(newProjectForm, projectName) {
      var _this2 = this;
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "cancel";
      if (event === "add") {
        var isProjectAdded = _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.addProject(projectName.value);
        if (isProjectAdded) {
          var deleteBtn = document.createElement("button");
          var deleteIconImg = document.createElement("img");
          deleteIconImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_2__;
          deleteBtn.appendChild(deleteIconImg);
          deleteBtn.classList.add("delete-project");
          deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            _this2.deleteProjectHandler(projectName.value);
          });
          var newProjectTab = this.sidebar.createTab(projectName.value, projectName.value);
          newProjectTab.classList.add("project-tab");
          newProjectTab.setAttribute("id", projectName.value);
          newProjectTab.appendChild(deleteBtn);
          newProjectTab.addEventListener("click", function () {
            return _this2.tabClicked(newProjectTab);
          });
        }
      }
      newProjectForm.remove();
      var ProjectBtn = this.sidebar.createProjectBtn();
      ProjectBtn.addEventListener("click", function () {
        return _this2.createProjectForm();
      });
    }

    // handler for deleting project
  }, {
    key: "deleteProjectHandler",
    value: function deleteProjectHandler(projectName) {
      var projectToDelete = document.getElementById(projectName);
      projectToDelete.remove();
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.removeProject(projectToDelete.id);
      if (this.activeTab === projectName) {
        this.clearContent();
      }
    }

    // create form for adding new project
  }, {
    key: "createProjectForm",
    value: function createProjectForm() {
      var _this3 = this;
      var removeAddProjectBtn = document.getElementById("addProjectBtn");
      removeAddProjectBtn.remove();
      var newProjectForm = document.createElement("form");
      newProjectForm.classList.add("add-new-project-form");
      var projectName = document.createElement("input");
      var buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("add-cancel");
      var addProjectBtn = document.createElement("input");
      var cancel = document.createElement("input");
      buttonsContainer.appendChild(addProjectBtn);
      buttonsContainer.appendChild(cancel);
      projectName.type = "text";
      projectName.placeholder = "Project name";
      projectName.classList.add("project-name-form");
      addProjectBtn.type = "button";
      addProjectBtn.value = "Add project";
      addProjectBtn.classList.add("add-project-form-button");
      addProjectBtn.addEventListener("click", function () {
        _this3.addProjectButtonGeneration(newProjectForm, projectName, "add");
      });
      cancel.type = "button";
      cancel.value = "Cancel";
      cancel.classList.add("cancel-project-form-button");
      cancel.addEventListener("click", function () {
        _this3.addProjectButtonGeneration(newProjectForm, projectName);
      });
      newProjectForm.appendChild(projectName);
      newProjectForm.appendChild(buttonsContainer);
      var sidebar = document.getElementById("sidebar");
      sidebar.appendChild(newProjectForm);
    }

    // method to create header for active tab-button
  }, {
    key: "createHeaderDay",
    value: function createHeaderDay(textContent) {
      var headerDay = document.createElement("div");
      headerDay.classList.add("headerDay");
      headerDay.textContent = textContent;
      this.content.appendChild(headerDay);
    }

    // create button for adding new task
  }, {
    key: "createAddTaskBtn",
    value: function createAddTaskBtn() {
      var _this4 = this;
      var btn = document.createElement("button");
      btn.classList.add("addTaskBtn");
      btn.textContent = "+ Add task";
      btn.addEventListener("click", function () {
        return _this4.displayTaskForm();
      });
      this.content.appendChild(btn);
    }

    // create form for adding new task properties
  }, {
    key: "createTaskForm",
    value: function createTaskForm() {
      var _this5 = this;
      var taskProperties = document.createElement("form");
      taskProperties.classList.add("add-task-form");
      var taskText = document.createElement("input");
      var date = document.createElement("div");
      var dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.classList.add("date-input");
      var hr = document.createElement("hr");
      var buttonContainer = document.createElement("div");
      buttonContainer.classList.add("add-cancel");
      var addTaskForm = document.createElement("input");
      var cancel = document.createElement("input");
      buttonContainer.appendChild(addTaskForm);
      buttonContainer.appendChild(cancel);
      taskText.type = "text";
      taskText.placeholder = "Task name";
      taskText.classList.add("task-text-form");
      date.appendChild(dateInput);
      date.classList.add("date-input");
      addTaskForm.type = "button";
      addTaskForm.value = "Add task";
      addTaskForm.classList.add("add-task-form-button");
      addTaskForm.addEventListener("click", function () {
        _this5.addNewTask(taskText.value, dateInput.value);
        _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.displayAll();
        taskProperties.remove();
        _this5.createAddTaskBtn();
      });
      cancel.type = "button";
      cancel.value = "Cancel";
      cancel.classList.add("cancel-form-button");
      cancel.addEventListener("click", function () {
        taskProperties.remove();
        _this5.createAddTaskBtn();
      });
      taskProperties.appendChild(taskText);
      taskProperties.appendChild(date);
      taskProperties.appendChild(hr);
      taskProperties.appendChild(buttonContainer);
      _task_js__WEBPACK_IMPORTED_MODULE_0__.tasks.setMinMaxTime(dateInput);
      this.content.appendChild(taskProperties);
    }

    // display form for adding new task properties
  }, {
    key: "displayTaskForm",
    value: function displayTaskForm() {
      // delete button for adding tasks when form for adding task is displayed
      var addTaskBtn = this.content.querySelector('.addTaskBtn');
      if (addTaskBtn) {
        addTaskBtn.remove();
      }
      this.createTaskForm();
    }

    // adding new task 
  }, {
    key: "addNewTask",
    value: function addNewTask(taskText) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : None;
      if (taskText) {
        var newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskText, date, this.activeTab);
        return newTask;
      }
    }

    // clear all content in content container 
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sidebar = /*#__PURE__*/function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);
    var main = document.getElementById("main");

    // create sidebar
    this.sidebar = document.createElement("div");
    this.sidebar.setAttribute("id", "sidebar");

    // create tab for displaying inbox (all) tasks
    this.createTab("Inbox", "inbox");
    // create tab for displaying today tasks
    this.createTab("Today", "today");
    // create tab for displaying tasks for this week
    this.createTab("This week", "thisWeek");
    // create tab for displaying done tasks
    this.createTab("Done", "done");

    // create section for projects
    this.createProjectSection();

    // append sidebar to main content
    main.appendChild(this.sidebar);
  }

  // creating different tabs in sidebar
  return _createClass(Sidebar, [{
    key: "createTab",
    value: function createTab(textContent, id) {
      var tab = document.createElement("button");
      var tabText = document.createElement("p");
      tabText.classList.add("tab-text");

      // Set the text content of the text element
      tabText.textContent = textContent;
      tab.appendChild(tabText);
      tab.classList.add("buttonDays", "with-icon");
      tab.setAttribute("id", id);
      this.sidebar.appendChild(tab);
      return tab;
    }

    // create section for projects
  }, {
    key: "createProjectSection",
    value: function createProjectSection() {
      var projectsHeader = document.createElement("h2");
      projectsHeader.textContent = "Projects";
      this.sidebar.appendChild(projectsHeader);
      var projectsButton = this.createProjectBtn();
      return {
        projectsHeader: projectsHeader,
        projectsButton: projectsButton
      };
    }
  }, {
    key: "createProjectBtn",
    value: function createProjectBtn() {
      var projectsButton = document.createElement("button");
      projectsButton.textContent = "Add project";
      projectsButton.setAttribute("id", "addProjectBtn");
      projectsButton.classList.add("buttonDays", "with-icon");
      this.sidebar.appendChild(projectsButton);
      return projectsButton;
    }
  }]);
}();


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
  function Task(name, date, activeTab) {
    var _this = this;
    _classCallCheck(this, Task);
    this.name = name;
    this.date = date;
    this.taskElement = this.createTaskElement();
    _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.addTask(this.taskElement, activeTab);
    this.taskElement.querySelector(".delete").addEventListener("click", this.deleteTaskHandler.bind(this));
    var dateInput = this.taskElement.querySelector(".date-input");
    dateInput.addEventListener("change", function () {
      return _this.updateTaskDate(dateInput.value);
    });
  }

  // all methods needed to create task
  return _createClass(Task, [{
    key: "createTaskElement",
    value: function createTaskElement() {
      var taskContainer = this.createTaskContainer();
      var taskInfo = this.createTaskInfo();
      var buttons = this.createButtons();
      var checkboxNameContainer = this.createCheckboxNameContainer();
      var isDoneCheckbox = this.createIsDoneCheckbox();
      var taskName = this.createTaskName();
      var dateContainer = this.createDateContainer();
      var dateInput = this.createDateInput();
      var overlay = this.createOverlay();
      var editBtn = this.createEditButton();
      var deleteBtn = this.createDeleteButton();

      // Append elements to their respective containers
      checkboxNameContainer.appendChild(isDoneCheckbox);
      checkboxNameContainer.appendChild(taskName);
      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      taskInfo.appendChild(checkboxNameContainer);
      taskInfo.appendChild(buttons);
      dateContainer.appendChild(dateInput);
      dateContainer.appendChild(overlay);
      taskContainer.appendChild(taskInfo);
      taskContainer.appendChild(dateContainer);
      return taskContainer;
    }
  }, {
    key: "createTaskContainer",
    value: function createTaskContainer() {
      var taskContainer = document.createElement("div");
      taskContainer.classList.add("task");
      return taskContainer;
    }
  }, {
    key: "createTaskInfo",
    value: function createTaskInfo() {
      var taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      return taskInfo;
    }
  }, {
    key: "createButtons",
    value: function createButtons() {
      var buttons = document.createElement("div");
      buttons.classList.add("buttons");
      return buttons;
    }
  }, {
    key: "createCheckboxNameContainer",
    value: function createCheckboxNameContainer() {
      var checkboxNameContainer = document.createElement("div");
      checkboxNameContainer.classList.add("checkbox-name-container");
      return checkboxNameContainer;
    }
  }, {
    key: "createIsDoneCheckbox",
    value: function createIsDoneCheckbox() {
      var _this2 = this;
      var isDoneCheckbox = document.createElement("input");
      isDoneCheckbox.classList.add("custom-checkbox");
      isDoneCheckbox.type = "checkbox";
      isDoneCheckbox.addEventListener("change", function () {
        return _this2.handleIsDoneChange(isDoneCheckbox);
      });
      return isDoneCheckbox;
    }
  }, {
    key: "handleIsDoneChange",
    value: function handleIsDoneChange(isDoneCheckbox) {
      var _this3 = this;
      if (isDoneCheckbox.checked) {
        this.taskElement.classList.add("done");
        _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.addDoneTask(this.taskElement);
      } else {
        this.taskElement.classList.remove("done");
        _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.removeDoneTask(this.taskElement);
      }
      setTimeout(function () {
        _this3.taskElement.remove();
        _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.displayNoTasksMessage();
      }, 450);
    }
  }, {
    key: "createTaskName",
    value: function createTaskName() {
      var taskName = document.createElement("div");
      taskName.classList.add("task-name");
      taskName.textContent = this.name;
      return taskName;
    }
  }, {
    key: "createDateContainer",
    value: function createDateContainer() {
      var dateContainer = document.createElement("div");
      dateContainer.classList.add("date-container");
      return dateContainer;
    }
  }, {
    key: "createDateInput",
    value: function createDateInput() {
      var activeTab = document.querySelector(".active-tab");
      if (activeTab.id === "today" && this.date === "") {
        var today = new Date();
        var todayString = today.toISOString().split('T')[0];
        this.date = todayString;
      }
      var dateInput = document.createElement("input");
      dateInput.classList.add("date-input");
      dateInput.type = "date";
      dateInput.value = this.date;
      dateInput.style.zIndex = "2";
      dateInput.style.opacity = "0";
      _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.setMinMaxTime(dateInput);
      return dateInput;
    }
  }, {
    key: "createOverlay",
    value: function createOverlay() {
      var overlay = document.createElement("input");
      overlay.type = "text";
      overlay.disabled = true;
      overlay.placeholder = "No date";
      overlay.classList.add("overlay");
      overlay.style.position = "absolute";
      this.handleDate(overlay);
      return overlay;
    }
  }, {
    key: "createEditButton",
    value: function createEditButton() {
      var _this4 = this;
      var editBtn = document.createElement("button");
      var editIconImg = document.createElement("img");
      editIconImg.src = _assets_edit_text_png__WEBPACK_IMPORTED_MODULE_0__;
      editBtn.appendChild(editIconImg);
      editBtn.classList.add("edit");
      editBtn.addEventListener("click", function () {
        _this4.editTask();
      });
      return editBtn;
    }
  }, {
    key: "createDeleteButton",
    value: function createDeleteButton() {
      var _this5 = this;
      var deleteBtn = document.createElement("button");
      var deleteIconImg = document.createElement("img");
      deleteIconImg.src = _assets_delete_png__WEBPACK_IMPORTED_MODULE_1__;
      deleteBtn.appendChild(deleteIconImg);
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", function () {
        return _this5.deleteTaskHandler();
      });
      return deleteBtn;
    }

    // delete task
  }, {
    key: "deleteTaskHandler",
    value: function deleteTaskHandler() {
      _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.removeTask(this.taskElement);
      this.removeFromProject();
      this.taskElement.remove();
    }

    // deleting task from specific project
  }, {
    key: "removeFromProject",
    value: function removeFromProject() {
      var activeTab = document.querySelector(".active-tab").id;

      // If the task belongs to a project, remove it from the project
      if (activeTab !== "inbox" && activeTab !== "today" && activeTab !== "thisWeek" && activeTab !== "done") {
        _allTasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.removeTaskFromProject(activeTab, this.taskElement);
      }
    }

    // updating task date
  }, {
    key: "updateTaskDate",
    value: function updateTaskDate(newDate) {
      this.date = newDate;
      var overlay = this.taskElement.querySelector(".overlay");
      this.handleDate(overlay);
    }

    // form for editing task
  }, {
    key: "editTask",
    value: function editTask() {
      var _this6 = this;
      var form = document.createElement("form");
      form.classList.add("edit-task-form");
      var taskNameInput = document.createElement("input");
      taskNameInput.type = "text";
      taskNameInput.placeholder = "Enter task name";
      taskNameInput.value = this.name;
      taskNameInput.classList.add("task-text-form");
      var date = document.createElement("div");
      date.classList.add("date-input");
      var dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.classList.add("date-input");
      dateInput.value = this.date; // Populate with current task date

      date.appendChild(dateInput);
      var hr = document.createElement("hr");
      var buttonContainer = document.createElement("div");
      buttonContainer.classList.add("add-cancel");
      var submitButton = document.createElement("button");
      submitButton.type = "button";
      submitButton.textContent = "Save Changes";
      submitButton.classList.add("edit-task-form-button");
      submitButton.addEventListener("click", function () {
        _this6.updateTask(taskNameInput.value, dateInput.value);
        form.remove();
      });
      var cancelButton = document.createElement("button");
      cancelButton.type = "button";
      cancelButton.textContent = "Cancel";
      cancelButton.classList.add("cancel-form-button");
      cancelButton.addEventListener("click", function () {
        form.remove();
      });
      buttonContainer.appendChild(submitButton);
      buttonContainer.appendChild(cancelButton);

      // Append elements to form
      form.appendChild(taskNameInput);
      form.appendChild(date);
      form.appendChild(hr);
      form.appendChild(buttonContainer);

      // Append form to the document
      var content = document.getElementById("content");
      var lastChild = content.lastElementChild;

      // Insert the form before the last child
      content.insertBefore(form, lastChild);
    }

    // updating task
  }, {
    key: "updateTask",
    value: function updateTask(newName, newDate) {
      this.name = newName;
      this.date = newDate;

      // Update task name displayed in the UI
      var taskNameElement = this.taskElement.querySelector(".task-name");
      taskNameElement.textContent = newName;
      this.taskElement.name = newName;

      // Update task date displayed in the UI
      this.updateTaskDate(newDate);
    }

    // handling proper displaying of the date in the container
  }, {
    key: "handleDate",
    value: function handleDate(overlay) {
      var today = new Date();
      var tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      var todayString = today.toISOString().split('T')[0];
      var tomorrowString = tomorrow.toISOString().split('T')[0];
      if (this.date === "") {} else if (this.date === todayString) {
        overlay.placeholder = "Today";
        overlay.classList.remove("overlay-tomorrow", "overlay-anyday");
        overlay.classList.add("overlay-today");
      } else if (this.date === tomorrowString) {
        overlay.placeholder = "Tomorrow";
        overlay.classList.remove("overlay-today", "overlay-anyday");
        overlay.classList.add("overlay-tomorrow");
      } else {
        var dateObj = new Date(this.date);
        overlay.classList.remove("overlay-today", "overlay-tomorrow");
        overlay.classList.add("overlay-anyday");
        var options = {
          day: "numeric",
          month: "short",
          year: "numeric"
        };
        var formattedDate = dateObj.toLocaleDateString("en-GB", options);
        overlay.placeholder = formattedDate;
      }
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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/done.png */ "./src/assets/done.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/project-management.png */ "./src/assets/project-management.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/plus-symbol-button.png */ "./src/assets/plus-symbol-button.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/sad.png */ "./src/assets/sad.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/party-popper.png */ "./src/assets/party-popper.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
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
    width: clamp(220px, 30vw, 320px);
    min-width: 220px;
}

.buttonDays, #addProjectBtn{
    display: flex;
    align-items: center;
    text-align: start;
    border: none;
    background: none;
    color: #dddddd;
    padding: 0px 10% 0px 20px;
    font-size: clamp(14px, 2vw, 16px);
    font-weight: 700;
    border-radius: 10px;
    margin-bottom: 10px;
    gap: 10px;
    text-wrap: wrap;
}
#addProjectBtn{
    justify-content: center;
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
#done::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.project-tab{
    display: flex;
    justify-content: space-between;
    min-width: 170px;
}
.project-tab::before {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    min-width: 30px;
    min-height: 30px;
}

.tab-text{
    word-break: break-all;
    white-space: normal;
}

#addProjectBtn{
    background-color: #232023;
    margin: 0 10px;
    font-size: clamp(12px, 2vw, 14px);
    padding: 10px;
}
#addProjectBtn:hover{
    background-color: #545454;
}
#addProjectBtn::before{
    width: 15px;
    height: 15px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.add-task-form, .edit-task-form{
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(127, 127, 127);
    padding: 20px 15px 20px 15px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.add-new-project-form{
    display: flex;
    flex-direction: column;
    border: none;
    padding: 20px 15px 20px 15px;
    border-radius: 10px;
    margin-bottom: 10px;
}

input[type="text"]{
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
    padding-left: 7px;
    outline: none;
    color: #d3d3d3;
    font-weight: 500;
    font-size: 16px;
    background-color: #232023;
}

.project-name-form{
    display: flex;
    max-width: 300px;
    border-radius: 5px;
    border: none;
    margin: -20px 0 100px 0;
    padding: 7px 0 7px 10px;
    outline: none;
    color: #d3d3d3;
    font-weight: 500;
    font-size: 16px;
    background-color: #232023;
}

input[type="button"], .edit-task-form-button, .cancel-form-button{
    border-radius: 5px;
    background-color: #2f2d2f;
    font-weight: 600;
    font-size: 12px;
    padding: 5px 15px;
    cursor: pointer;
}

.add-cancel{
    display: flex;
    justify-content: end;
    gap: 5px;
}

.add-task-form-button, .edit-task-form-button, .add-project-form-button{
    border: 1px solid #2ee700;
}
.add-task-form-button:hover, .edit-task-form-button:hover, .add-project-form-button:hover{
    color: #000000;
    background-color: #2ee700;
}

.cancel-form-button, .cancel-project-form-button{
    border: 1px solid #dd2500;
}
.cancel-form-button:hover, .cancel-project-form-button:hover{
    background-color: #dd2500;
}

hr{
    width: 100%;
    border: 1px solid #898989;
    border-radius: 10px;
}
/* SIDEBAR STYLES */


/* CONTENT STYLES */
#content{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 50px clamp(50px, 12vw, 200px);
    box-sizing: border-box;
}

.headerDay{
    font-size: clamp(24px, 2vw, 32px);
    font-weight: 600;
    margin-bottom: 20px;
    word-break: break-all;
    white-space: normal;
}

.addTaskBtn{
    border: 2px solid rgb(111, 111, 111);
    background: none;
    font-size: clamp(12px, 2vw, 16px);
    background-color: #2f2d2f;
    border-radius: 10px;
    padding: 8px 20px;
    outline: none;
    margin-top: 10px;
}
.addTaskBtn:hover{
    border: 2px solid rgb(173, 173, 173);
    background-color: #696769;
    transform: scale(1.05);
    font-weight: 600;
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

input[type="date"]{
    background: none;
    border: 2px solid #747474;
    border-radius: 5px;
    margin-top: 5px;
    max-width: 110px;
    padding: 5px 15px;
    cursor: pointer;
}

.date-container{
    display: flex;
    align-items: center;
    color: #bfbfbf;
    cursor: pointer;
}

.date-input{
    display: flex;
    color: #bfbfbf;
    cursor: pointer;
}

::-webkit-calendar-picker-indicator { 
    background: transparent;
    width: 105px;
    height: 50px;
    position: absolute;
    margin-left: -15px;
    cursor: pointer;
}

.overlay-today::placeholder, .overlay-tomorrow::placeholder, .overlay-anyday::placeholder{
    font-size: 14px;
}

.overlay-today::placeholder{
    color: #00ff00;
}
.overlay-tomorrow::placeholder{
    color: #ffa500;
}
.overlay-anyday::placeholder{
    color: #00ddff;
}

.done{
    text-decoration: line-through;
}

.active-tab{
    background-color: #444444;
}

.buttons, .delete-project{
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
    border: none;
    border-radius: 10px;
    width: 110px;
    outline: none;
    margin-top: 5px;
}

.edit, .delete, .delete-project{
    background: none;
    border: none;
}

.delete-project img{
    width: 20px;
    height: 20px;
}

.edit:hover, .delete:hover{
    transform: scale(1.07);
}

.delete-project:hover{
    transform: scale(1.2);
}

.edit:active, .delete:active{
    transform: scale(0.95);
}

.no-done-tasks, .no-tasks{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: clamp(14px, 2vw, 24px);
    font-weight: 900;
    color: rgb(255, 238, 0);
    margin-top: -5px;
}
.no-done-tasks::after{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.no-done-tasks img, .no-tasks img{
    margin-left: 10px;
    width: 40px;
    height: 40px;
}

.no-tasks{
    color: #00c3ff;
    word-break: break-all;
    white-space: normal;
    
}
.no-tasks::after{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
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
/* FOOTER STYLES */

@media screen and (max-width: 905px){
    /* Adjusting button styles for smaller screens */
    input[type="button"],
    .edit-task-form-button,
    .cancel-form-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        text-wrap: pretty;
        padding: 10px;
    }
}

@media screen and (max-width: 700px){
    #main{
        flex-direction: column;
        width: 100%;
    }

    #sidebar{
        display: flex;
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;;;AAGA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,wBAAwB;AAC5B;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAAmD;AACvD;AACA;IACI,yDAAqD;AACzD;AACA;IACI,yDAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,yDAAyD;IACzD,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iCAAiC;IACjC,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,YAAY;IACZ,yDAAyD;AAC7D;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,4BAA4B;IAC5B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,mBAAmB;AACvB;AACA,mBAAmB;;;AAGnB,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,sCAAsC;IACtC,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,iCAAiC;IACjC,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;;AAGA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,gCAAgC;EAChC,WAAW;EACX,UAAU;EACV,0DAA0D;AAC5D;AACA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;;AAEvB;AACA;IACI,yDAAmD;AACvD;AACA,mBAAmB;;;AAGnB,kBAAkB;AAClB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,yBAAyB;IACzB,iCAAiC;IACjC,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,kCAAkC;IAClC,qBAAqB;AACzB;AACA,kBAAkB;;AAElB;IACI,gDAAgD;IAChD;;;QAGI,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,UAAU;QACV,iBAAiB;QACjB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,WAAW;IACf;;IAEA;QACI,aAAa;QACb,WAAW;IACf;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: #d5d5d5;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #232023;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\nbutton{\r\n    cursor: pointer;\r\n}\r\n\r\n#logoImg{\r\n    width: 110px;\r\n    border-radius: 100px;\r\n    margin-left: 2vw;\r\n}\r\n\r\n#header{\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: clamp(28px, 5vw, 38px);\r\n    font-weight: 700;\r\n    background-color: #5a5a5a;\r\n    gap: 10px;\r\n}\r\n\r\n#main{\r\n    display: flex;\r\n    flex-grow: 1;\r\n    background-color: #232023;\r\n}\r\n\r\n\r\n/* SIDEBAR STYLES */\r\n#sidebar{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #2f2d2f;\r\n    padding: 30px;\r\n    width: clamp(220px, 30vw, 320px);\r\n    min-width: 220px;\r\n}\r\n\r\n.buttonDays, #addProjectBtn{\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: start;\r\n    border: none;\r\n    background: none;\r\n    color: #dddddd;\r\n    padding: 0px 10% 0px 20px;\r\n    font-size: clamp(14px, 2vw, 16px);\r\n    font-weight: 700;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    gap: 10px;\r\n    text-wrap: wrap;\r\n}\r\n#addProjectBtn{\r\n    justify-content: center;\r\n}\r\n.buttonDays:hover{\r\n    transform: scale(1.05);\r\n    background-color: #444444;\r\n}\r\n.buttonDays:active{\r\n    transform: scale(0.99);\r\n}\r\n.buttonDays:focus{\r\n    background-color: #444444;\r\n}\r\n\r\n.with-icon::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n#inbox::before {\r\n    background-image: url('../assets/all.png');\r\n}\r\n#today::before {\r\n    background-image: url('../assets/availability.png');\r\n}\r\n#thisWeek::before {\r\n    background-image: url('../assets/bulletin-board.png');\r\n}\r\n#done::before {\r\n    background-image: url('../assets/done.png');\r\n}\r\n\r\n.project-tab{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    min-width: 170px;\r\n}\r\n.project-tab::before {\r\n    background-image: url('../assets/project-management.png');\r\n    min-width: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n.tab-text{\r\n    word-break: break-all;\r\n    white-space: normal;\r\n}\r\n\r\n#addProjectBtn{\r\n    background-color: #232023;\r\n    margin: 0 10px;\r\n    font-size: clamp(12px, 2vw, 14px);\r\n    padding: 10px;\r\n}\r\n#addProjectBtn:hover{\r\n    background-color: #545454;\r\n}\r\n#addProjectBtn::before{\r\n    width: 15px;\r\n    height: 15px;\r\n    background-image: url('../assets/plus-symbol-button.png');\r\n}\r\n\r\n.add-task-form, .edit-task-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid rgb(127, 127, 127);\r\n    padding: 20px 15px 20px 15px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.add-new-project-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: none;\r\n    padding: 20px 15px 20px 15px;\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n    border-radius: 5px;\r\n    border: none;\r\n    margin-bottom: 5px;\r\n    padding-left: 7px;\r\n    outline: none;\r\n    color: #d3d3d3;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    background-color: #232023;\r\n}\r\n\r\n.project-name-form{\r\n    display: flex;\r\n    max-width: 300px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    margin: -20px 0 100px 0;\r\n    padding: 7px 0 7px 10px;\r\n    outline: none;\r\n    color: #d3d3d3;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    background-color: #232023;\r\n}\r\n\r\ninput[type=\"button\"], .edit-task-form-button, .cancel-form-button{\r\n    border-radius: 5px;\r\n    background-color: #2f2d2f;\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    padding: 5px 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-cancel{\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 5px;\r\n}\r\n\r\n.add-task-form-button, .edit-task-form-button, .add-project-form-button{\r\n    border: 1px solid #2ee700;\r\n}\r\n.add-task-form-button:hover, .edit-task-form-button:hover, .add-project-form-button:hover{\r\n    color: #000000;\r\n    background-color: #2ee700;\r\n}\r\n\r\n.cancel-form-button, .cancel-project-form-button{\r\n    border: 1px solid #dd2500;\r\n}\r\n.cancel-form-button:hover, .cancel-project-form-button:hover{\r\n    background-color: #dd2500;\r\n}\r\n\r\nhr{\r\n    width: 100%;\r\n    border: 1px solid #898989;\r\n    border-radius: 10px;\r\n}\r\n/* SIDEBAR STYLES */\r\n\r\n\r\n/* CONTENT STYLES */\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    padding: 50px clamp(50px, 12vw, 200px);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.headerDay{\r\n    font-size: clamp(24px, 2vw, 32px);\r\n    font-weight: 600;\r\n    margin-bottom: 20px;\r\n    word-break: break-all;\r\n    white-space: normal;\r\n}\r\n\r\n.addTaskBtn{\r\n    border: 2px solid rgb(111, 111, 111);\r\n    background: none;\r\n    font-size: clamp(12px, 2vw, 16px);\r\n    background-color: #2f2d2f;\r\n    border-radius: 10px;\r\n    padding: 8px 20px;\r\n    outline: none;\r\n    margin-top: 10px;\r\n}\r\n.addTaskBtn:hover{\r\n    border: 2px solid rgb(173, 173, 173);\r\n    background-color: #696769;\r\n    transform: scale(1.05);\r\n    font-weight: 600;\r\n}\r\n.addTaskBtn:active{\r\n    transform: scale(1);\r\n}\r\n\r\n.tasks{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    justify-content: center;\r\n}\r\n\r\n.task-info{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.checkbox-name-container{\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"] {\r\n  appearance: none;\r\n  background: #eaeaea;\r\n  outline: none;\r\n  border: none;\r\n  height: 1.75em;\r\n  width: 1.75em;\r\n  border-radius: 100%;\r\n  vertical-align: text-bottom;\r\n  position: relative;\r\n  cursor: pointer;\r\n  transition: transform 0.5s ease;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 10px;\r\n}\r\ninput[type=\"checkbox\"]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\ninput[type=\"checkbox\"]:checked::before {\r\n  border-right: 5px solid #2ee700;\r\n  border-bottom: 6px solid #33ff00;\r\n  height: 90%;\r\n  width: 30%;\r\n  transform: rotate(50deg) translateY(-20%) translateX(-10%);\r\n}\r\ninput[type=\"checkbox\"]:active, input[type=\"checkbox\"]:focus{\r\n    background-color: #fff;\r\n    border: 2px solid #fff;\r\n    transform: scale(1.05);\r\n}\r\n\r\ninput[type=\"date\"]{\r\n    background: none;\r\n    border: 2px solid #747474;\r\n    border-radius: 5px;\r\n    margin-top: 5px;\r\n    max-width: 110px;\r\n    padding: 5px 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.date-container{\r\n    display: flex;\r\n    align-items: center;\r\n    color: #bfbfbf;\r\n    cursor: pointer;\r\n}\r\n\r\n.date-input{\r\n    display: flex;\r\n    color: #bfbfbf;\r\n    cursor: pointer;\r\n}\r\n\r\n::-webkit-calendar-picker-indicator { \r\n    background: transparent;\r\n    width: 105px;\r\n    height: 50px;\r\n    position: absolute;\r\n    margin-left: -15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.overlay-today::placeholder, .overlay-tomorrow::placeholder, .overlay-anyday::placeholder{\r\n    font-size: 14px;\r\n}\r\n\r\n.overlay-today::placeholder{\r\n    color: #00ff00;\r\n}\r\n.overlay-tomorrow::placeholder{\r\n    color: #ffa500;\r\n}\r\n.overlay-anyday::placeholder{\r\n    color: #00ddff;\r\n}\r\n\r\n.done{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.active-tab{\r\n    background-color: #444444;\r\n}\r\n\r\n.buttons, .delete-project{\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.buttons img{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n.date{\r\n    background: none;\r\n    border: none;\r\n    border-radius: 10px;\r\n    width: 110px;\r\n    outline: none;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit, .delete, .delete-project{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.delete-project img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.edit:hover, .delete:hover{\r\n    transform: scale(1.07);\r\n}\r\n\r\n.delete-project:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.edit:active, .delete:active{\r\n    transform: scale(0.95);\r\n}\r\n\r\n.no-done-tasks, .no-tasks{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-size: clamp(14px, 2vw, 24px);\r\n    font-weight: 900;\r\n    color: rgb(255, 238, 0);\r\n    margin-top: -5px;\r\n}\r\n.no-done-tasks::after{\r\n    background-image: url('../assets/sad.png');\r\n}\r\n.no-done-tasks img, .no-tasks img{\r\n    margin-left: 10px;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.no-tasks{\r\n    color: #00c3ff;\r\n    word-break: break-all;\r\n    white-space: normal;\r\n    \r\n}\r\n.no-tasks::after{\r\n    background-image: url('../assets/party-popper.png');\r\n}\r\n/* CONTENT STYLES */\r\n\r\n\r\n/* FOOTER STYLES */\r\n#footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n    font-weight: 600;\r\n    background-color: #5a5a5a;\r\n    font-size: clamp(14px, 1vw, 18px);\r\n    padding: 10px;\r\n}\r\n#footer img{\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 40px;\r\n}\r\n#footer img:hover{\r\n    box-shadow: 0 0 5px rgb(9, 183, 0);\r\n    transform: scale(1.1);\r\n}\r\n/* FOOTER STYLES */\r\n\r\n@media screen and (max-width: 905px){\r\n    /* Adjusting button styles for smaller screens */\r\n    input[type=\"button\"],\r\n    .edit-task-form-button,\r\n    .cancel-form-button {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 50%;\r\n        text-wrap: pretty;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n    #main{\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n\r\n    #sidebar{\r\n        display: flex;\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/done.png":
/*!*****************************!*\
  !*** ./src/assets/done.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "done.png";

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

/***/ "./src/assets/party-popper.png":
/*!*************************************!*\
  !*** ./src/assets/party-popper.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "party-popper.png";

/***/ }),

/***/ "./src/assets/plus-symbol-button.png":
/*!*******************************************!*\
  !*** ./src/assets/plus-symbol-button.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus-symbol-button.png";

/***/ }),

/***/ "./src/assets/project-management.png":
/*!*******************************************!*\
  !*** ./src/assets/project-management.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "project-management.png";

/***/ }),

/***/ "./src/assets/sad.png":
/*!****************************!*\
  !*** ./src/assets/sad.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sad.png";

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





// main file for generating all page
(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundleee9c2f7a3a977edf74c1.js.map