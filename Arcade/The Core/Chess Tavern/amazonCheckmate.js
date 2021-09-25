function amazonCheckmate(king, amazon) {
  let [kingX, kingY] = [king.charCodeAt(king[0]) - 97, +king[1] - 1];
  let [amazonX, amazonY] = [amazon.charCodeAt(amazon[0]) - 97, +amazon[1] - 1];
  let amazonMoveX = amazonX - 1;
  let amazonMoveY = amazonY - 1;
  let chessBoard = Array(8)
    .fill(0)
    .map(el => (el = new Array(8).fill(0)));
  let kingPos = [0, 0, 0, 0];
  let knightMoves = [
    [1, 2],
    [-1, -2],
    [2, 1],
    [-2, -1],
    [1, -2],
    [-1, 2],
    [2, -1],
    [-2, 1],
  ];
  let kingMoves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
  ];

  for (let i = kingX - 1; i <= kingX + 1; ++i)
    for (let j = kingY - 1; j <= kingY + 1; ++j)
      if (0 <= i && i < 8 && 0 <= j && j < 8) chessBoard[i][j] = -1;

  while (amazonMoveX >= 0 && amazonMoveY >= 0) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    --amazonMoveX;
    --amazonMoveY;
  }

  amazonMoveX = amazonX + 1;
  amazonMoveY = amazonY + 1;

  while (amazonMoveX < 8 && amazonMoveY < 8) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    ++amazonMoveX;
    ++amazonMoveY;
  }

  amazonMoveX = amazonX + 1;
  amazonMoveY = amazonY - 1;

  while (amazonMoveX < 8 && amazonMoveY >= 0) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    ++amazonMoveX;
    --amazonMoveY;
  }

  amazonMoveX = amazonX - 1;
  amazonMoveY = amazonY + 1;

  while (amazonMoveX >= 0 && amazonMoveY < 8) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    --amazonMoveX;
    ++amazonMoveY;
  }

  amazonMoveX = amazonX - 1;
  amazonMoveY = amazonY;

  while (amazonMoveX >= 0) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    --amazonMoveX;
  }

  amazonMoveX = amazonX + 1;
  amazonMoveY = amazonY;

  while (amazonMoveX < 8) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    ++amazonMoveX;
  }

  amazonMoveX = amazonX;
  amazonMoveY = amazonY - 1;

  while (amazonMoveY >= 0) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    --amazonMoveY;
  }

  amazonMoveX = amazonX;
  amazonMoveY = amazonY + 1;

  while (amazonMoveY < 8) {
    if (amazonMoveX === kingX && amazonMoveY === kingY) break;

    if (chessBoard[amazonMoveX][amazonMoveY] !== -1)
      chessBoard[amazonMoveX][amazonMoveY] = 1;

    ++amazonMoveY;
  }

  for (let i = 0; i < knightMoves.length; ++i) {
    let kni = amazonX + knightMoves[i][0];
    let knj = amazonY + knightMoves[i][1];

    if (0 <= kni && kni < 8 && 0 <= knj && knj < 8)
      if (chessBoard[kni][knj] !== -1) chessBoard[kni][knj] = 1;
  }

  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      let canMove = false;

      if (chessBoard[i][j] === -1) continue;
      if (i === amazonX && j === amazonY) continue;

      for (let k = 0; k < kingMoves.length; ++k) {
        let ki = i + kingMoves[k][0];
        let kj = j + kingMoves[k][1];

        if (0 <= ki && ki < 8 && 0 <= kj && kj < 8)
          if (chessBoard[ki][kj] === 0) {
            canMove = true;
            break;
          }
      }

      if (chessBoard[i][j] === 0) canMove ? ++kingPos[3] : ++kingPos[2];
      else if (chessBoard[i][j] === 1) canMove ? ++kingPos[1] : ++kingPos[0];
    }
  }

  return kingPos;
}
