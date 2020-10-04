var result;

function addNumbers(num1 = 2, num2 = 3) {
  result = num1 + num2;
  return result;
}

var addNumbers = addNumbers(10, 5);

console.log(addNumbers); // 15
