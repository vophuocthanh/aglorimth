var missingNumber = function (nums) {
  let numSort = nums.sort();
  console.log(numSort);
  for (let i = 0; i < numSort.length; i++) {
    console.log(numSort[i], i);
    if (numSort[i] !== i) {
      return i;
    } else if (numSort[i] === numSort.length - 1) {
      return nums.length;
    }
  }
};
console.log(missingNumber([3, 0, 1]));
