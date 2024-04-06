export default class Tasks {
    constructor() {
        this.allTasks = [];
    }

    addTask(task) {
        this.allTasks.push(task);
    }

    removeTask(task) {
        const index = this.allTasks.indexOf(task);
        if (index !== -1) {
            this.allTasks.splice(index, 1);
        }
    }

    getAllTasks() {
        return this.allTasks;
    }

    displayAll() {
        const content = document.getElementById("content");

        const tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks");

        this.allTasks.forEach(task => {
            tasksContainer.appendChild(task);
        });

        content.appendChild(tasksContainer);
    }
}

export const tasks = new Tasks();