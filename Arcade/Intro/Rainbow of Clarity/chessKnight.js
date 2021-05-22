function chessKnight(cell) {
  let positionX = 'abcdefgh'.indexOf(cell[0]) + 1;
  let positionY = +cell[1];
  let moves = [
    [2, 1],
    [1, 2],
    [2, -1],
    [-1, 2],
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [1, -2],
  ];

  return moves.filter(
    el =>
      positionX + el[0] > 0 &&
      positionY + el[1] > 0 &&
      positionX + el[0] < 9 &&
      positionY + el[1] < 9,
  ).length;
}
