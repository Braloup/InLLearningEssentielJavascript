var result;

function addNumbers(num1 = 2, num2 = 3) {
  var result2;
  result = num1 + num2;
  result2 = num1 + num2;
  console.log(result2);
}

addNumbers(10, 5);
console.log(result); // 15
