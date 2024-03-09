var isUgly = function (n) {
  if (n == 1) return true;
  if (n % 6 === 0) {
    return true;
  } else if (n % 10 === 0) {
    return true;
  } else if (n % 15 === 0) {
    return true;
  }
  return false;
};
