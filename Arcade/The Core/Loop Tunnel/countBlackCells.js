function countBlackCells(n, m) {
  let result = n + m - 1;

  for (let i = 1; i < m; i++) if (((n * i) / m) % 1 === 0) result++;

  return result;
}
