const countSameValue = (n, i) => {
  if (n[i] === n[i + 1]) {
    return countSameValue(n, i + 1);
  } else {
    return i + 1;
  }
};

var compress = function (chars) {
  let i = 0;
  let output = "";
  let currentIndex = 0;
  while (i < chars.length) {
    const index = countSameValue(chars, i);
    if (index > 1) {
      output = output + chars[i] + (index - currentIndex);
      currentIndex = index;
    } else {
      output = output + chars[i];
    }
    i = i + index;
  }
  return output.split("").length;
};
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
