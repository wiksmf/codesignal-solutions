function isBeautifulString(inputString) {
  const alphabet = [];
  const letters = Array(26).fill(0);

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++)
    alphabet.push(String.fromCharCode(i));

  for (let letter of inputString) letters[alphabet.indexOf(letter)]++;

  for (let i = 0; i < letters.length; i++)
    if (letters[i] < letters[i + 1]) return false;

  return true;
}
