var diStringMatch = function (s) {
  const n = s.length;
  let start = 0,
    end = n;
  const perm = new Array(n + 1);

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm[i] = start;
      start++;
    } else {
      perm[i] = end;
      end--;
    }
  }

  perm[n] = start;

  return perm;
};
