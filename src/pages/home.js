import foodImage from "../images/restaurant-food.jpg";
export function loadHome(){
    const content = document.querySelector("#content");

    const mainSection =document.createElement("section");
    mainSection.classList.add("main-section");

    const mainText =document.createElement("div");
    mainText.classList.add("main-text");

    const tagline = document.createElement("span");
    tagline.classList.add("tagline");
    tagline.textContent ="AUTHENTIC FLAVORS";

    const heading =document.createElement("h1");
    heading.textContent ="Crafted with passion & precision";

    const description =document.createElement("p");
    description.textContent ="Experience a culinary journey where time-honored techniques meet modern gastronomy. Every dish at Avaline is an ode to exquisite taste,curated with seasonal ingredients and uncompromising dedication.";

    const menuButton = document.createElement("button");
    menuButton.classList.add("primary-btn");
    menuButton.textContent ="Explore Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("secondary-btn");
    contactButton.textContent ="Contact Us";
    
    mainText.appendChild(tagline);
    mainText.appendChild(heading);
    mainText.appendChild(description);
    mainText.appendChild(menuButton);
    mainText.appendChild(contactButton);

    mainSection.appendChild(mainText);
    
    const mainImage =document.createElement("div");
    mainImage.classList.add("main-image");

  
    
    const image = document.createElement("img");
    image.src = foodImage;
    image.alt ="Delicious restaurant dish";

    mainImage.appendChild(image);
    mainSection.appendChild(mainImage);

    content.appendChild(mainSection);


    
};