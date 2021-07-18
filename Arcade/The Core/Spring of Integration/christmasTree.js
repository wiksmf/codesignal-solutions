function christmasTree(levelNum, levelHeight) {
  const maxWidth = 5 + (levelNum + levelHeight - 2) * 2;

  const tree = [
    ' '.repeat((maxWidth - 1) / 2) + '*',
    ' '.repeat((maxWidth - 1) / 2) + '*',
    ' '.repeat((maxWidth - 3) / 2) + '***',
  ];

  for (let i = 0; i < levelNum; i++)
    for (let j = 0; j < levelHeight; j++)
      tree.push(
        ' '.repeat(levelHeight - 1 - j + (levelNum - i - 1)) +
          '*'.repeat(5 + 2 * (j + i)),
      );

  for (let i = 0; i < levelNum; i++)
    tree.push(
      ' '.repeat((maxWidth - 1) / 2 - Math.floor(levelHeight / 2)) +
        '*'.repeat(levelHeight % 2 === 0 ? levelHeight + 1 : levelHeight),
    );

  return tree;
}
