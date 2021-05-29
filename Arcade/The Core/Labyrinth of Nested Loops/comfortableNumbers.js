function comfortableNumbers(l, r) {
  let pairs = [];

  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= Math.min(r, i + digitSum(i)); j++) {
      if (i === j) continue;
      if (i >= j - digitSum(j) && i <= j + digitSum(j)) pairs.push([i, j]);
    }
  }

  return pairs.filter(
    (el, i, arr) =>
      i === arr.findIndex(arrEl => el[0] === arrEl[0] && el[1] === arrEl[1]),
  ).length;
}

function digitSum(x) {
  return String(x)
    .split('')
    .reduce((sum, el) => sum + +el, 0);
}
