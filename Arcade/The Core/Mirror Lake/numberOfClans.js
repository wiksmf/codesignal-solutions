function numberOfClans(divisors, k) {
  let clans = new Set();

  for (let i = 1; i <= k; i++)
    clans.add(divisors.map(el => (i % el === 0 ? 0 : 1)).toString());

  return clans.size;
}
