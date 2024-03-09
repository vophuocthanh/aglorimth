var distributeCandies = function (candyType) {
  let countType = [];
  for (let i = 0; i < candyType.length; i++) {
    if (!countType.includes(candyType[i])) {
      countType.push(candyType[i]);
    }
  }
  if (candyType.length / 2 <= countType.length) {
    return candyType.length / 2;
  }
  return countType.length;
};
console.log(distributeCandies([1,1,2,3]));
