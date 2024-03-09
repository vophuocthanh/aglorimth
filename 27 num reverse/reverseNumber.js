var reverse = function (x) {
  let numString = x.toString();
  let isNegative = false;
  console.log(numString);
  if (numString.startsWith("-")) {
    isNegative = true;
    // numString.split("").shift()
  }
  let numRever = "";
  for (let i = numString.split("").length - 1; i >= 0; i--) {
    if (numString[i] !== "-") {
      numRever = numRever + numString[i];
    }
  }
  if (isNegative) return `-${numRever}`;
  return numRever;
};
console.log(reverse(-302));
