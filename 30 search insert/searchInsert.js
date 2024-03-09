var searchInsert = function (nums, target) {
  const index = nums.findIndex((num) => num === target);
  if (index !== -1) {
    return index;
  } else {
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) return i--;
    }
  }
};
console.log(searchInsert([1, 3, 5, 6], 7));
