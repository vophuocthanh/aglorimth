var sortArrayByParity = function (nums) {
  let newArray = [];
  let secondArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArray.push(nums[i]);
    } else {
      secondArray.push(nums[i]);
    }
  }
  return newArray.concat(secondArray);
};
