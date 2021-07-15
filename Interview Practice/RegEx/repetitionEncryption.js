function repetitionEncryption(letter) {
  const pattern = /(\w+)[\d\W]+\1\b/gi;
  const matches = letter.match(pattern);

  if (matches) return matches.length;
  else return 0;
}
