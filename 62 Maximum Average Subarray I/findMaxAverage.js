var findMaxAverage = function (nums, k) {
  let i = 0;
  let maxValue = 0;
  while (i < nums.length) {
    let countValue = 0;
    for (let j = i; j < i + k; j++) {
      countValue = countValue + nums[j];
    }
    if (maxValue < countValue) {
      maxValue = countValue;
    }
    i++;
  }
  return maxValue / k;
};
findMaxAverage([1, 12, -5, -6, 50, 3], 4);
