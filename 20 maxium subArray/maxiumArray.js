var maxSubArray = function(nums) {
    let maxSum = -Infinity;
let currSum = 0;

for (let i = 0; i < nums.length; i++) {
  currSum = Math.max(nums[i], currSum + nums[i]);
  maxSum = Math.max(maxSum, currSum);
}

return maxSum;
};