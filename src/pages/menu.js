import starterOne from "../images/starterOne.jpg";
import starterTwo from "../images/starterTwo.webp";
import starterThree from "../images/starterThree.webp";


export function loadMenu(){

    const content = document.querySelector("#content");

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");

    const menuLabel = document.createElement("span");
    menuLabel.textContent ="CULINARY EXCELLENCE";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Discover Our Menu";

    const menuParagraph = document.createElement("p");
    menuParagraph.textContent ="Immerse your senses in a carefully curated selection of fine dining masterpieces, \n" +" crafted  with locally sourced artisan ingredients and boundless passion.";

    menuText.appendChild(menuLabel);
    menuText.appendChild(menuHeading);
    menuText.appendChild(menuParagraph);
    menuSection.appendChild(menuText);

    content.appendChild(menuSection);

    const startersSection = document.createElement("div");
    startersSection.classList.add("starters-section");

    const grilledChicken = document.createElement("div")
    grilledChicken.classList.add("grilled-chicken");

    const grilledChickenImage = document.createElement("img");
    grilledChickenImage.classList.add("grilled-chicken-image");

    grilledChickenImage.src = starterThree;
    grilledChickenImage.alt = "best grilled chicken";

    grilledChicken.appendChild(grilledChickenImage);

    const crispySpring = document.createElement("div");
    crispySpring.classList.add("crispy-spring");

    const crispySpringImage = document.createElement("img");
    crispySpringImage.classList.add("crispy-spring-image");

    crispySpringImage.src = starterTwo;
    crispySpringImage.alt = "crispy sping";

    crispySpring.appendChild(crispySpringImage);

    const bruschetta = document.createElement("div");
    bruschetta.classList.add("bruschetta");

    const bruschettaImage = document.createElement("img");
    bruschettaImage.classList.add("bruschetta-image");

    bruschettaImage.src = starterOne;
    bruschettaImage.alt ="bruschetta";

    bruschetta.appendChild(bruschettaImage);

    startersSection.appendChild(grilledChicken);
    startersSection.appendChild(crispySpring);
    startersSection.appendChild(bruschetta);

    content.appendChild(startersSection);









};


