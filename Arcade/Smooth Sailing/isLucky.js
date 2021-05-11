function isLucky(n) {
  n = n
    .toString()
    .split('')
    .map(el => +el);

  let n1 = n.splice(n.length / 2);

  return n1.reduce((sum, el) => sum + el) === n.reduce((sum, el) => sum + el);
}
