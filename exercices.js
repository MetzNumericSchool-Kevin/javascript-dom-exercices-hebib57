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

//Roger, enfoiré !

const blague = document.querySelector("#blague_de_roger_le_sorcier");
blague.remove();

//Archibald n'est pas là, appelons le !

const appeler_sorcier = document.querySelector("#call_archibald");
appeler_sorcier.addEventListener("click", callback);
function callback() {
  alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
}

//Faisons un peu de magie

const boites = document.querySelectorAll("#boites_magique .boite");

const btn_red = document.querySelector("#btn_change_red");
const btn_blue = document.querySelector("#btn_change_blue");
const btn_green = document.querySelector("#btn_change_green");

btn_red.addEventListener("click", function () {
  boites[0].style.backgroundColor = "red";
});

btn_blue.addEventListener("click", function () {
  boites[0].style.backgroundColor = "blue";
  boites[1].style.backgroundColor = "blue";
});

btn_green.addEventListener("click", function () {
  boites[0].style.backgroundColor = "green";
  boites[1].style.backgroundColor = "green";
  boites[2].style.backgroundColor = "green";
});

//Aventurier, voici ma boutique !

const potions = [
  {
    nom: "Potion de soin",
    description:
      "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description:
      "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];

const liste_potion = document.querySelector("#liste_potions");
const template = document.querySelector("#template_potion");
const carte_potion = template.content.cloneNode(true);

const carte_potion1 = template.content.cloneNode(true);

carte_potion.querySelector(".nom_potion").textContent = potions[0].nom;
carte_potion.querySelector(".prix_potion").textContent = potions[0].prix;
carte_potion.querySelector(".card-text.description_potion").textContent =
  potions[0].description;

carte_potion1.querySelector(".nom_potion").textContent = potions[1].nom;
carte_potion1.querySelector(".prix_potion").textContent = potions[1].prix;
carte_potion1.querySelector(".card-text.description_potion").textContent =
  potions[1].description;

liste_potion.append(carte_potion);
liste_potion.append(carte_potion1);

//Plus de potions, nous avons besoin de plus de potions !

const formulaire = document.querySelector(".form");
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const FormHtmlElement = formulaire;
  const formData = new FormData(FormHtmlElement);
  const nom = formData.get("nom");
  const prix = formData.get("prix");
  const description = formData.get("description");
  const liste_potion = document.querySelector("#liste_potions");
  const template = document.querySelector("#template_potion");
  const carte_potion = template.content.cloneNode(true);
  carte_potion.querySelector(".nom_potion").textContent = nom;
  carte_potion.querySelector(".prix_potion").textContent = prix;
  carte_potion.querySelector(".card-text.description_potion").textContent =
    description;
  liste_potion.append(carte_potion);
  formulaire.reset();
});
