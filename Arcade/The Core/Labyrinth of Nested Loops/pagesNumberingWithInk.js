function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= String(current).length) {
    numberOfDigits -= String(current).length;
    current++;
  }

  return current - 1;
}
