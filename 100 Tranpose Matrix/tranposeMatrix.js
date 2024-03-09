function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let j = 0; j < cols; j++) {
    transposed[j] = [];
    for (let i = 0; i < rows; i++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}
