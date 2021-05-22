function alternatingSums(a) {
  let sum = [0, 0];

  for (let i = 0; i < a.length; i++) sum[i % 2] += a[i];

  return sum;
}
