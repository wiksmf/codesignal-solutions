function numbersGrouping(a) {
  let group = Array(10000).fill(false);

  for (let i = 0; i < a.length; i++)
    group[Math.floor((a[i] - 1) / 10000)] = true;

  return a.length + group.reduce((sum, el) => sum + el, 0);
}
