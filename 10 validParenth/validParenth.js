var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1] !== "(") {
      return false;
    } else if (s[i] === ")" && s[i - 1] === "(") {
      return true;
    }
    if (s[i] === "]" && s[i - 1] !== "[") {
      return false;
    } else if (s[i] === "]" && s[i - 1] === "[") {
      return true;
    }
    if (s[i] === "}" && s[i - 1] !== "{") {
      return false;
    } else if (s[i] === "}" && s[i - 1] === "{") {
      return true;
    }
  }
};

