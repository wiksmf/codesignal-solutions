function firstDuplicate(a) {
  let elementSet = new Set();

  for (let i = 0; i < a.length; i++) {
    if (elementSet.has(a[i])) return a[i];
    elementSet.add(a[i]);
  }

  return -1;
}
