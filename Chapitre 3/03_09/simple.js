var base = 5;
var bool = Boolean(base);

console.log(bool); // true

var base2 = "Bonjour";
var bool = Boolean(base);

console.log(bool); // true

//Falsy valur
var base01 = "";
var bool01 = Boolean(base01);

console.log(bool01); // false

var base02 = 0;
var bool02 = Boolean(base02);

console.log(bool02); // false

var base03 = undefined;
var bool03 = Boolean(base03);

console.log(bool03); // false

var base04 = NaN;
var bool04 = Boolean(base04);

console.log(bool04); // false

var base05 = null;
var bool05 = Boolean(base05);

console.log(bool05); // false

var base06 = false;
var bool06 = Boolean(base06);

console.log(bool06); // false
