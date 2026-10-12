import starterOne from "../images/starterOne.jpg";
import starterTwo from "../images/starterTwo.webp";
import starterThree from "../images/starterThree.webp";
import mainCourseImageOne from "../images/mainCourseOne.jpeg";
import mainCourseImageTwo from "../images/mainCourseTwo.jpeg";
import mainCourseImageThree from "../images/mainCourseThree.webp";
import mainCourseImageFour from "../images/mainCourseFour.webp";
import dessertImageOne from "../images/dessertOne.jpg";
import dessertImageTwo from "../images/dessertTwo.webp";
import dessertImageThree from "../images/dessertThree.jpeg";


export function loadMenu(){

    const content = document.querySelector("#content");

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    const menuSectionHeading = document.createElement("h2");
    menuSectionHeading.classList.add("menu-section-heading");
    menuSectionHeading.textContent = "Starters";

   

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
     menuSection.appendChild(menuSectionHeading);

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

    const grilledChickenPrice = document.createElement("span");
    grilledChickenPrice.classList.add("starter-price");
    grilledChickenPrice.textContent = "$18";

    const grilledChickenTextParagraph = document.createElement("p");
    grilledChickenTextParagraph.textContent = "Tender, flame-grilled chicken skewers marinated in aromatic spices, served over fresh greens with a zesty lime wedge adn a creamy herb yogurt dip. A flavorful, satisfying starter with a smoky finish and refreshing touch.";
    
    const grilledChickenCategory = document.createElement("span");
    grilledChickenCategory.classList.add("starter-category");
    grilledChickenCategory.textContent = "GRILLED . CHEF'S SPECIAL";

    grilledChickenText.appendChild(grilledChickenHeading);
    grilledChickenText.appendChild(grilledChickenPrice);
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
    
    const crispySpringPrice = document.createElement("span");
    crispySpringPrice.classList.add("starter-price");
    crispySpringPrice.textContent = "$14";

    const crispySpringParagraph = document.createElement("p");
    crispySpringParagraph.textContent = "Golden, crispy spring rolls filled with a delicious savor mixture of fresh vegetables and flavorful seasonings. Served hot with a tasty dipping sauce, they are the perfect crunchy and satisfying start to your meal.";
    
    
    
    const crispySpringCategory = document.createElement("span");
    crispySpringCategory.classList.add("starter-category");
    crispySpringCategory.textContent = "VEGETARIAN • CRISPY";



    crispySpringText.appendChild(crispySpringHeading);
    crispySpringText.appendChild(crispySpringPrice);
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

    const bruschettaPrice = document.createElement("span");
    bruschettaPrice.classList.add("starter-price");
    bruschettaPrice.textContent = "$16";

    const bruschettaParagraph = document.createElement("p");
    bruschettaParagraph.textContent ="A classic Italian starter featuring toasted slices of bread topped with juicy diced tomatoes, fresh basil, and a touch of olive oil. Light,fresh, and full of flavor, it is a delightful appetizer to enjoy before your main course.";
    

    const bruschettaCategory = document.createElement("span");
    bruschettaCategory.classList.add("starter-category");
    bruschettaCategory.textContent = "FRESH • VEGETARIAN";


    bruschettaText.appendChild(bruschettaHeading);
    bruschettaText.appendChild(bruschettaPrice);
    bruschettaText.appendChild(bruschettaParagraph);
        bruschettaText.appendChild(bruschettaCategory);

    bruschetta.appendChild(bruschettaText);

    startersSection.appendChild(grilledChicken);
    startersSection.appendChild(crispySpring);
    startersSection.appendChild(bruschetta);

    content.appendChild(startersSection);


    const mainCoursesSection = document.createElement("section");
    mainCoursesSection.classList.add("main-courses-section");

    const mainCoursesHeading = document.createElement("h2");
    mainCoursesHeading.classList.add("main-courses-heading");
    mainCoursesHeading.textContent = "Main Courses";

    const mainCoursesGrid = document.createElement("div");
    mainCoursesGrid.classList.add("main-courses-grid");

    // MAIN COURSE ONE
    const mainCourseOne = document.createElement("div");
    mainCourseOne.classList.add("main-course-one");

    const mainCourseOneImage = document.createElement("img");
    mainCourseOneImage.classList.add("main-course-one-image");
    mainCourseOneImage.src = mainCourseImageOne;
    mainCourseOneImage.alt = "Grilled Chicken";

    const mainCourseOneText = document.createElement("div");
    mainCourseOneText.classList.add("main-course-one-text");

    const mainCourseOneHeading = document.createElement("h3");
    mainCourseOneHeading.textContent = "Grilled Chicken";

    const mainCourseOnePrice = document.createElement("span");
    mainCourseOnePrice.classList.add("main-course-price");
    mainCourseOnePrice.textContent = "$32";

    const mainCourseOneParagraph = document.createElement("p");
    mainCourseOneParagraph.textContent =
        "Free-range organic chicken breast with seasonal roasted root vegetables and herb reduction.";

    const mainCourseOneCategory = document.createElement("span");
    mainCourseOneCategory.classList.add("main-course-category");
    mainCourseOneCategory.textContent = "Gluten-Free";

    mainCourseOneText.appendChild(mainCourseOneHeading);
    mainCourseOneText.appendChild(mainCourseOnePrice);
    mainCourseOneText.appendChild(mainCourseOneParagraph);
    mainCourseOneText.appendChild(mainCourseOneCategory);

    mainCourseOne.appendChild(mainCourseOneImage);
    mainCourseOne.appendChild(mainCourseOneText);

    // MAIN COURSE TWO
    const mainCourseTwo = document.createElement("div");
    mainCourseTwo.classList.add("main-course-two");

    const mainCourseTwoImage = document.createElement("img");
    mainCourseTwoImage.classList.add("main-course-two-image");
    mainCourseTwoImage.src = mainCourseImageTwo;
    mainCourseTwoImage.alt = "Signature Beef Steak";

    const mainCourseTwoText = document.createElement("div");
    mainCourseTwoText.classList.add("main-course-two-text");

    const mainCourseTwoHeading = document.createElement("h3");
    mainCourseTwoHeading.textContent = "Signature Beef Steak";

    const mainCourseTwoPrice = document.createElement("span");
    mainCourseTwoPrice.classList.add("main-course-price");
    mainCourseTwoPrice.textContent = "$48";

    const mainCourseTwoParagraph = document.createElement("p");
    mainCourseTwoParagraph.textContent =
        "Prime dry-aged ribeye served with truffle potato puree, wild mushrooms, and red wine jus.";

    const mainCourseTwoCategory = document.createElement("span");
    mainCourseTwoCategory.classList.add("main-course-category");
    mainCourseTwoCategory.textContent = "Chef's Choice";

    mainCourseTwoText.appendChild(mainCourseTwoHeading);
    mainCourseTwoText.appendChild(mainCourseTwoPrice);
    mainCourseTwoText.appendChild(mainCourseTwoParagraph);
    mainCourseTwoText.appendChild(mainCourseTwoCategory);

    mainCourseTwo.appendChild(mainCourseTwoImage);
    mainCourseTwo.appendChild(mainCourseTwoText);

    // MAIN COURSE THREE
    const mainCourseThree = document.createElement("div");
    mainCourseThree.classList.add("main-course-three");

    const mainCourseThreeImage = document.createElement("img");
    mainCourseThreeImage.classList.add("main-course-three-image");
    mainCourseThreeImage.src = mainCourseImageThree;
    mainCourseThreeImage.alt = "Creamy Truffle Pasta";

    const mainCourseThreeText = document.createElement("div");
    mainCourseThreeText.classList.add("main-course-three-text");

    const mainCourseThreeHeading = document.createElement("h3");
    mainCourseThreeHeading.textContent = "Creamy Truffle Pasta";

    const mainCourseThreePrice = document.createElement("span");
    mainCourseThreePrice.classList.add("main-course-price");
    mainCourseThreePrice.textContent = "$28";

    const mainCourseThreeParagraph = document.createElement("p");
    mainCourseThreeParagraph.textContent =
        "Handmade tagliatelle with black summer truffle cream, aged parmesan, and cracked pepper.";

    const mainCourseThreeCategory = document.createElement("span");
    mainCourseThreeCategory.classList.add("main-course-category");
    mainCourseThreeCategory.textContent = "Vegetarian";

    mainCourseThreeText.appendChild(mainCourseThreeHeading);
    mainCourseThreeText.appendChild(mainCourseThreePrice);
    mainCourseThreeText.appendChild(mainCourseThreeParagraph);
    mainCourseThreeText.appendChild(mainCourseThreeCategory);

    mainCourseThree.appendChild(mainCourseThreeImage);
    mainCourseThree.appendChild(mainCourseThreeText);

    // MAIN COURSE FOUR
    const mainCourseFour = document.createElement("div");
    mainCourseFour.classList.add("main-course-four");

    const mainCourseFourImage = document.createElement("img");
    mainCourseFourImage.classList.add("main-course-four-image");
    mainCourseFourImage.src = mainCourseImageFour;
    mainCourseFourImage.alt = "Chef's Special Sea Bass";

    const mainCourseFourText = document.createElement("div");
    mainCourseFourText.classList.add("main-course-four-text");

    const mainCourseFourHeading = document.createElement("h3");
    mainCourseFourHeading.textContent = "Chef's Special Sea Bass";

    const mainCourseFourPrice = document.createElement("span");
    mainCourseFourPrice.classList.add("main-course-price");
    mainCourseFourPrice.textContent = "$42";

    const mainCourseFourParagraph = document.createElement("p");
    mainCourseFourParagraph.textContent =
        "Wild-caught Chilean sea bass with saffron risotto, crispy leeks, and lemon beurre blanc.";

    const mainCourseFourCategory = document.createElement("span");
    mainCourseFourCategory.classList.add("main-course-category");
    mainCourseFourCategory.textContent = "Seafood";

    mainCourseFourText.appendChild(mainCourseFourHeading);
    mainCourseFourText.appendChild(mainCourseFourPrice);
    mainCourseFourText.appendChild(mainCourseFourParagraph);
    mainCourseFourText.appendChild(mainCourseFourCategory);

    mainCourseFour.appendChild(mainCourseFourImage);
    mainCourseFour.appendChild(mainCourseFourText);

    // APPEND ALL FOUR MAIN COURSES
    mainCoursesGrid.appendChild(mainCourseOne);
    mainCoursesGrid.appendChild(mainCourseTwo);
    mainCoursesGrid.appendChild(mainCourseThree);
    mainCoursesGrid.appendChild(mainCourseFour);

    mainCoursesSection.appendChild(mainCoursesHeading);
    mainCoursesSection.appendChild(mainCoursesGrid);

    content.appendChild(mainCoursesSection);

    // DESSERTS SECTION
    const dessertsSection = document.createElement("section");
    dessertsSection.classList.add("desserts-section");

    const dessertsHeading = document.createElement("h2");
    dessertsHeading.classList.add("desserts-heading");
    dessertsHeading.textContent = "Desserts";

    const dessertsGrid = document.createElement("div");
    dessertsGrid.classList.add("desserts-grid");

    // DESSERT ONE
    const dessertOne = document.createElement("div");
    dessertOne.classList.add("dessert-one");

    const dessertOneImage = document.createElement("img");
    dessertOneImage.classList.add("dessert-one-image");
    dessertOneImage.src = dessertImageOne;
    dessertOneImage.alt = "Chocolate Tart";

    const dessertOneText = document.createElement("div");
    dessertOneText.classList.add("dessert-one-text");

    const dessertOneHeading = document.createElement("h3");
    dessertOneHeading.textContent = "Chocolate Tart";

    const dessertOnePrice = document.createElement("span");
    dessertOnePrice.classList.add("dessert-price");
    dessertOnePrice.textContent = "$16";

    const dessertOneParagraph = document.createElement("p");
    dessertOneParagraph.textContent =
        "Rich dark chocolate ganache in a crisp pastry crust with fresh berries and vanilla ice cream.";

    dessertOneText.appendChild(dessertOneHeading);
    dessertOneText.appendChild(dessertOnePrice);
    dessertOneText.appendChild(dessertOneParagraph);

    dessertOne.appendChild(dessertOneImage);
    dessertOne.appendChild(dessertOneText);

    // DESSERT TWO
    const dessertTwo = document.createElement("div");
    dessertTwo.classList.add("dessert-two");

    const dessertTwoImage = document.createElement("img");
    dessertTwoImage.classList.add("dessert-two-image");
    dessertTwoImage.src = dessertImageTwo;
    dessertTwoImage.alt = "Artisan Cheesecake";

    const dessertTwoText = document.createElement("div");
    dessertTwoText.classList.add("dessert-two-text");

    const dessertTwoHeading = document.createElement("h3");
    dessertTwoHeading.textContent = "Artisan Cheesecake";

    const dessertTwoPrice = document.createElement("span");
    dessertTwoPrice.classList.add("dessert-price");
    dessertTwoPrice.textContent = "$14";

    const dessertTwoParagraph = document.createElement("p");
    dessertTwoParagraph.textContent =
        "Velvety New York style cheesecake with a buttery graham crust and berry compote.";

    dessertTwoText.appendChild(dessertTwoHeading);
    dessertTwoText.appendChild(dessertTwoPrice);
    dessertTwoText.appendChild(dessertTwoParagraph);

    dessertTwo.appendChild(dessertTwoImage);
    dessertTwo.appendChild(dessertTwoText);

    // DESSERT THREE
    const dessertThree = document.createElement("div");
    dessertThree.classList.add("dessert-three");

    const dessertThreeImage = document.createElement("img");
    dessertThreeImage.classList.add("dessert-three-image");
    dessertThreeImage.src = dessertImageThree;
    dessertThreeImage.alt = "Fresh Fruit Tart";

    const dessertThreeText = document.createElement("div");
    dessertThreeText.classList.add("dessert-three-text");

    const dessertThreeHeading = document.createElement("h3");
    dessertThreeHeading.textContent = "Fresh Fruit Tart";

    const dessertThreePrice = document.createElement("span");
    dessertThreePrice.classList.add("dessert-price");
    dessertThreePrice.textContent = "$15";

    const dessertThreeParagraph = document.createElement("p");
    dessertThreeParagraph.textContent =
        "Seasonal fresh fruits atop delicate custard in a sweet butter pastry shell.";

    dessertThreeText.appendChild(dessertThreeHeading);
    dessertThreeText.appendChild(dessertThreePrice);
    dessertThreeText.appendChild(dessertThreeParagraph);

    dessertThree.appendChild(dessertThreeImage);
    dessertThree.appendChild(dessertThreeText);

    // APPEND ALL THREE DESSERTS
    dessertsGrid.appendChild(dessertOne);
    dessertsGrid.appendChild(dessertTwo);
    dessertsGrid.appendChild(dessertThree);

    dessertsSection.appendChild(dessertsHeading);
    dessertsSection.appendChild(dessertsGrid);

    content.appendChild(dessertsSection);

    // MENU FOOTER
    const menuFooter = document.createElement("footer");
    menuFooter.classList.add("menu-footer");

    const menuFooterText = document.createElement("p");
    menuFooterText.textContent =
        "© 2024 Aveline Restaurant. All rights reserved. Hours: Tue-Sun 5pm - 11pm.";

    menuFooter.appendChild(menuFooterText);
    content.appendChild(menuFooter);
};


