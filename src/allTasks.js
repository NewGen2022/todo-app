import sad from "./assets/sad.png"
import congratulations from "./assets/party-popper.png"

export default class Tasks {
    constructor() {
        this.allTasks = [];
        this.doneTasks = [];
    }

    addTask(task) {
        this.allTasks.push(task);
    }

    addDoneTask(doneTask){
        console.log(doneTask)
        this.doneTasks.push(doneTask);
    }

    removeTask(task) {
        const index = this.allTasks.indexOf(task);
        if (index !== -1) {
            this.allTasks.splice(index, 1);
        }
    }

    removeDoneTask(taskElement){
        const index = this.doneTasks.indexOf(taskElement);
        if (index !== -1) {
            this.doneTasks.splice(index, 1);
    }
    }

    getAllTasks() {
        return this.allTasks;
    }

    getDoneTasks(){
        return this.doneTasks;
    }
    
    setMinMaxTime(dateInput){
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (day > new Date(year, month, 0).getDate()) {
            month += 1;
            day -= new Date(year, month - 1, 0).getDate();
        }

        // Format today's date as YYYY-MM-DD
        const min = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        // Calculate the maximum date (365 days from today)
        let maxYear = year;
        let maxMonth = month;
        let maxDay = day + 3650;

        // Check if the calculated day exceeds the number of days in the current month
        while (maxDay > new Date(maxYear, maxMonth, 0).getDate()) {
            // If so, adjust the month and day
            maxDay -= new Date(maxYear, maxMonth, 0).getDate();
            maxMonth += 1;

            // If the month exceeds 12, increment the year and reset the month to 1
            if (maxMonth > 12) {
                maxYear += 1;
                maxMonth = 1;
            }
        }

        // Format the maximum date as YYYY-MM-DD
        const max = `${maxYear}-${maxMonth < 10 ? '0' + maxMonth : maxMonth}-${maxDay < 10 ? '0' + maxDay : maxDay}`;

        // Set minimum and maximum dates
        dateInput.min = min;
        dateInput.max = max;
    }

    displayDone(){
        const content = document.getElementById("content");

        const doneTasksContainer = document.createElement("div");
        doneTasksContainer.classList.add("tasks");

        if(this.doneTasks.length === 0){
            const noTasksContainer = this.noDoneTasksYet("No done tasks yet");
            doneTasksContainer.appendChild(noTasksContainer)
        } else {
            this.doneTasks.forEach(task => {
                doneTasksContainer.appendChild(task);
            });
        }


        content.appendChild(doneTasksContainer);
    }

    noDoneTasksYet(text){
        const noTasksContainer = document.createElement("p");
        noTasksContainer.textContent = text;
        noTasksContainer.classList.add("no-done-tasks");
        const sadImg = document.createElement("img");
        sadImg.src = sad;
        noTasksContainer.appendChild(sadImg);

        return noTasksContainer;
    }

    noTasksYet(text){
        const noTasksContainer = document.createElement("p");
        noTasksContainer.textContent = text;
        noTasksContainer.classList.add("no-tasks");
        const congratulationsImg = document.createElement("img");
        congratulationsImg.src = congratulations;
        noTasksContainer.appendChild(congratulationsImg);

        return noTasksContainer;
    }

    displayTodayTasks(){
        const content = document.getElementById("content");

        let tasksContainer = document.querySelector(".tasks");
        
        // If tasks container doesn't exist, create a new one
        if (!tasksContainer) {
            tasksContainer = document.createElement("div");
            tasksContainer.classList.add("tasks");
            content.appendChild(tasksContainer);
        } else {
            tasksContainer.innerHTML = "";
        }

        const today = new Date();
        const todayDateString = today.toISOString().split('T')[0];

        if(this.allTasks.length === 0){
            const noTasksContainer = this.noTasksYet("No tasks yet");
            tasksContainer.appendChild(noTasksContainer)
        } else {
            // Filter tasks with today's date
            const tasksToDisplay = this.allTasks.filter(task => {
                const taskDate = task.querySelector(".date-input").value;
                const isUnchecked = !task.querySelector(".custom-checkbox").checked;
                return taskDate === todayDateString && isUnchecked;
            });
            tasksToDisplay.forEach(task => {
                tasksContainer.appendChild(task);
            });
        }

        content.appendChild(tasksContainer);
    }

    displayAll() {
        const content = document.getElementById("content");
        
        let tasksContainer = document.querySelector(".tasks");
        
        // If tasks container doesn't exist, create a new one
        if (!tasksContainer) {
            tasksContainer = document.createElement("div");
            tasksContainer.classList.add("tasks");
            content.appendChild(tasksContainer);
        } else {
            tasksContainer.innerHTML = "";
        }
    
        if (this.allTasks.length === 0) {
            const noTasksContainer = this.noTasksYet("No tasks yet");
            tasksContainer.appendChild(noTasksContainer);
        } else {
            const tasksToDisplay = this.allTasks.filter(task => !task.classList.contains("done"));
            tasksToDisplay.forEach(task => {
                tasksContainer.appendChild(task);
            });
        }
    }
}

export const tasks = new Tasks();