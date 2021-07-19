function maximumSum(a, q) {
  let sortedArray = a.sort((a, b) => a - b);
  let frequency = new Array(a.length).fill(0);

  for (let i = 0; i < q.length; i++) {
    let [start, end] = [q[i][0], q[i][1]];

    for (let j = start; j <= end; j++) {
      frequency[j]++;
    }
  }

  frequency = frequency.sort((a, b) => a - b);

  return sortedArray.reduce((a, b, i) => a + b * frequency[i], 0);
}
