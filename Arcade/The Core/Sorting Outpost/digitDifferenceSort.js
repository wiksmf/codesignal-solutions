function digitDifferenceSort(a) {
  return a
    .map((el, i) => {
      let max = Math.max(...el.toString().split('').map(Number));
      let min = Math.min(...el.toString().split('').map(Number));

      return { index: i, difference: max - min };
    })
    .sort((a, b) => a.difference - b.difference || b.index - a.index)
    .map(el => a[el.index]);
}
