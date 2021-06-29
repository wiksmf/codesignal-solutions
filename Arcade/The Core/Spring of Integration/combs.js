function combs(comb1, comb2) {
  return Math.min(getLength(comb1, comb2), getLength(comb2, comb1));
}

function getLength(firstComb, secondComb) {
  while ([...secondComb].some((el, i) => el === '*' && firstComb[i] === '*'))
    secondComb = '.' + secondComb;

  return Math.max(firstComb.length, secondComb.length);
}
