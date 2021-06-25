function reflectString(inputString) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetRefletion = alphabet.split('').reverse().join('');

  return inputString.split('').map(el => alphabetRefletion.charAt(alphabet.indexOf(el))).join('');
}
