function arrayPacking(a) {
  return parseInt(
    a
      .map(el => parseInt(el, 10).toString(2).padStart(8, '0'))
      .reverse()
      .reduce((acc, el) => acc + el),
    2,
  );
}
