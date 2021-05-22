function sumUpNumbers(inputString) {
  return (inputString.match(/\d+/g) || [])
    .map(Number)
    .reduce((sum, el) => sum + el, 0);
}
