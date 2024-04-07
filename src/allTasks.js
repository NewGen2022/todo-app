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