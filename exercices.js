//Quel est le titre de la boutique

const titre_boutique = document.querySelector("h1");
const texte = titre_boutique.textContent;

console.log(texte);

//Des informations manquent !

const description_boutique = document.querySelector("#description_boutique");

const paragraphe = document.createElement("p");

paragraphe.textContent =
  "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";

description_boutique.appendChild(paragraphe);
