var isPerfectSquare = function (num) {
  let i = 0;
  while (i < num / 2) {
    if (i * i < num) {
      i++;
    } else if (i * i === num) {
      return true;
    } else {
      return false;
    }
  }
};
