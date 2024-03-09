function minMoves(nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const min = Math.min(...nums);
  return sum - nums.length * min;
}
