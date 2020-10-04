/*var person = new Object();
person.firstName = "Emmanuel";
person.lastName = "Goldstein";
person.age = 42;
person.sex = "M";*/

var person = {
  firstName: "Emmanuel",
  lastName: "Goldstein",
  age: 42,
  sex: "M",
};
console.log(person);

console.log(person.age); // 42
console.log(person["lastName"]); //Goldstein
