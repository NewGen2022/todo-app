import editIcon from "./assets/edit-text.png";
import deleteIcon from "./assets/delete.png";
import { tasks } from "./allTasks.js";


export default class Task {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.taskElement = this.createTaskElement();
        tasks.addTask(this.taskElement);

        this.taskElement.querySelector(".delete").addEventListener("click", this.deleteTaskHandler.bind(this));
    
        const dateInput = this.taskElement.querySelector(".date-input");
        dateInput.addEventListener("change", () => this.updateTaskDate(dateInput.value));
    }

// methods needed to create task
    createTaskElement() {
        const taskContainer = this.createTaskContainer();
        const taskInfo = this.createTaskInfo();
        const buttons = this.createButtons();
        const checkboxNameContainer = this.createCheckboxNameContainer();
        const isDoneCheckbox = this.createIsDoneCheckbox();
        const taskName = this.createTaskName();
        const dateContainer = this.createDateContainer();
        const dateInput = this.createDateInput();
        const overlay = this.createOverlay();
        const editBtn = this.createEditButton();
        const deleteBtn = this.createDeleteButton();
    
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
    
    createTaskContainer() {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");
        return taskContainer;
    }
    
    createTaskInfo() {
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        return taskInfo;
    }
    
    createButtons() {
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        return buttons;
    }
    
    createCheckboxNameContainer() {
        const checkboxNameContainer = document.createElement("div");
        checkboxNameContainer.classList.add("checkbox-name-container");
        return checkboxNameContainer;
    }
    
    createIsDoneCheckbox() {
        const isDoneCheckbox = document.createElement("input");
        isDoneCheckbox.classList.add("custom-checkbox");
        isDoneCheckbox.type = "checkbox";
        isDoneCheckbox.addEventListener("change", () => this.handleIsDoneChange(isDoneCheckbox));
        return isDoneCheckbox;
    }

    handleIsDoneChange(isDoneCheckbox){
        if (isDoneCheckbox.checked) {
            this.taskElement.classList.add("done");
            tasks.addDoneTask(this.taskElement);
        } else {
            this.taskElement.classList.remove("done");
            tasks.removeDoneTask(this.taskElement);
        }

        setTimeout(() => {
            this.taskElement.remove();
            tasks.displayNoTasksMessage();
        }, 450);

    }
    
    createTaskName() {
        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.textContent = this.name;
        return taskName;
    }
    
    createDateContainer() {
        const dateContainer = document.createElement("div");
        dateContainer.classList.add("date-container");
        return dateContainer;
    }
    
    createDateInput() {
        const activeTab = document.querySelector(".active-tab");
        
        if (activeTab.id === "today" && this.date === "") {
            const today = new Date();
            const todayString = today.toISOString().split('T')[0];
            this.date = todayString;
        }

        const dateInput = document.createElement("input");
        dateInput.classList.add("date-input");
        dateInput.type = "date";
        dateInput.value = this.date;
        dateInput.style.zIndex = "2";
        dateInput.style.opacity = "0";
        tasks.setMinMaxTime(dateInput);
        return dateInput;
    }
    
    createOverlay() {
        const overlay = document.createElement("input");
        overlay.type = "text";
        overlay.disabled = true;
        overlay.placeholder = "No date";
        overlay.classList.add("overlay");
        overlay.style.position = "absolute";
        this.handleDate(overlay);
        return overlay;
    }
    
    createEditButton() {
        const editBtn = document.createElement("button");
        const editIconImg = document.createElement("img");
        editIconImg.src = editIcon;
        editBtn.appendChild(editIconImg);
        editBtn.classList.add("edit");
        return editBtn;
    }
    
    createDeleteButton() {
        const deleteBtn = document.createElement("button");
        const deleteIconImg = document.createElement("img");
        deleteIconImg.src = deleteIcon;
        deleteBtn.appendChild(deleteIconImg);
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => this.deleteTaskHandler());
        return deleteBtn;
    }

// delete task
    deleteTaskHandler() {
        tasks.removeTask(this.taskElement);
        this.taskElement.remove();
    }

// updating task date
    updateTaskDate(newDate) {
        this.date = newDate;
        const overlay = this.taskElement.querySelector(".overlay");

        this.handleDate(overlay);
    }

// handling proper displaying of the date in the container
    handleDate(overlay){
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
    
        const todayString = today.toISOString().split('T')[0];
        const tomorrowString = tomorrow.toISOString().split('T')[0];
    
        if(this.date === ""){

        } else if(this.date === todayString) {
            overlay.placeholder = "Today";
            overlay.classList.remove("overlay-tomorrow", "overlay-anyday");
            overlay.classList.add("overlay-today");
        } else if(this.date === tomorrowString) {
            overlay.placeholder = "Tomorrow";
            overlay.classList.remove("overlay-today", "overlay-anyday");
            overlay.classList.add("overlay-tomorrow");
        } else {
            const dateObj = new Date(this.date);

            overlay.classList.remove("overlay-today", "overlay-tomorrow");
            overlay.classList.add("overlay-anyday");

            const options = { day: "numeric", month: "short", year: "numeric" };
            const formattedDate = dateObj.toLocaleDateString("en-GB", options);

            overlay.placeholder = formattedDate;
            console.log(formattedDate)
            console.log(overlay.placeholder)
        }
    }
}
export { tasks };