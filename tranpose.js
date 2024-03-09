var transpose = function (matrix) {
  let newArray = [];
  let i = 0;
  let j = 0;
  console.log(matrix[0].length);
  while (i < matrix.length) {
    let smallArray = [];
    console.log(i);
    while (j < matrix[i].length) {
      smallArray.push(matrix[i][j]);
      i++;
    }
    // i++;
    newArray.push(smallArray);
    j++;
  }

  return newArray;
};

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
