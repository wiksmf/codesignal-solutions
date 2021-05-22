function longestWord(text) {
  let textArray = text.match(/\w[a-z]{0,}/gi);

  return textArray.sort((a, b) => b.length - a.length)[0];
}
