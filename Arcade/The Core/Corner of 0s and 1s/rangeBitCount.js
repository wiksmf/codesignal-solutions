function rangeBitCount(a, b) {
  let numbers = [];
  for (let i = a; i <= b; i++) numbers.push(i);

  return numbers
    .map(el => +parseInt(el, 10).toString(2))
    .join('')
    .split('')
    .reduce((sum, el) => sum + +el, 0);
}
