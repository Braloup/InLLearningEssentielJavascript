var a = 2,
  b = 1;

if ((a = b)) {
  console.log('La réponse à la question est "true".');
} else {
  console.log('La réponse à la question est "false".');
}

console.log(a); //1 donc true

a = 2;
if (a == b) {
  console.log('La réponse à la question est "true".');
} else {
  console.log('La réponse à la question est "false".');
}

console.log(a); //2 donc false

b = "2";
if (a === b) {
  console.log('La réponse à la question est "true".');
} else {
  console.log('La réponse à la question est "false".');
}

console.log(a); //1 donc false b est une string.
