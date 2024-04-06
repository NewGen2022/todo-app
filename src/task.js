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

        const dateBtn = document.createElement("button");
        dateBtn.textContent = this.date;
        dateBtn.classList.add("date");

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
        taskContainer.appendChild(dateBtn);

        return taskContainer;
    }

    deleteTaskHandler() {
        tasks.removeTask(this.taskElement);
        this.taskElement.remove();
    }
}
export { tasks };