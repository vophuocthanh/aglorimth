var isAnagram = function (s, t) {
  for (let i = 0; i < s.split("").length; i++) {
    if (t.indexOf(s[i]) === -1) {
      return false;
    }
  }
  return true;
};
