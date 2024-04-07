import inboxIcon from  './assets/all.png';
import todayIcon from  './assets/availability.png';
import thisWeekIcon from  './assets/bulletin-board.png';
import doneIcon from "./assets/done.png";

export default class Sidebar{
    constructor(){
        const main = document.getElementById("main");
    
        const sidebar = document.createElement("div");
        sidebar.setAttribute("id", "sidebar");
    
        const inbox = document.createElement("button");
        const today = document.createElement("button");
        const thisWeek = document.createElement("button");
        const done = document.createElement("button");
    
        const inboxImg = document.createElement("img");
        const todayImg = document.createElement("img");
        const thisWeekImg = document.createElement("img");
        const doneImg = document.createElement("img");
    
        inboxImg.src = inboxIcon;
        todayImg.src = todayIcon;
        thisWeekImg.src = thisWeekIcon;
        doneImg.src = doneIcon;
    
        inbox.appendChild(inboxImg);
        today.appendChild(todayImg);
        thisWeek.appendChild(thisWeekImg);
    
        inbox.textContent = "Inbox";
        today.textContent = "Today";
        thisWeek.textContent = "This week";
        done.textContent = "Done";
    
        inbox.classList.add("buttonDays", "with-icon");
        today.classList.add("buttonDays", "with-icon");
        thisWeek.classList.add("buttonDays", "with-icon");
        done.classList.add("buttonDays", "with-icon");
    
        inbox.setAttribute("id", "inbox");
        today.setAttribute("id", "today");
        thisWeek.setAttribute("id", "thisWeek");
        done.setAttribute("id", "done");
    
        const projectsHeader = document.createElement("h2");
        projectsHeader.textContent = "Projects";

        const addProjectButton = document.createElement("button");
        addProjectButton.textContent = "Add project";

        addProjectButton.setAttribute("id", "addProjectBtn");
        addProjectButton.classList.add("buttonDays", "with-icon");
        
        sidebar.appendChild(inbox);
        sidebar.appendChild(today);
        sidebar.appendChild(thisWeek);
        sidebar.appendChild(done);
        sidebar.appendChild(projectsHeader);
        sidebar.appendChild(addProjectButton);

        main.appendChild(sidebar);
    };
};