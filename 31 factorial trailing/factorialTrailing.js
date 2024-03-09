const stringFactorial = (number) => {
  let startNumber = 1;
  for (let i = 1; i <= number; i++) {
    startNumber = startNumber * i;
  }
  const stringNum = startNumber.toString();
  return stringNum;
};
var trailingZeroes = function (n) {
  const stringFac = stringFactorial(n);
  let count = 0;
  for (let i = 0; i < stringFac.split("").length; i++) {
    if (stringFac[i] === "0") {
      count++;
    }
  }
  return count;
};

console.log(trailingZeroes(5));
