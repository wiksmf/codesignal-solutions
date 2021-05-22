function allLongestStrings(inputArray) {
  let max = Math.max(...inputArray.map(el => el.length));
  return inputArray.filter(el => el.length === max);
}
