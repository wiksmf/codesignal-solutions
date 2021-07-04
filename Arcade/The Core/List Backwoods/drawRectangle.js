function drawRectangle(canvas, rectangle) {
  const [x1, y1, x2, y2] = rectangle;

  canvas[y1][x1] = '*';
  canvas[y1][x2] = '*';
  canvas[y2][x2] = '*';
  canvas[y2][x1] = '*';

  for (let i = x1 + 1; i < x2; i++) {
    canvas[y1][i] = '-';
    canvas[y2][i] = '-';
  }

  for (let i = y1 + 1; i < y2; i++) {
    canvas[i][x1] = '|';
    canvas[i][x2] = '|';
  }

  return canvas;
}
