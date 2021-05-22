function deleteDigit(n) {
  let numberArray = n.toString().split('');

  for (let i = 0; i < numberArray.length - 1; i++)
    if (numberArray[i] < numberArray[i + 1])
      return numberArray.splice(i, 1) && +numberArray.join('');

  return numberArray.splice(numberArray.length - 1, 1) && +numberArray.join('');
}
