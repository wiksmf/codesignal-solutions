function starRotation(matrix, width, center, t) {
  let [centerX, centerY] = center;

  for (let i = 0; i <= (width - 1) / 2; i++) {
    for (let j = t % 8; j > 0; j--) {
      [
        matrix[centerX][centerY - i],
        matrix[centerX][centerY + i],
        matrix[centerX - i][centerY - i],
        matrix[centerX + i][centerY - i],
        matrix[centerX + i][centerY],
        matrix[centerX + i][centerY + i],
        matrix[centerX - i][centerY + i],
        matrix[centerX - i][centerY],
      ] = [
        matrix[centerX + i][centerY - i],
        matrix[centerX - i][centerY + i],
        matrix[centerX][centerY - i],
        matrix[centerX + i][centerY],
        matrix[centerX + i][centerY + i],
        matrix[centerX][centerY + i],
        matrix[centerX - i][centerY],
        matrix[centerX - i][centerY - i],
      ];
    }
  }

  return matrix;
}
