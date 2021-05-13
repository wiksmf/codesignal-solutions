function minesweeper(matrix) {
  return matrix.map((subArr, subArrIndex) =>
    subArr.map(
      (el, elIndex) =>
        matrix
          .slice(Math.max(0, subArrIndex - 1), subArrIndex + 2)
          .map(subEl =>
            subEl
              .slice(Math.max(0, elIndex - 1), elIndex + 2)
              .reduce((sum, el) => sum + el),
          )
          .reduce((sum, el) => sum + el) - el,
    ),
  );
}
