function sumOfTwo(a, b, v) {
  b = new Set(b);

  return a.some(el => b.has(v - el));
}
