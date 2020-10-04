var a = 2,
  b = 3,
  result;

function addNumbers(num1 = 2, num2 = 3) {
  result = num1 + num2;
  console.log(result);
}

addNumbers(2, 6); // 8
addNumbers(7, 15); // 22
addNumbers(); // 5
addNumbers(4); //7
