function rowsRearranging(matrix) {
  matrix.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < matrix.length; i++)
    for (let j in matrix[i]) if (matrix[i][j] <= matrix[i - 1][j]) return false;

  return true;
}
