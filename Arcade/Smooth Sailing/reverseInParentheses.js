function reverseInParentheses(inputString) {
  if (inputString.includes('(')) {
    return reverseInParentheses(reverseWord(inputString));
  }

  return inputString;
}

function reverseWord(inputString) {
  let regEx = /\(([^()]*)\)/i;
  let reversedSubStr = regEx.exec(inputString)[1].split('').reverse().join('');

  return inputString.replace(regEx, reversedSubStr);
}
