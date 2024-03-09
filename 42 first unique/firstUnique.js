var firstUniqChar = function (s) {
  for (let i = 0; i < s.split("").length; i++) {
    let newArr = s.split("");
    newArr.splice(i, 1);
    // console.log(newArr);
    const index = newArr.indexOf(s[i]);
    console.log(index)
    if (index === -1) return i;
  }
  return -1;
};
// console.log(
    firstUniqChar("loveleetcode")
    // );
