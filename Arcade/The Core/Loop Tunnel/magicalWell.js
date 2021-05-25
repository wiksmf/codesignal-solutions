function magicalWell(a, b, n) {
  return n !== 0 ? a * b + magicalWell(++a, ++b, --n) : 0;
}
