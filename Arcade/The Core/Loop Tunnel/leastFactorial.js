function leastFactorial(n) {
  let factorial = 1;

  for (let i = 1; n > factorial; i++) factorial *= i;

  return factorial;
}
