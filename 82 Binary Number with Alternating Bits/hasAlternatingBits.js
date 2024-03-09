var hasAlternatingBits = function (n) {
  const binary = n.toString(2);
  for (let i = 0; i < binary.split("").length; i++) {
    if (binary[i] === "0") {
      if (i + 1 !== binary.split("").length && binary[i + 1] !== "1") {
        return false;
      }
    } else if (binary[i] === "1") {
      if (binary[i + 1] !== "0" && i + 1 !== binary.length) {
        return false;
      }
    }
  }
  return true;
};
console.log(hasAlternatingBits(7));
