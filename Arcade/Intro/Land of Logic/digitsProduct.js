function digitsProduct(product) {
  let i = 1;

  while (i < 99999) {
    let digits = String(i)
      .split('')
      .map(Number)
      .reduce((prod, el) => prod * el);

    if (digits === product) return i;

    i++;
  }

  return -1;
}
