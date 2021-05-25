function additionWithoutCarrying(param1, param2) {
  let finalSum = [];

  while (param1 || param2) {
    let sum = (param1 % 10) + (param2 % 10);

    finalSum.unshift(sum >= 10 ? sum % 10 : sum);

    param1 = Math.floor(param1 / 10);
    param2 = Math.floor(param2 / 10);
  }

  return +finalSum.join('');
}
