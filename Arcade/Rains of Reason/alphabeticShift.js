function alphabeticShift(inputString) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return inputString
    .split('')
    .map(el => alphabet.indexOf(el))
    .map(el => (el === 25 ? 0 : el + 1))
    .map(el => alphabet.charAt(el))
    .join('');
}
