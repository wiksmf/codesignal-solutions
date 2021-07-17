function shuffledArray(shuffled) {
  let sum = shuffled.reduce((sum, el) => sum + el) / 2;

  shuffled.splice(shuffled.indexOf(sum), 1);

  return shuffled.sort((a, b) => a - b);
}
