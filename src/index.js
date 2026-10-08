import "./style.css";
import {loadHome} from "./pages/home.js";
import {loadMenu} from "./pages/menu.js";
import {loadContact} from "./pages/contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const contactButton = document.querySelector(".contact-btn");

function showPage(pageFunction) {
    content.innerHTML = "";
    pageFunction();
}

homeButton.addEventListener("click", () => showPage(loadHome));
menuButton.addEventListener("click", () => showPage(loadMenu));
contactButton.addEventListener("click", () => showPage(loadContact));


loadHome();

