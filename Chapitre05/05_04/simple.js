//IIFE Immediately Invoked Function Execution
(function () {
  var result = 2 + 4;
  console.log(result);
})(); // 6

(function (num1, num2) {
  var result = num1 + num2;
  console.log(result);
})(10, 12); //22
