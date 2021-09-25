function correctNonogram(size, nonogramField) {
  return (
    checkRows(size, nonogramField) &&
    checkRows(size, transposeMatrix(nonogramField))
  );
}

function checkRows(size, nonogramField) {
  let checkSize = (size + 1) / 2;

  return nonogramField.slice(checkSize).every(row => {
    let checkRow = row
      .slice(0, checkSize)
      .filter(el => el !== '-')
      .map(Number);
    let matrix = row.slice(checkSize).join('').match(/#+/g);

    return matrix
      ? matrix.every((s, i) => s.length === checkRow[i])
      : !checkRow.length;
  });
}

function transposeMatrix(matrix) {
  return matrix.map((_, i) => matrix.map(el => el[i]));
}
