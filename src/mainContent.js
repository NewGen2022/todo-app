export default class Content{
    constructor(){
        const main = document.getElementById("main");
        
        const content = document.createElement("div");
        content.setAttribute("id", "content");
    
        main.appendChild(content)

        this.addEventListeners();
    }

    
    addEventListeners(){
        const inboxBtn = document.getElementById("inbox");
        const todayBtn = document.getElementById("today");
        const thisWeekBtn = document.getElementById("thisWeek");
        const addProjectBtn = document.getElementById("addProjectBtn");

        inboxBtn.addEventListener("click", () => this.inboxTasks());

        todayBtn.addEventListener("click", () => this.todayTasks());

        thisWeekBtn.addEventListener("click", () => this.thisWeekTasks());

        addProjectBtn.addEventListener("click", () => this.addProject());
    };

    inboxTasks(){
        this.clearContent();
        const content = document.getElementById("content");

        const headerDay = this.createHeaderDay("Inbox");

        content.appendChild(headerDay);
    }

    todayTasks(){
        this.clearContent();
        const content = document.getElementById("content");

        const headerDay = this.createHeaderDay("Today");

        content.appendChild(headerDay);
    }

    thisWeekTasks(){
        this.clearContent();
        const content = document.getElementById("content");

        const headerDay = this.createHeaderDay("This week");

        content.appendChild(headerDay);
    }

    addProject(){
        this.clearContent();
        const content = document.getElementById("content");

        const headerDay = this.createHeaderDay("Add Project");

        content.appendChild(headerDay);
    }

    createHeaderDay(textContent){
        const headerDay = document.createElement("div");
        headerDay.classList.add("headerDay");
        headerDay.textContent = textContent;

        return headerDay
    }

    clearContent(){
        const content = document.getElementById("content");
        content.textContent = "";
    }
};