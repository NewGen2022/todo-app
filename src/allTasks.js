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
}

export const tasks = new Tasks();