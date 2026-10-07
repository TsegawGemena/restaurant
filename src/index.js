import "./style.css";
import {loadHome} from "./pages/home.js";
import {loadMenu} from "./pages/menu.js";
import {loadContact} from "./pages/contact.js";


loadHome();

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadContact);

