function isTandemRepeat(inputString) {
  let stringLength = inputString.length;

  return (
    inputString.substring(0, stringLength / 2) ===
    inputString.substring(stringLength / 2)
  );
}
