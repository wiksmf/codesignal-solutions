function allLongestStrings(inputArray) {
  const max = Math.max(...inputArray.map(el => (el = el.length)));

  return inputArray.filter(el => el.length === max);
}
