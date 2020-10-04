let today = new Date();
let birthday = new Date(1978, 08, 07, 19, 30);

console.log(today);
console.log(birthday); //Date Thu Sep 07 1978 19:30:00 GMT+0200 (heure d’été d’Europe centrale)

console.log(birthday.getDate()); // 7
console.log(birthday.getDay()); // 4 => vendredi
console.log(birthday.getMonth()); // 8 => septembre

console.log(today.getTime); // Nombre de milliseconde depuis le 1 janvier 1070
