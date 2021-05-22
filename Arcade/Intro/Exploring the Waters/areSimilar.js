function areSimilar(a, b) {
  let count = 0;

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) count++;

  return a.sort().toString() === b.sort().toString() && count <= 2;
}
