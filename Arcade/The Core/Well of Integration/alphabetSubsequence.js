function alphabetSubsequence(s) {
  return s === [...new Set(s)].sort().join('');
}
