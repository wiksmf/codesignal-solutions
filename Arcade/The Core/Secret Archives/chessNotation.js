function chessNotation(notation) {
  const rows = notation
    .split('/')
    .map(el => el.replace(/\d/g, num => ' '.repeat(num)));

  return Array.from({ length: 8 }, (_, i) =>
    Array.from({ length: 8 }, (_, j) => rows[7 - j][i]),
  )
    .map(el => el.join(''))
    .join('/')
    .replace(/ +/g, el => el.length);
}
