function boxesPacking(length, width, height) {
  let box = [];

  for (let i = 0; i < length.length; i++)
    box.push([length[i], width[i], height[i]]);

  box = box.map(el => el.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < box.length - 1; i++)
    for (let j = 0; j < 3; j++) if (box[i][j] >= box[i + 1][j]) return false;

  return true;
}
