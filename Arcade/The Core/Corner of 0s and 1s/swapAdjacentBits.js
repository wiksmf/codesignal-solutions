function swapAdjacentBits(n) {
  return parseInt(
    parseInt(n, 10)
      .toString(2)
      .padStart(32, '0')
      .match(/.{2}/g)
      .map(el => el.split('').reverse().join(''))
      .join(''),
    2,
  );
}
