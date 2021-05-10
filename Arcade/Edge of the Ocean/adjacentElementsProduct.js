function adjacentElementsProduct(inputArray) {
  return Math.max(...inputArray.slice(1).map((el, i) => el * inputArray[i]));
}
