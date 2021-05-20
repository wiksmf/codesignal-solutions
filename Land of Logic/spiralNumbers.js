function spiralNumbers(n) {
  let spiralMatrix = new Array(n).fill().map(() => new Array(n).fill(''));
  let count = 1;
  let startCol = 0,
    endCol = n - 1,
    startRow = 0,
    endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      spiralMatrix[startRow][i] = count;
      count++;
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      spiralMatrix[i][endCol] = count;
      count++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      spiralMatrix[endRow][i] = count;
      count++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      spiralMatrix[i][startCol] = count;
      count++;
    }

    startCol++;
  }

  return spiralMatrix;
}
