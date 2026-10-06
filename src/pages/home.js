import foodImage from "../images/restaurant-food.jpg";
import experienceimage from "../images/experienceImage.webp";


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

    const buttonContainer=document.createElement("div");
    buttonContainer.classList.add("button-container");

    const menuButton = document.createElement("button");
    menuButton.classList.add("primary-btn");
    menuButton.textContent ="Explore Our Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("secondary-btn");
    contactButton.textContent ="Contact Us";

    const rating =document.createElement("div");
    rating.classList.add("rating");

    const michelin = document.createElement("div");
    michelin.classList.add("rating-item");

    const michelinTitle = document.createElement("h3");
    michelinTitle.classList.add("rating-title");
    michelinTitle.textContent="Michelin";

    const michelinDescription = document.createElement("span");
    michelinDescription.textContent = "GUIDE SELECTED 2026";

    michelin.appendChild(michelinTitle );
    michelin.appendChild(michelinDescription);


    const score = document.createElement("div");
    score.classList.add("rating-item");
    
    const scoreTitle = document.createElement("h3");
    scoreTitle.classList.add("rating-title");
    scoreTitle.textContent="4.9 / 5.0";


    const scoreDescription = document.createElement("span");
    scoreDescription.textContent = "OVER 1,200 REVIEWS";

    score.appendChild(scoreTitle);
    score.appendChild(scoreDescription);

    rating.appendChild(michelin);
    rating.appendChild(score);



    
    mainText.appendChild(tagline);
    mainText.appendChild(heading);
    mainText.appendChild(description);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    mainText.appendChild(buttonContainer);
    
    mainText.appendChild(rating);
 
    mainSection.appendChild(mainText);
    
    const mainImage =document.createElement("div");
    mainImage.classList.add("main-image");

  
    
    const image = document.createElement("img");
    image.src = foodImage;
    image.alt ="Delicious restaurant dish";

    mainImage.appendChild(image);

    const imageText = document.createElement("div");
    imageText.classList.add("image-text");

    const imageTitle = document.createElement("h3");
    imageTitle.textContent = "CHEF'S SIGNATURE SELECTION";

    const imageDescription = document.createElement("p");
    imageDescription.textContent  = "Dry-Aged Prime Ribeye & Roasted Roots";

    imageText.appendChild(imageTitle);
    imageText.appendChild(imageDescription);
    
    mainImage.appendChild(imageText);

    mainSection.appendChild(mainImage);
    
    content.appendChild(mainSection);


    const experienceSection = document.createElement("section");
    experienceSection.classList.add("experience-section");

    const experienceImage = document.createElement("div");
    experienceImage.classList.add("experience-image");

    const experienceImg = document.createElement("img");
    experienceImg.src = experienceimage;
    experienceImg.alt ="great experience";

    experienceImage.appendChild(experienceImg);


    const experienceText = document.createElement("div");
    experienceText.classList.add("experience-text");

    const aboutLine = document.createElement("span");
    aboutLine.classList.add("about-line");
    aboutLine.textContent = "ABOUT THE RESTAURANT";

    const experienceHeading =document.createElement("h1");
    experienceHeading.classList.add("about-experience");
    experienceHeading.textContent = "An Atmosphere of Refined Elegance";

    const experience = document.createElement("p");
    experience.textContent = " At Aveline, dining is an immersive sensory journey. Every element-from our carefully curated seasonal ingredients and sommelier cellar pairings to the acoustic balance and bespoke velvet banquenttes-is desgned to create unforgettable moments of culinary craft and ambience Our philosophy balance classic European techniques with innovative gastronomy,offering an unhurried sanctuary away from the bustle of the city.";
   
   
    experienceText.appendChild(aboutLine);
     experienceText.appendChild(experienceHeading);
    experienceText.appendChild(experience);
   
     
    


    experienceSection.appendChild(experienceImage);
    experienceSection.appendChild(experienceText);
    content.append(experienceSection);








    
};