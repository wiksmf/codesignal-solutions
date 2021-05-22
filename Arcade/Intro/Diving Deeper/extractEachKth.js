function extractEachKth(inputArray, k) {
  return inputArray.filter((_, i) => (i + 1) % k);
}
