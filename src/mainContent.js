import Task, { tasks } from "./task.js";

export default class Content {
    constructor() {
        this.main = document.getElementById("main");
        this.content = document.createElement("div");
        this.content.setAttribute("id", "content");
        this.main.appendChild(this.content);
        this.allTasks = tasks.getAllTasks();
        this.activeTab = null;
        this.sidebarEventListeners();
    }

    sidebarEventListeners() {
        const inboxBtn = document.getElementById("inbox");
        const todayBtn = document.getElementById("today");
        const thisWeekBtn = document.getElementById("thisWeek");
        const addProjectBtn = document.getElementById("addProjectBtn");
        const doneBtn = document.getElementById("done");

        inboxBtn.addEventListener("click", () => this.tabClicked(inboxBtn));
        todayBtn.addEventListener("click", () => this.tabClicked(todayBtn));
        thisWeekBtn.addEventListener("click", () => this.tabClicked(thisWeekBtn));
        doneBtn.addEventListener("click", () => this.tabClicked(doneBtn));
        addProjectBtn.addEventListener("click", () => this.createAddProjectBtn());

        this.tabClicked(inboxBtn);
    }

    tabClicked(tabButton) {
        const allTabs = document.querySelectorAll(".buttonDays");
        allTabs.forEach(tab => {
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
                break;
        }
    }
    
    inboxTasks() {
        this.createHeaderDay("Inbox");
        tasks.displayAll();
        this.createAddTaskBtn();
    }

    todayTasks() {
        this.createHeaderDay("Today");
        tasks.displayTodayTasks();
        this.createAddTaskBtn();
    }

    thisWeekTasks() {
        this.createHeaderDay("This week");
        this.createAddTaskBtn();
    }

    doneTasks(){
        this.createHeaderDay("Done");
        tasks.displayDone();
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

        btn.addEventListener("click", () => this.displayTaskForm());
       
        this.content.appendChild(btn);
    }

    displayTaskForm(){
        const addTaskBtn = this.content.querySelector('.addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.remove();
        }

        const taskProperties = document.createElement("form");
        taskProperties.classList.add("add-task-form");

        const taskText = document.createElement("input");
        const date = document.createElement("div");

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.classList.add("date-input");

        const hr = document.createElement("hr");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("add-cancel");

        const addTaskForm = document.createElement("input");
        const cancel = document.createElement("input");

        buttonContainer.appendChild(addTaskForm);
        buttonContainer.appendChild(cancel);

        taskText.type = "text";
        taskText.placeholder = "Task name";
        taskText.classList.add("task-text-form");

        date.appendChild(dateInput);

        date.type = "date";
        date.classList.add("date-input");

        addTaskForm.type = "button";
        addTaskForm.value = "Add task";
        addTaskForm.classList.add("add-task-form-button");
        addTaskForm.addEventListener("click", () => {
            this.addNewTask(taskText.value, dateInput.value);
            const activeTab = document.querySelector(".active-tab");
            if (activeTab.classList.contains("active-tab") && activeTab.id === "today"){
                tasks.displayTodayTasks();
            } else if(activeTab.classList.contains("active-tab") && activeTab.id === "inbox"){
                tasks.displayAll();
            }
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

        tasks.setMinMaxTime(dateInput);

        this.content.appendChild(taskProperties);
    }

    addNewTask(taskText, date=None){
        if(taskText){
            const newTask = new Task(taskText, date);
            return newTask;
        }
    }

    clearContent() {
        this.content.textContent = "";
    }
};