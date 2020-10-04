let colors = ["Rouge", "Vert", "Bleu"];

console.log(colors.length); // 3
console.log(colors.join()); //Rouge,Vert,Bleu
console.log(colors.join(" - ")); //Rouge - Vert - Bleu

colors.push("orange");
console.log(colors.join(" - ")); //Rouge - Vert - Bleu - orange

colors.unshift("blanc");
console.log(colors.join(" - ")); //blanc - Rouge - Vert - Bleu - orange

colors.shift();
console.log(colors.join(" - ")); //Rouge - Vert - Bleu - orange

colors.pop();
console.log(colors.join(" - ")); //Rouge - Vert - Bleu

colors.reverse();
console.log(colors.join(" - ")); //Bleu - Vert - Rouge
