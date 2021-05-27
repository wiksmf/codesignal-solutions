function removeArrayPart(inputArray, l, r) {
  return [...inputArray.slice(0, l), ...inputArray.slice(r + 1)];
}
