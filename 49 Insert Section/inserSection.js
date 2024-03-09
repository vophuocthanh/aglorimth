var intersection = function (nums1, nums2) {
  let result = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      console.log(nums2.indexOf(nums1[i]));
      if (nums2.indexOf(nums1[i]) > -1) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.indexOf(nums2[i]) > -1) {
        if (!result.includes(nums2[i])) {
          result.push(nums2[i]);
        }
      }
    }
  }
  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
