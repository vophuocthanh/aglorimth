var backspaceCompare = function (s, t) {
  let string1 = "";
  let string2 = "";
  for (let i = 0; i < s.split("").length; i++) {
    if (s[i] === "#") {
      string1 = string1.substring(0, string1.length - 1);
    } else {
      string1 = string1 + s[i];
    }
  }

  for (let i = 0; i < t.split("").length; i++) {
    if (t[i] === "#") {
      string2 = string2.substring(0, string2.length - 1);
    } else {
      string2 = string2 + t[i];
    }
  }
  if (string1 === string2) return true;
  return false;
};
console.log(backspaceCompare("ab#c", "ad#c"));
