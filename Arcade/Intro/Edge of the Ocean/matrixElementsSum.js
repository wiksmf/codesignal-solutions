function matrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length - 1; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 0) matrix[i + 1][j] = 0;

  return matrix.flat().reduce((sum, el) => sum + el);
}
