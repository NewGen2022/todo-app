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

    createTaskElement() {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        const checkboxNameContainer = document.createElement("div");
        checkboxNameContainer.classList.add("checkbox-name-container");

        const isDoneCheckbox = document.createElement("input");
        isDoneCheckbox.classList.add("custom-checkbox");
        isDoneCheckbox.type = "checkbox";

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.textContent = this.name;
        
        checkboxNameContainer.appendChild(isDoneCheckbox);
        checkboxNameContainer.appendChild(taskName);

        const dateInput = document.createElement("input");
        dateInput.classList.add("date-input");
        dateInput.type = "date";
        dateInput.value = this.date;
        dateInput.style.zIndex = "2";
        dateInput.style.opacity = "0";
        tasks.setMinMaxTime(dateInput);
        
        const overlay = document.createElement("input");
        overlay.type = "text";
        overlay.disabled = true;
        overlay.placeholder = "No date";
        overlay.classList.add("overlay");
        overlay.style.position = "absolute";

        this.handleDate(overlay);

        const dateContainer = document.createElement("div");
        dateContainer.appendChild(dateInput);
        dateContainer.appendChild(overlay);
        dateContainer.classList.add("date-container");

        const editBtn = document.createElement("button");
        const editIconImg = document.createElement("img");
        editIconImg.src = editIcon;
        editBtn.appendChild(editIconImg);
        editBtn.classList.add("edit");
        
        const deleteBtn = document.createElement("button");
        const deleteIconImg = document.createElement("img");
        deleteIconImg.src = deleteIcon;
        deleteBtn.appendChild(deleteIconImg)
        deleteBtn.classList.add("delete");

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        taskInfo.appendChild(checkboxNameContainer);
        taskInfo.appendChild(buttons);
        
        taskContainer.appendChild(taskInfo);
        taskContainer.appendChild(dateContainer);

        return taskContainer;
    }

    deleteTaskHandler() {
        tasks.removeTask(this.taskElement);
        this.taskElement.remove();
    }

    updateTaskDate(newDate) {
        this.date = newDate;
        const overlay = this.taskElement.querySelector(".overlay");

        this.handleDate(overlay);
    }

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