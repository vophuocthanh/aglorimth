var maximumProduct = function (nums) {
  let tich = 1;
  for (let i = 0; i < nums.length; i++) {
    tich = tich * nums[i];
  }
  return tich;
};
