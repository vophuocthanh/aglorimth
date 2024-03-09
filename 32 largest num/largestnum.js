var dominantIndex = function (nums) {
  let max = {
    value: 0,
    index: 0,
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max.value) {
      max.value = nums[i];
      max.index = i;
    }
  }
  //   console.log(max)
  // let
  for (let i = 0; i < nums.length; i++) {
    // console.log(i)
    if (max.index !== i) {
      if (max.index !== i && max.value / nums[i] >= 2) {
        console.log(max.value / nums[i] >= 2)
        if (i === nums.length - 1) {
          return max.index;
        }
      } else {
        console.log(max.value / nums[i])
        return -1;
      }
    }
  }
};

console.log(dominantIndex([3, 6, 1, 0]));
// console.log(10/0)