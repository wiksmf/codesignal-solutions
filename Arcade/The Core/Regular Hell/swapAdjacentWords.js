function swapAdjacentWords(s) {
  return s.replace(/(\w+) (\w+)/g, '$2 $1');
}
