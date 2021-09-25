function pawnRace(white, black, toMove) {
  let [whiteX, whiteY] = [white.charCodeAt(white[0]) - 97, +white[1]];
  let [blackX, blackY] = [black.charCodeAt(black[0]) - 97, +black[1]];
  let leftMoves = 0;

  if (whiteX === blackX - 1 || blackX === whiteX - 1) {
    if (whiteY === 2 && blackY === 7) return toMove === 'w' ? 'black' : 'white';

    if (whiteY === 2)
      return (blackY === 5 && toMove === 'b') ||
        (blackY === 4 && toMove === 'w') ||
        blackY <= 3
        ? 'black'
        : 'white';

    if (blackY === 7)
      return (whiteY === 4 && toMove === 'w') ||
        (whiteY === 5 && toMove === 'b') ||
        whiteY >= 6
        ? 'white'
        : 'black';

    if (whiteY >= blackY) {
      leftMoves = 8 - whiteY + 1;

      return leftMoves < blackY
        ? 'white'
        : leftMoves > blackY
        ? 'black'
        : toMove === 'w'
        ? 'white'
        : 'black';
    } else {
      leftMoves = blackY - whiteY;

      return leftMoves % 2 === 1
        ? toMove === 'w'
          ? 'white'
          : 'black'
        : toMove === 'w'
        ? 'black'
        : 'white';
    }
  } else if (whiteX === blackX) {
    if (whiteY < blackY) return 'draw';

    leftMoves = 8 - whiteY + 1;

    return leftMoves < blackY
      ? 'white'
      : leftMoves > blackY
      ? 'black'
      : toMove === 'w'
      ? 'white'
      : 'black';
  } else {
    if (blackY === 7) blackY = 6;
    if (whiteY === 2) whiteY = 3;

    leftMoves = 8 - whiteY + 1;

    return leftMoves < blackY
      ? 'white'
      : leftMoves > blackY
      ? 'black'
      : toMove === 'w'
      ? 'white'
      : 'black';
  }
}
