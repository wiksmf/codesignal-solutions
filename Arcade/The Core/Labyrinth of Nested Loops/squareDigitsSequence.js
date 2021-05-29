function squareDigitsSequence(a0) {
  let currentSum = a0;
  let squareSum = [a0];

  for (let i = 1; ; i++) {
    currentSum = String(currentSum)
      .split('')
      .map(el => el ** 2)
      .reduce((sum, el) => sum + el);

    if (squareSum.includes(currentSum)) return i + 1;
    else squareSum.push(currentSum);
  }
}
