function palindromeRearranging(inputString) {
  let lastEl, findElPosition;
  let count = 0;

  inputString = inputString.split('');

  while (inputString.length) {
    lastEl = inputString.pop();
    findElPosition = inputString.indexOf(lastEl);

    if (findElPosition < 0) count++;
    else inputString.splice(findElPosition, 1);
  }

  return count < 2;
}
