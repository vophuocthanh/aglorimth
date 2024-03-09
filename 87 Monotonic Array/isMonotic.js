var isMonotonic = function (nums) {
  let min = 0;
  let max = 999999;
  if (nums[0] > nums[nums.length - 1]) {
    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i], max);
      if (nums[i] <= max) {
        max = nums[i];
      } else {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= min) {
        min = nums[i];
      } else {
        return false;
      }
    }
    return true;
  }
};
console.log(isMonotonic([1, 3, 2]));
