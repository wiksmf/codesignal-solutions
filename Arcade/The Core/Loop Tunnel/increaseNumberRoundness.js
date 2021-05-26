function increaseNumberRoundness(n) {
  n = String(n);

  for (let i = 1; i < n.length - 1; i++)
    if (n[i] === '0' && n[i + 1] !== '0') return true;

  return false;
}
