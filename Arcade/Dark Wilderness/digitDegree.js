let count = 0;

function digitDegree(n) {
  if (n < 10) return count;

  let sumDigit = n
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, el) => sum + el);
  count++;

  return digitDegree(sumDigit);
}
