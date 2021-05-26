function rounders(n) {
  let output = String(n).split('').map(Number);

  for (let i = output.length - 1; i > 0; i--) {
    if (output[i] % 10 !== 0) {
      if (output[i] % 10 < 5) output[i] = 0;
      else {
        output[i] = 0;
        output[i - 1] += 1;
      }
    }
  }

  return +output.join('');
}
