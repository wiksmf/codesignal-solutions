function arrayMaximalAdjacentDifference(inputArray) {
  let diffArray = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    let countDiff = 0;

    if (inputArray[i] !== inputArray[i + 1]) {
      let max = Math.max(inputArray[i], inputArray[i + 1]);
      let min = Math.min(inputArray[i], inputArray[i + 1]);

      while (min !== max) {
        min++;
        countDiff++;
      }
    }
    diffArray.push(countDiff);
  }

  return Math.max(...diffArray);
}
