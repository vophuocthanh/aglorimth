var selfDividingNumbers = function (left, right) {
  let output = [];
  for (let i = left; i <= right; i++) {
    if (i < 10) {
      output.push(i);
    } else {
      let number = "";

      for (let j = 0; j < i.toString().split("").length; j++) {
        const convertNumber = Number(i.toString()[j]);

        if (
          i % convertNumber === 0 &&
          j === i.toString().split("").length - 1
        ) {
          number = number + convertNumber;
          output.push(Number(number));
        } else if (i % convertNumber === 0) {
          number = number + convertNumber;
        } else if (i % convertNumber !== 0) {
          break;
        }
      }
    }
  }
  return output;
};

console.log(selfDividingNumbers(1, 22));
