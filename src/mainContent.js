import Task from "./task.js";
import { tasks } from "./task.js";

export default class Content {
    constructor() {
        this.main = document.getElementById("main");
        this.content = document.createElement("div");
        this.content.setAttribute("id", "content");
        this.main.appendChild(this.content);
        this.addEventListeners();
        this.allTasks = tasks.getAllTasks();
    }

    addEventListeners() {
        const inboxBtn = document.getElementById("inbox");
        const todayBtn = document.getElementById("today");
        const thisWeekBtn = document.getElementById("thisWeek");
        const addProjectBtn = document.getElementById("addProjectBtn");

        inboxBtn.addEventListener("click", () => this.inboxTasks());
        todayBtn.addEventListener("click", () => this.todayTasks());
        thisWeekBtn.addEventListener("click", () => this.thisWeekTasks());
        addProjectBtn.addEventListener("click", () => this.createAddProjectBtn());
    }

    inboxTasks() {
        this.clearContent();

        this.createHeaderDay("Inbox");

        const task1 = new Task("JS", "05.04.2024");
        const task2 = new Task("JS2", "05.04.2024");

        this.displayAllTasks();

        this.createAddTaskBtn();
    }

    todayTasks() {
        this.clearContent();

        this.createHeaderDay("Today");

        this.createAddTaskBtn();
    }

    thisWeekTasks() {
        this.clearContent();

        this.createHeaderDay("This week");
    
        this.createAddTaskBtn();
    }

    createAddProjectBtn() {
        this.clearContent();

        this.createHeaderDay("Add Project");
    
        this.createAddTaskBtn();
    }

    createHeaderDay(textContent) {
        const headerDay = document.createElement("div");
        headerDay.classList.add("headerDay");
        headerDay.textContent = textContent;
        
        this.content.appendChild(headerDay);
    }

    createAddTaskBtn() {
        const btn = document.createElement("button");
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

    displayAllTasks() {
        const tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks");

        this.allTasks.forEach(task => {
            tasksContainer.appendChild(task);
        });

        this.content.appendChild(tasksContainer);
    }

    clearContent() {
        this.content.textContent = "";
    }
};