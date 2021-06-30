function stringsCrossover(inputArray, result) {
  let count = 0;

  for (let i = 0; i < inputArray.length - 1; i++)
    for (let j = i + 1; j < inputArray.length; j++)
      if (checkCrossOver(inputArray[i], inputArray[j], result)) count++;

  return count;
}

function checkCrossOver(A, B, result) {
  for (let i = 0; i < A.length; i++)
    if (A[i] !== result[i] && B[i] !== result[i]) return false;

  return true;
}
