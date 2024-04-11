import inboxIcon from  './assets/all.png';
import todayIcon from  './assets/availability.png';
import thisWeekIcon from  './assets/bulletin-board.png';
import doneIcon from "./assets/done.png";

export default class Sidebar{
    constructor(){
        const main = document.getElementById("main");
    
        // create sidebar
        this.sidebar = document.createElement("div");
        this.sidebar.setAttribute("id", "sidebar");

        // create tab for displaying inbox (all) tasks
        this.createTab("Inbox", "inbox");
        // create tab for displaying today tasks
        this.createTab("Today", "today");
        // create tab for displaying tasks for this week
        this.createTab("This week", "thisWeek");
        // create tab for displaying done tasks
        this.createTab("Done", "done");
        
        // create section for projects
        this.createProjectSection();

        // append sidebar to main content
        main.appendChild(this.sidebar);
    }

    // creating different tabs in sidebar
    createTab(textContent, id) {
        const tab = document.createElement("button");
        const tabText = document.createElement("p");
        tabText.classList.add("tab-text");

        // Set the text content of the text element
        tabText.textContent = textContent;
    
        tab.appendChild(tabText);
    
        tab.classList.add("buttonDays", "with-icon");
        tab.setAttribute("id", id);
    
        this.sidebar.appendChild(tab);
    
        return tab;
    }
    

    // create section for projects
    createProjectSection(){
        const projectsHeader = document.createElement("h2");
        projectsHeader.textContent = "Projects";

        this.sidebar.appendChild(projectsHeader);
        
        const projectsButton = this.createProjectBtn();

        return { projectsHeader, projectsButton };
    }

    createProjectBtn(){
        const projectsButton = document.createElement("button");
        projectsButton.textContent = "Add project";

        projectsButton.setAttribute("id", "addProjectBtn");
        projectsButton.classList.add("buttonDays", "with-icon");

        
        this.sidebar.appendChild(projectsButton);

        return projectsButton;
    }
}