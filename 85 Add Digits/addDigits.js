var addDigits = function (num) {
  if (num < 10) return num;
  let currentNumber = 0;
  for (let i = 0; i < num.toString().split("").length; i++) {
    currentNumber = currentNumber + Number(num.toString()[i]);
  }
  if (currentNumber >= 10) {
    return addDigits(currentNumber);
  }
  return currentNumber;
};
