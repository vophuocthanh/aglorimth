var arrangeCoins = function (n) {
  let num = n;
 for (let i = 1; i < n/2+1 ; i++) {
    if (num - i > 0) {
      num = num - i;
    } else {
      return i -1;
    }
  }
};

console.log(arrangeCoins(2^31 -1));
