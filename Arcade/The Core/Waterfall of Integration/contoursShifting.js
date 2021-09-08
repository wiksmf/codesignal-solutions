function contoursShifting(matrix) {
  let [w, h] = [matrix[0].length, matrix.length];

  return matrix.map((row, rI) => {
    return row.map((_, elI) => {
      let cI = Math.min(rI, elI, w - elI - 1, h - rI - 1);

      if (rI === cI && elI !== (cI % 2 === 0 ? cI : w - cI - 1))
        return matrix[rI][cI % 2 === 0 ? elI - 1 : elI + 1];
      else if (elI === w - cI - 1 && rI !== (cI % 2 === 0 ? cI : h - cI - 1))
        return matrix[cI % 2 === 0 ? rI - 1 : rI + 1][elI];
      else if (rI === h - cI - 1 && elI !== (cI % 2 === 0 ? w - cI - 1 : cI)) {
        return cI === (h - 1) / 2
          ? matrix[rI][cI % 2 === 0 ? w - cI - 1 : cI]
          : matrix[rI][cI % 2 === 0 ? elI + 1 : elI - 1];
      } else {
        return cI === (w - 1) / 2
          ? matrix[cI % 2 === 0 ? h - cI - 1 : cI][elI]
          : matrix[cI % 2 === 0 ? rI + 1 : rI - 1][elI];
      }
    });
  });
}
