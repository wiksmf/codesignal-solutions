function killKthBit(n, k) {
  return (n % (k = 2 ** k)) - (n % (k /= 2)) ? n - k : n;
}
