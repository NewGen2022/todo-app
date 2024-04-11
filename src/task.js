import editIcon from "./assets/edit-text.png";
import deleteIcon from "./assets/delete.png";
import { tasks } from "./allTasks.js";


export default class Task {
    constructor(name, date, activeTab) {
        this.name = name;
        this.date = date;
        this.taskElement = this.createTaskElement();

        tasks.addTask(this.taskElement, activeTab);

        this.taskElement.querySelector(".delete").addEventListener("click", this.deleteTaskHandler.bind(this));
    
        const dateInput = this.taskElement.querySelector(".date-input");
        dateInput.addEventListener("change", () => this.updateTaskDate(dateInput.value));
    }

    // all methods needed to create task
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
        const activeTab = document.querySelector(".active-tab").id;
    
        if (isDoneCheckbox.checked) {
            this.taskElement.classList.add("done");
            tasks.addDoneTask(this.taskElement);
    
            // Remove the task from the project if it belongs to one
            if (activeTab !== "inbox" && activeTab !== "today" && activeTab !== "thisWeek" && activeTab !== "done") {
                tasks.removeTaskFromProject(activeTab, this.taskElement);
            }
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
        editBtn.addEventListener("click", () => {
            this.editTask();
        })
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
        this.removeFromProject();
        this.taskElement.remove();
    }

    // deleting task from specific project
    removeFromProject() {
        const activeTab = document.querySelector(".active-tab").id;
        
        // If the task belongs to a project, remove it from the project
        if (activeTab !== "inbox" && activeTab !== "today" && activeTab !== "thisWeek" && activeTab !== "done") {
            tasks.removeTaskFromProject(activeTab, this.taskElement);
        }
    }

    // updating task date
    updateTaskDate(newDate) {
        this.date = newDate;
        const overlay = this.taskElement.querySelector(".overlay");

        this.handleDate(overlay);
    }

    // form for editing task
    editTask(){
        const form = document.createElement("form");
        form.classList.add("edit-task-form");

        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.placeholder = "Enter task name";
        taskNameInput.value = this.name;
        taskNameInput.classList.add("task-text-form");

        const date = document.createElement("div");
        date.classList.add("date-input");

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.classList.add("date-input");
        dateInput.value = this.date; // Populate with current task date

        date.appendChild(dateInput)

        const hr = document.createElement("hr");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("add-cancel");

        const submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Save Changes";
        submitButton.classList.add("edit-task-form-button")
        submitButton.addEventListener("click", () => {
            this.updateTask(taskNameInput.value, dateInput.value);
            form.remove();
        });

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";
        cancelButton.classList.add("cancel-form-button")
        cancelButton.addEventListener("click", () => {
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
        const content = document.getElementById("content");
        const lastChild = content.lastElementChild;

        // Insert the form before the last child
        content.insertBefore(form, lastChild);
    }

    // updating task
    updateTask(newName, newDate) {
        this.name = newName;
        this.date = newDate;
    
        // Update task name displayed in the UI
        const taskNameElement = this.taskElement.querySelector(".task-name");
        taskNameElement.textContent = newName;
        this.taskElement.name = newName;
    
        // Update task date displayed in the UI
        this.updateTaskDate(newDate)
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
        }
    }
}
export { tasks };