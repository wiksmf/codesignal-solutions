function isIPv4Address(inputString) {
  inputString = inputString.split('.');

  return (
    inputString.length === 4 &&
    inputString.every(
      el =>
        el >= 0 &&
        el <= 255 &&
        el.length > 0 &&
        !isNaN(el) &&
        (+el[0] !== 0 || el.length === 1),
    )
  );
}
