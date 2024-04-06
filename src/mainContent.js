import Task, { tasks } from "./task.js";

export default class Content {
    constructor() {
        this.main = document.getElementById("main");
        this.content = document.createElement("div");
        this.content.setAttribute("id", "content");
        this.main.appendChild(this.content);
        this.allTasks = tasks.getAllTasks();
        this.addEventListeners();
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

        btn.addEventListener("click", () => this.addTaskForm());
       
        this.content.appendChild(btn);
    }

    addTaskForm(){
        const addTaskBtn = this.content.querySelector('.addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.remove();
        }

        const taskProperties = document.createElement("form");
        taskProperties.classList.add("add-task-form");

        const taskText = document.createElement("input");
        const date = document.createElement("input");

        const hr = document.createElement("hr");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("add-cancel");

        const addTask = document.createElement("input");
        const cancel = document.createElement("input");

        buttonContainer.appendChild(addTask);
        buttonContainer.appendChild(cancel);

        taskText.type = "text";
        taskText.placeholder = "Task name";
        taskText.classList.add("task-text-form");

        date.type = "text";
        date.placeholder = "Due Date";
        date.classList.add("date-form");

        addTask.type = "button";
        addTask.value = "Add task";
        addTask.classList.add("add-task-form-button");
        addTask.addEventListener("click", () => {
            this.addTask(taskText.value, date.value);
            taskProperties.remove();
            this.createAddTaskBtn()
        });

        cancel.type = "button";
        cancel.value = "Cancel";
        cancel.classList.add("cancel-form-button");
        cancel.addEventListener("click", () => { 
            taskProperties.remove();
            this.createAddTaskBtn()
        });

        taskProperties.appendChild(taskText);
        taskProperties.appendChild(date);
        taskProperties.appendChild(hr);
        taskProperties.appendChild(buttonContainer);

        this.content.appendChild(taskProperties);
    }

    addTask(taskText, date=None){
        if(taskText){
            const newTask = new Task(taskText, date);
        }
        console.log(this.allTasks);
        this.displayAllTasks();
    }

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