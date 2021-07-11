function amendTheSentence(s) {
  return s
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
}
