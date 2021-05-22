function arrayMaxConsecutiveSum(inputArray, k) {
  let max = inputArray.slice(0, k).reduce((sum, el) => sum + el);
  let sum = max;

  for (let i = k; i < inputArray.length; i++) {
    sum = sum + inputArray[i] - inputArray[i - k];
    if (sum > max) max = sum;
  }

  return max;
}
