import Sidebar from "./sidebar";

export default function generateContent(){
    const body = document.querySelector("body");

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    body.appendChild(main);

    const sidebar = new Sidebar();
}