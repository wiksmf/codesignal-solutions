function sortByHeight(a) {
  let arrIndex = [];

  for (let i = 0; i < a.length; i++) if (a[i] === -1) arrIndex.push(i);

  a = a.filter(el => el !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arrIndex.length; i++) a.splice(arrIndex[i], 0, -1);

  return a;
}
