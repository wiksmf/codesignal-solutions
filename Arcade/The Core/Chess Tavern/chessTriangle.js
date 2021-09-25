function chessTriangle(n, m) {
  let moves = [
    [1, 2],
    [2, 1],
    [1, 3],
    [3, 1],
    [2, 2],
    [2, 2],
    [2, 3],
    [3, 2],
  ];
  let triangles = 0;

  for (var i = 0; i < moves.length; i++)
    if (n > moves[i][0] && m > moves[i][1])
      triangles += 8 * (n - moves[i][0]) * (m - moves[i][1]);

  return triangles;
}
