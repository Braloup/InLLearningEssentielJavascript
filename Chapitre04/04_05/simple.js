for (var i = 0; i < 10; i++) {
  console.log(`L valeur de la variable  est ${i}`);
}

console.log("Boucle terminée !");

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // Sortir de l'itération de la boucle
  }
  console.log(`L valeur de la variable  est ${i}`);
}

console.log("Boucle terminée !");

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break; // Sortir de la boucle
  }
  console.log(`L valeur de la variable  est ${i}`);
}

console.log("Boucle terminée !");

var colors = ["rouge", "vert", "bleu"];
var person = {
  firstName: "Emmanuel",
  lastName: "Goldstein",
  age: 42,
  sex: "M",
};
for (color in colors) {
  console.log(`Ma couleur préférée est le ${colors[color]}.`);
}

for (prop in person) {
  console.log(`LA valeur de la clé ${prop} est ${person[prop]}`);
}
