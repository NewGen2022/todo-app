import githubMark from "./assets/github-mark-white.svg";

export default function generateFooter(){
    const body = document.querySelector("body");

    const footerTag = document.createElement("div");
    footerTag.setAttribute("id", "footer");

    const footerText = document.createTextNode("Copyright © 2024 NewGen2022");
    footerTag.appendChild(footerText);

    const footerImg = document.createElement("img");
    footerImg.src = githubMark;

    footerTag.appendChild(footerText);
    footerTag.appendChild(footerImg);

    body.appendChild(footerTag);
};