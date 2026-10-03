export function loadHome(){
    const content = document.querySelector("#content");

    const hero =document.createElement("section");
    hero.classList.add("hero");

    const heading = documet.createElement("h1");
    heading.textContent ="AUTHENTIC FLAVORS,CREFTED WITH PASSION";

    hero.appendChild(heading);
    content.appendChild(hero);

};