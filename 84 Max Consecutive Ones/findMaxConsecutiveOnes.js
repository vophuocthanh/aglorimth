var findMaxConsecutiveOnes = function (nums) {
  let i = 0;
  let count = 0;
  let max = 0;
  while (i <= nums.length) {
    if (nums[i] === 1) {
      count = count + 1;
      i++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
      i++;
    }
  }
  return max;
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
