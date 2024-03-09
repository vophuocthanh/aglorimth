function removeDuplicates(nums) {
  let k = 1; // k keeps track of the length of the new array with no duplicates
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) { // if the current number is different from the previous one
      nums[k] = nums[i]; // we move the current number to the next position after the last unique number
      k++; // and increment the length of the new array
    }
  }
  return k; // return the length of the new array
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
