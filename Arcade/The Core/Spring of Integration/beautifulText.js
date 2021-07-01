function beautifulText(inputString, l, r) {
  for (let i = l; i <= r; i++) {
    let j = i;

    while (j < inputString.length) {
      if (inputString[j] !== ' ') break;
      else j += i + 1;
    }

    if (j === inputString.length) return true;
  }

  return false;
}
