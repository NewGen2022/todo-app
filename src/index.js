import generateSidebar from "./sidebar";
import "./styles/main.css";
import honeyBadger from "./assets/transparent-bg-honey-badger.png";

const body = document.querySelector("body");

const img = document.createElement("img");
img.src = honeyBadger;

body.appendChild(img);

generateSidebar();