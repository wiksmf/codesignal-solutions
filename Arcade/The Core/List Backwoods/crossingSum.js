function crossingSum(matrix, a, b) {
  return (
    matrix[a].reduce((sum, el) => sum + el) +
    matrix.reduce((sum, el) => sum + el[b], 0) -
    matrix[a][b]
  );
}
