function createAnagram(s, t) {
  for (let letter of s) {
    t = t.replace(letter, '');
  }

  return t.length;
}
