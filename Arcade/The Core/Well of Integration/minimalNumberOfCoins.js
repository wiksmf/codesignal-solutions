function minimalNumberOfCoins(coins, price) {
  let count = 0;
  coins.sort((a, b) => b - a);
  
  for (let i = 0; price > 0; i++) {
      while ((price - coins[i]) >= 0) {
          count++;
          price -= coins[i];
      }
  }
  
  return count;
}
