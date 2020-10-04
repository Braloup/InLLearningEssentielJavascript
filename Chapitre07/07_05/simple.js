let main = document.querySelector("#pageContent main");
let mainP = document.querySelector("#pageContent main p");

//mainP.setAttribute("align", "right");
mainP.align = "right";

console.log(`L'élément main possède ${main.children.length} enfants.`);
console.log(mainP);
