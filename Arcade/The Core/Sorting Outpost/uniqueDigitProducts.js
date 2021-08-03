function uniqueDigitProducts(a) {
  return new Set(
    a
      .map(el =>
        el
          .toString()
          .split('')
          .reduce((a, b) => a * b),
      )
      .map(Number),
  ).size;
}
