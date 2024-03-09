var findDisappearedNumbers = function (nums) {
  let numDisappeared = [];
  let min = 1;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  for (let i = min; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      numDisappeared.push(i);
    }
  }
  return numDisappeared;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
