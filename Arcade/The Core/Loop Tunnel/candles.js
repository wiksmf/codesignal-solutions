function candles(candlesNumber, makeNew) {
  let burned = 0;

  while (candlesNumber >= makeNew) {
    let newCandles = Math.floor(candlesNumber / makeNew);
    burned += newCandles * makeNew;
    candlesNumber = newCandles + (candlesNumber % makeNew);
  }

  return burned + candlesNumber;
}
