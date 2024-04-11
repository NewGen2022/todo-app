import Task, { tasks } from "./task.js";
import Sidebar from "./sidebar.js";
import projectIcon from "./assets/project-management.png";
import deleteIcon from "./assets/delete.png";

export default class Content {
    // initialize content and sidebar classes
    constructor() {
        this.sidebar = new Sidebar();

        this.main = document.getElementById("main");

        this.content = document.createElement("div");
        this.content.setAttribute("id", "content");

        this.main.appendChild(this.content);

        this.allTasks = tasks.getAllTasks();
        
        this.sidebarEventListeners();

        this.activeTab = null;
    }

    // adding event listeners for all sidebar buttons
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
        addProjectBtn.addEventListener("click", () => this.createProjectForm());

        this.tabClicked(inboxBtn);
    }

    // tracking active button of the sidebar
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
                this.displayProjectTasks(this.activeTab);
                console.log(this.activeTab)
                break;
        }
    }
    
    // displaying all content that belongs to inbox tab-button
    inboxTasks() {
        this.createHeaderDay("Inbox");
        tasks.displayAll();
        this.createAddTaskBtn();
    }

    // displaying all content that belongs to today tab-button
    todayTasks() {
        this.createHeaderDay("Today");
        tasks.displayAll();
        this.createAddTaskBtn();
    }

    // displaying all content that belongs to this week tab-button
    thisWeekTasks() {
        this.createHeaderDay("This week");
        tasks.displayAll();
        this.createAddTaskBtn();
    }

    // displaying all content that belongs to done tab-button
    doneTasks(){
        this.createHeaderDay("Done");
        tasks.displayAll();
    }

    displayProjectTasks(projectName){
        this.clearContent()
        this.createHeaderDay(projectName);
        this.createAddTaskBtn();
    }

    addProjectButtonGeneration(newProjectForm, projectName, event="cancel"){
        if(event === "add"){
            const isProjectAdded = tasks.addProject(projectName.value);
    
            if(isProjectAdded){
                const deleteBtn = document.createElement("button");
                const deleteIconImg = document.createElement("img");
                deleteIconImg.src = deleteIcon;
                deleteBtn.appendChild(deleteIconImg);
                deleteBtn.classList.add("delete-project");
                deleteBtn.addEventListener("click", (event) => {
                    event.stopPropagation();
                    this.deleteProjectHandler(projectName.value);
                    
            });
    
                const newProjectTab = this.sidebar.createTab(projectName.value, projectName.value);
                newProjectTab.classList.add("project-tab");
                newProjectTab.setAttribute("id", projectName.value);
                newProjectTab.appendChild(deleteBtn);
                newProjectTab.addEventListener("click", () => this.tabClicked(newProjectTab))
            }
    
        }

        newProjectForm.remove();
        const ProjectBtn = this.sidebar.createProjectBtn();
        ProjectBtn.addEventListener("click", () => this.createProjectForm())
    }

    deleteProjectHandler(projectName){
        const projectToDelete = document.getElementById(projectName);
        projectToDelete.remove();
        tasks.removeProject(projectToDelete.id);

        if (this.activeTab === projectName) {
            this.clearContent();
        }
    }

    createProjectForm(){
        const removeAddProjectBtn = document.getElementById("addProjectBtn");
        removeAddProjectBtn.remove();

        const newProjectForm = document.createElement("form");
        newProjectForm.classList.add("add-new-project-form");

        const projectName = document.createElement("input");

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("add-cancel");

        const addProjectBtn = document.createElement("input");
        const cancel = document.createElement("input");

        buttonsContainer.appendChild(addProjectBtn);
        buttonsContainer.appendChild(cancel);

        projectName.type = "text";
        projectName.placeholder = "Project name";
        projectName.classList.add("project-name-form");


        addProjectBtn.type = "button";
        addProjectBtn.value = "Add project";
        addProjectBtn.classList.add("add-project-form-button");
        addProjectBtn.addEventListener("click", () => {
            this.addProjectButtonGeneration(newProjectForm, projectName, "add");
        });

        cancel.type = "button";
        cancel.value = "Cancel";
        cancel.classList.add("cancel-project-form-button");
        cancel.addEventListener("click", () => {
            this.addProjectButtonGeneration(newProjectForm, projectName);
        });

        newProjectForm.appendChild(projectName);
        newProjectForm.appendChild(buttonsContainer);

        const sidebar = document.getElementById("sidebar");
        sidebar.appendChild(newProjectForm);
    }

    // method to create header for active tab-button
    createHeaderDay(textContent) {
        const headerDay = document.createElement("div");
        headerDay.classList.add("headerDay");
        headerDay.textContent = textContent;

        this.content.appendChild(headerDay);
    }

    // create button for adding new task
    createAddTaskBtn() {
        const btn = document.createElement("button");
        btn.classList.add("addTaskBtn");
        btn.textContent = "+ Add task";

        btn.addEventListener("click", () => this.displayTaskForm());
       
        this.content.appendChild(btn);
    }

    // create form for adding new task properties
    createTaskForm(){
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

        date.classList.add("date-input");

        addTaskForm.type = "button";
        addTaskForm.value = "Add task";
        addTaskForm.classList.add("add-task-form-button");
        addTaskForm.addEventListener("click", () => {
            this.addNewTask(taskText.value, dateInput.value);
            tasks.displayAll();
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

    // display form for adding new task properties
    displayTaskForm(){
        // delete button for adding tasks when form for adding task is displayed
        const addTaskBtn = this.content.querySelector('.addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.remove();
        }

        this.createTaskForm();
    }

    // adding new task 
    addNewTask(taskText, date=None){
        if(taskText){
            const newTask = new Task(taskText, date);
            return newTask;
        }
    }

    // clear all content in content container 
    clearContent() {
        this.content.textContent = "";
    }
};