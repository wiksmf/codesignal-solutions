function isPower(n) {
  for (let i = 2; i <= n; i++) {
    let power = i * i;
    while (power <= n) {
      if (power === n) return true;
      power *= i;
    }
  }

  return n === 1;
}
