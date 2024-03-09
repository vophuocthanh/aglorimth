const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  
  var isSameTree = function(p, q) {
     const same = compareArrays(p,q)
      return same
  };