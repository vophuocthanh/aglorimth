var findTheDifference = function (s, t) {
  for (let i = 0; i < t.split("").length; i++) {
    if (!s.includes(t[i])) {
      return t[i];
    }
  }
};
