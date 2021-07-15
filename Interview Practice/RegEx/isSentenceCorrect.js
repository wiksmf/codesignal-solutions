function isSentenceCorrect(sentence) {
  const re = /^[A-Z][^.?!]*[.?!]$/;

  return re.test(sentence);
}
