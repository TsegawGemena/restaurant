import foodImage from "../images/restaurant-food.jpg";
import experienceimage from "../images/experienceImage.webp";



export function loadHome(onMenuClick, onContactClick){
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
    menuButton.addEventListener("click", onMenuClick);

    const contactButton = document.createElement("button");
    contactButton.classList.add("secondary-btn");
    contactButton.textContent ="Contact Us";
    contactButton.addEventListener("click", onContactClick);

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
   
   
    const experienceStats = document.createElement("div");
    experienceStats.classList.add("experience-stats");

    const chefsStat = document.createElement("div");
    chefsStat.classList.add("stat-item");

    const chefsNumber = document.createElement("h3");
    chefsNumber.textContent = "15+"

    const chefsLabel = document.createElement("span");
    chefsLabel.textContent = "Master chefs";

    chefsStat.appendChild(chefsNumber);
    chefsStat.appendChild(chefsLabel);

    const produceStat = document.createElement("div");
    produceStat.classList.add("stat-item");

    const produceNumber = document.createElement("h3");
    produceNumber.textContent = "100%";

    const producelabel = document.createElement("span");
    producelabel.textContent = "Organic Produce";

    produceStat.appendChild(produceNumber);
    produceStat.appendChild(producelabel);
     
    const winStat = document.createElement("div");
    winStat.classList.add("stat-item");

    const wineNumber = document.createElement("h3");
    wineNumber.textContent = "350+";

    const wineLabel = document.createElement("span");
    wineLabel.textContent = "curated Wines";

    winStat.appendChild(wineNumber);
    winStat.appendChild(wineLabel);
    experienceStats.appendChild(chefsStat);
    experienceStats.appendChild(produceStat);
    experienceStats.appendChild(winStat);

    
    experienceText.appendChild(aboutLine);
    experienceText.appendChild(experienceHeading);
    experienceText.appendChild(experience);
   
     


    experienceSection.appendChild(experienceImage);
    experienceSection.appendChild(experienceText);
    experienceText.appendChild(experienceStats);

    content.appendChild(experienceSection);

    const avelineExperience = document.createElement("div");
    avelineExperience.classList.add("aveline-experience");
   
    const theAveline = document.createElement("span");
    theAveline.classList.add("the-aveline");
    theAveline.textContent = " - THE AVELINE EXPERIENCE -"
    
    const standardHeading = document.createElement("h1");
    standardHeading.textContent ="An Uncompromising Standard";

    const pillarsParagraph = document.createElement("P");
    pillarsParagraph.textContent = "Three core pillars guide every service, delivering thoughtful hospitality and unmatched culinary finesse";
    
    
    avelineExperience.appendChild(theAveline);
    avelineExperience.appendChild(standardHeading);
    avelineExperience.appendChild(pillarsParagraph);
    


    content.appendChild(avelineExperience);

    const threePillars = document.createElement("div");
    threePillars.classList.add("three-pillars");

    const pillarOne = document.createElement("div");

    const ingredientsHeading= document.createElement("h3");
    ingredientsHeading.textContent ="Fresh Ingredients";

    const pillarOneParagraph= document.createElement("p");
    pillarOneParagraph.textContent = "Locally sourced daily from biodynamic farms and artisan purveyors, ensuring pristine flavor profiles and the absolute peak of sustainable seasonality.";

    const pillarOneDescription = document.createElement("span");
    pillarOneDescription.classList.add("pillar-one-description");
    pillarOneDescription.textContent = "ZERO PESTICIDES . DAILY HARVEST";
    
    pillarOne.appendChild(ingredientsHeading);
    pillarOne.appendChild(pillarOneParagraph);
    pillarOne.appendChild(pillarOneDescription);

    const pillarTwo = document.createElement("div");

    const chefsHeading = document.createElement("h3");
    chefsHeading.textContent = "Expert Chefs";



    const pillarTwoParagraph = document.createElement("P");
    pillarTwoParagraph.textContent = "Led by culinary visionaries with Michelin pedigree, our brigade merges ancestral open-fire traditions with groundbreaking modern gastronimic artistry."

    const pillarTwoDescription = document.createElement("span");
    pillarTwoDescription.classList.add("pillar-two-description");
    pillarTwoDescription.textContent = "WORLD-CLASS TEAM . PRECISION";
    

    pillarTwo.appendChild(chefsHeading);
    pillarTwo.appendChild(pillarTwoParagraph);
    pillarTwo.appendChild(pillarTwoDescription);


    const pillarThree = document.createElement("div");

    const atmosphereHeading = document.createElement("h3");
    atmosphereHeading.textContent ="Warm Atmosphere";

    const pillarThreeParagraph = document.createElement("p");
    pillarThreeParagraph.textContent = "Immerse yourself in intimate candlelight, handcrafted walnut accents, tailored acoustic warmth, and gracious hospitality attentive to your every need.";

    const pillarThreeDescription = document.createElement("span");
    pillarThreeDescription.classList.add("pillar-three-description");
    pillarThreeDescription.textContent = "INTIMATE AMBIANCE . LIVE PIANO";
    
    pillarThree.appendChild(atmosphereHeading);
    pillarThree.appendChild(pillarThreeParagraph);
    pillarThree.appendChild(pillarThreeDescription);

    threePillars.appendChild(pillarOne);
    threePillars.appendChild(pillarTwo);
    threePillars.appendChild(pillarThree);

    content.appendChild(threePillars);

    const tastingContainer = document.createElement("div");
    tastingContainer.classList.add("tasting-container");

    const tastingText = document.createElement("div");
    tastingText.classList.add("tasting-text");

    const tastingLabel = document.createElement("span");
    tastingLabel.textContent ="SEASONAL TASTING DEGUSTATION";

    const tastingHeading = document.createElement("h1");
    tastingHeading.textContent ="Discover Our Autumn / Winter Tasting Menu";

    const tastingParagraph = document.createElement("p");
    tastingParagraph.textContent ="Seven meticulously orchestrated courses paired with exceptional vintages curated by Head Sommelier Marc Laurent. Available nightly by reservation only.";

    const tastingButton = document.createElement("div");
    tastingButton.classList.add("tasting-button");

    const viewButton = document.createElement("button");
    viewButton.classList.add("view-button");
    viewButton.textContent = "View Seasonal Menu";
    viewButton.addEventListener("click", onMenuClick);

    tastingButton.appendChild(viewButton);

    const reserveButton = document.createElement("button");
    reserveButton.classList.add("reserve-button");
    reserveButton.textContent ="Reserve Tasting";
    reserveButton.addEventListener("click", onContactClick);

    tastingButton.appendChild(reserveButton);


    tastingText.appendChild(tastingLabel);

    tastingText.appendChild(tastingHeading);
    tastingText.appendChild(tastingParagraph);
    
    tastingContainer.appendChild(tastingText);
    tastingContainer.appendChild(tastingButton);

    content.appendChild(tastingContainer);


    const footer = document.createElement("footer");
footer.classList.add("footer");


// Footer main content
const footerMain = document.createElement("div");
footerMain.classList.add("footer-main");


// Brand column
const footerBrand = document.createElement("div");
footerBrand.classList.add("footer-column");

const brandName = document.createElement("h3");
brandName.textContent = "✦ Aveline";

const brandDescription = document.createElement("p");
brandDescription.textContent =
    "A sanctuary of elevated gastronomy and understated luxury. Every evening designed as an unhurried celebration of taste and craft.";

footerBrand.appendChild(brandName);
footerBrand.appendChild(brandDescription);


// Hours column
const hoursColumn = document.createElement("div");
hoursColumn.classList.add("footer-column");

const hoursTitle = document.createElement("h4");
hoursTitle.textContent = "HOURS OF OPERATION";

const hoursText = document.createElement("p");
hoursText.textContent =
    "Monday – Friday: 5:00 PM – 11:30 PM\nSaturday – Sunday: 4:30 PM – Midnight\nPrivate dining available upon request.";

hoursColumn.appendChild(hoursTitle);
hoursColumn.appendChild(hoursText);


// Address column
const addressColumn = document.createElement("div");
addressColumn.classList.add("footer-column");

const addressTitle = document.createElement("h4");
addressTitle.textContent = "ADDRESS & LOCATION";

const addressText = document.createElement("p");
addressText.textContent =
    "14 Berkeley Square, Mayfair\nLondon W1J 6BL, United Kingdom\nValet parking provided at front entrance.";

addressColumn.appendChild(addressTitle);
addressColumn.appendChild(addressText);


// Reservations column
const reservationsColumn = document.createElement("div");
reservationsColumn.classList.add("footer-column");

const reservationsTitle = document.createElement("h4");
reservationsTitle.textContent = "RESERVATIONS NOTE";

const reservationsText = document.createElement("p");
reservationsText.textContent =
    "Reservations open 30 days in advance.\nPhone: +44 (0) 20 7946 0912\nConcierge: reservations@aveline.com";

reservationsColumn.appendChild(reservationsTitle);
reservationsColumn.appendChild(reservationsText);


// Social links
const socialLinks = document.createElement("div");
socialLinks.classList.add("social-links");

const instagram = document.createElement("a");
instagram.textContent = "Instagram";

const facebook = document.createElement("a");
facebook.textContent = "Facebook";

const tripAdvisor = document.createElement("a");
tripAdvisor.textContent = "TripAdvisor";

socialLinks.appendChild(instagram);
socialLinks.appendChild(facebook);
socialLinks.appendChild(tripAdvisor);

reservationsColumn.appendChild(socialLinks);


// Add columns
footerMain.appendChild(footerBrand);
footerMain.appendChild(hoursColumn);
footerMain.appendChild(addressColumn);
footerMain.appendChild(reservationsColumn);

footer.appendChild(footerMain);


// Footer bottom
const footerBottom = document.createElement("div");
footerBottom.classList.add("footer-bottom");

const copyright = document.createElement("p");
copyright.textContent =
    "© 2024 Aveline Restaurant Group. All rights reserved.";

const legalLinks = document.createElement("div");
legalLinks.classList.add("legal-links");

const privacy = document.createElement("a");
privacy.textContent = "Privacy Policy";

const terms = document.createElement("a");
terms.textContent = "Terms of Service";

const press = document.createElement("a");
press.textContent = "Press Inquiries";

legalLinks.appendChild(privacy);
legalLinks.appendChild(terms);
legalLinks.appendChild(press);

footerBottom.appendChild(copyright);
footerBottom.appendChild(legalLinks);

footer.appendChild(footerBottom);


// Add footer to page
content.appendChild(footer);





















    
};