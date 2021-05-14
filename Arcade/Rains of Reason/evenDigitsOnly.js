function evenDigitsOnly(n) {
  return n
    .toString()
    .split('')
    .every(el => el % 2 === 0);
}
