var findLengthOfLCIS = function (nums) {
  let count = 0;
  let lastValue = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], lastValue);
    if (nums[i] - lastValue > 0) {
      count++;
      lastValue = nums[i];
    } else {
      return count;
    }
  }
  return count;
};
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
