import githubMark from "./assets/github-mark-white.svg";

export default function generateFooter(){
    const body = document.querySelector("body");

    const footerTag = document.createElement("div");
    footerTag.setAttribute("id", "footer");

    const footerText = document.createTextNode("Copyright © 2024 NewGen2022");
    footerTag.appendChild(footerText);

    const footerLink = document.createElement("a");
    footerLink.href = "https://github.com/NewGen2022";
    footerLink.target = "_blank";

    const footerImg = document.createElement("img");
    footerImg.src = githubMark;

    footerLink.appendChild(footerImg);
    footerTag.appendChild(footerText);
    footerTag.appendChild(footerLink);

    body.appendChild(footerTag);
};