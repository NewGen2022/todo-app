import honeyBadger from "./assets/transparent-bg-honey-badger.png";

export default function generateHeader(){
    const body = document.querySelector("body");

    const headerTag = document.createElement("div");
    headerTag.setAttribute("id", "header");

    const headerLogo = document.createElement("img");
    headerLogo.src = honeyBadger;
    headerLogo.setAttribute("id", "logoImg");

    const headerText = document.createTextNode("ToBadger");
    headerTag.appendChild(headerText);

    headerTag.appendChild(headerLogo);
    headerTag.appendChild(headerText);

    body.appendChild(headerTag);
};