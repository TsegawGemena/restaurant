export function loadMenu(){

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");

    const menuLabel = document.createElement("span");
    menuLabel.textContent ="CULINARY EXCELLENCE";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Discover Our Menu";

    const menuParagraph = document.createElement("p");
    menuParagraph.textContent ="Immerse your senses in a carefully curated selection of fine dining masterpieces, crafted with locally sourced artisan ingredients and boundless passion.";

    menuText.appendChild(menuLabel);
    menuText.appendChild(menuHeading);
    menuText.appendChild(menuParagraph);

}