const loopNext = (number, numbers, i, target) => {
  if (number + numbers[i + 1] === target) {
    return i + 1;
  } else {
    if (i < numbers.length) {
      return loopNext(numbers[i], numbers, i + 1, target);
    } else {
      return -1;
    }
  }
};

var twoSum = function (numbers, target) {
  let array = [];
  let i = 0;
  while (i < numbers.length) {
    const index = loopNext(numbers[i], numbers, i, target);
    if (index !== -1) {
      array.push(i + 1, index + 1);
    }
    i++;
  }
  return array;
};

console.log(twoSum([2, 3, 4], 6));
