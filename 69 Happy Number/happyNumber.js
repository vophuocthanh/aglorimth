var isHappy = function (n) {
  const numString = n.toString();
  if (numString.split("").length < 2) {
    return false;
  }

  let isOne = 0;
  for (let i = 0; i < numString.split("").length; i++) {
    isOne = isOne + Number(numString[i]) * Number(numString[i]);
    console.log(isOne);
    if (i === numString.split("").length - 1) {
      if (isOne === 1) {
        return true;
      } else if (isOne !== 1) {
        return isHappy(isOne);
      }
    }
  }
};
console.log(isHappy(19));
