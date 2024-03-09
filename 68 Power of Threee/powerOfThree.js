var isPowerOfThree = function (n) {
  if (n === 0 || n === -1) return false;
  for (let i = 0; i < n / 2; i++) {
    if (i * i * i === n) {
      return true;
    } else if (i * i * i > n) {
      return false;
    } else if (i * i * i < n) {
      continue;
    }
  }
};
