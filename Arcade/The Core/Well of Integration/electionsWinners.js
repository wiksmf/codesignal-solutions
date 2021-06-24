function electionsWinners(votes, k) {
  let currentWinner = Math.max(...votes)
  
  return (k === 0) 
      ? (votes.filter(el => el === currentWinner).length > 1 ? 0 : 1)
      : votes.filter(el => el + k > currentWinner).length;
}