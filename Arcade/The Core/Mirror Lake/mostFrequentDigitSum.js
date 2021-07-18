function mostFrequentDigitSum(n) {
  let digitSum = [];
  let count = {};
  let mostOftenEl = 0;
  let max = 0;

  while (n > 0) {
    let sum = String(n)
      .split('')
      .reduce((sum, el) => sum + +el, 0);
    digitSum.push(sum);
    n -= sum;
  }

  digitSum.forEach(el => (count[el] = (count[el] || 0) + 1));

  for (let [key, value] of Object.entries(count)) {
    if (value > max) {
      max = value;
      mostOftenEl = +key;
    }
  }

  return digitSum.length === 2 ? Math.max(...digitSum) : mostOftenEl;
}
