import Sidebar from "./sidebar";
import Content from "./mainContent";

export default function generateMain(){
    const body = document.querySelector("body");

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    body.appendChild(main);

    // create sidebar
    new Sidebar();

    // create main content
    new Content();
}