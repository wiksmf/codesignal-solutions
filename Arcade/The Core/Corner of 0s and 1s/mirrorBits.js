function mirrorBits(a) {
  return parseInt(parseInt(a, 10).toString(2).split('').reverse().join(''), 2);
}
