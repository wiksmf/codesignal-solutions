function tennisSet(score1, score2) {
  const [max, min] = [Math.max(score1, score2), Math.min(score1, score2)];

  return (max === 6 && min < 5) || (max === 7 && min >= 5 && min <= 6);
}
