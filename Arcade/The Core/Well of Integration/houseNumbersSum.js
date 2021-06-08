function houseNumbersSum(inputArray) {
  return inputArray
    .splice(0, inputArray.indexOf(0))
    .reduce((sum, el) => sum + el, 0);
}
