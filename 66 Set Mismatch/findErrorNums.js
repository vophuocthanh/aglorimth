var findErrorNums = function (nums) {
  let numsError = [];
  let numExist = [];
  for (let i = 0; i < nums.length; i++) {
    if (numExist.includes(nums[i])) {
      numsError.push(nums[i], nums[i] + 1);
    } else {
      numExist.push(nums[i]);
    }
  }
  return numsError;
};
