import Content from "./mainContent";

export default function generateMain(){
    const body = document.querySelector("body");

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    body.appendChild(main);

    // create main content and sidebar
    new Content();
}