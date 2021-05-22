function electionsWinners(votes, k) {
  let max = Math.max(...votes);

  if (k === 0) return votes.filter(el => el === max).length > 1 ? 0 : 1;

  return votes.filter(el => el + k > max).length;
}
