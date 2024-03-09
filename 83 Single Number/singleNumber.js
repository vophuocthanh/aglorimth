var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let newNum = nums.slice();
    var removed = newNum.splice(i, 1);
    if (newNum.indexOf(removed[0]) === -1) {
      return removed[0];
    }
  }
};
singleNumber([2, 2, 1]);
