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

    const grilledChickenText = document.createElement("div");
    grilledChickenText.classList.add("grilled-chicken-text");

    const grilledChickenHeading = document.createElement("h3");
    grilledChickenHeading.textContent = "Grilled Chicken Skewers With Herb Yogurt Dip";

    const grilledChickenTextParagraph = document.createElement("p");
    grilledChickenTextParagraph.textContent = "Tender, flame-grilled chicken skewers marinated in aromatic spices, served over fresh greens with a zesty lime wedge adn a creamy herb yogurt dip. A flavorful, satisfying starter with a smoky finish and refreshing touch.";
    
    const grilledChickenCategory = document.createElement("span");
    grilledChickenCategory.classList.add("starter-category");
    grilledChickenCategory.textContent = "GRILLED . CHEF'S SPECIAL";

    grilledChickenText.appendChild(grilledChickenHeading);
    grilledChickenText.appendChild(grilledChickenTextParagraph);
    grilledChickenText.appendChild(grilledChickenCategory);


    grilledChicken.appendChild(grilledChickenText);






    const crispySpring = document.createElement("div");
    crispySpring.classList.add("crispy-spring");

    const crispySpringImage = document.createElement("img");
    crispySpringImage.classList.add("crispy-spring-image");

    crispySpringImage.src = starterTwo;
    crispySpringImage.alt = "crispy sping";

    crispySpring.appendChild(crispySpringImage);

    const crispySpringText = document.createElement("div");
    crispySpringText.classList.add("crispy-spring-text");

    const crispySpringHeading = document.createElement("h3");
    crispySpringHeading.textContent = "Crispy Spring Rolls";
    
    const crispySpringParagraph = document.createElement("p");
    crispySpringParagraph.textContent = "Golden, crispy spring rolls filled with a delicious savor mixture of fresh vegetables and flavorful seasonings. Served hot with a tasty dipping sauce, they are the perfect crunchy and satisfying start to your meal.";
    
    
    
    const crispySpringCategory = document.createElement("span");
    crispySpringCategory.classList.add("starter-category");
    crispySpringCategory.textContent = "VEGETARIAN • CRISPY";



    crispySpringText.appendChild(crispySpringHeading);
    crispySpringText.appendChild(crispySpringParagraph);
    crispySpringText.appendChild(crispySpringCategory);

    crispySpring.appendChild(crispySpringText);

    const bruschetta = document.createElement("div");
    bruschetta.classList.add("bruschetta");

    const bruschettaImage = document.createElement("img");
    bruschettaImage.classList.add("bruschetta-image");


    bruschettaImage.src = starterOne;
    bruschettaImage.alt ="bruschetta";

    bruschetta.appendChild(bruschettaImage);

    const bruschettaText = document.createElement("div");
    bruschettaText.classList.add("bruschetta-text");

    const bruschettaHeading = document.createElement("h3");
    bruschettaHeading.textContent = "Fresh Tomato Bruschetta";

    const bruschettaParagraph = document.createElement("p");
    bruschettaParagraph.textContent ="A classic Italian starter featuring toasted slices of bread topped with juicy diced tomatoes, fresh basil, and a touch of olive oil. Light,fresh, and full of flavor, it is a delightful appetizer to enjoy before your main course.";
    

    const bruschettaCategory = document.createElement("span");
    bruschettaCategory.classList.add("starter-category");
    bruschettaCategory.textContent = "FRESH • VEGETARIAN";


    bruschettaText.appendChild(bruschettaHeading);
    bruschettaText.appendChild(bruschettaParagraph);
        bruschettaText.appendChild(bruschettaCategory);

    bruschetta.appendChild(bruschettaText);

    startersSection.appendChild(grilledChicken);
    startersSection.appendChild(crispySpring);
    startersSection.appendChild(bruschetta);

    content.appendChild(startersSection);









};


