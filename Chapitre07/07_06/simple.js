//Créer l'élément a
let elemA = document.createElement("a");
//Changer l'attribut href de l'élément &
elemA.href = "produits.html";
//Créer un texteNode
let linkLabel = document.createTextNode("Produits");
//Ajouter le texte à l'élément a
elemA.appendChild(linkLabel);
//Créer un élément li
let liElem = document.createElement("li");
//Ajouter l'élément a à l'élément li
liElem.appendChild(elemA);
//Rechercher l'élément ul et y ajouter l'élément li créé plus tôt
document.querySelector("#mainNav ul").appendChild(liElem);
