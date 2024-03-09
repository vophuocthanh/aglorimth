    var majorityElement = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        count++;
        let j = 0;
        while (j < nums.length) {
        if (i !== j && currentNum === nums[j]) {
            count++;
        }
        j++;
        }
        if (nums.length / 2 <= count) {
        return currentNum;
        }
        count = 0;
    }
    };
console.log(majorityElement([3, 2, 3]));
