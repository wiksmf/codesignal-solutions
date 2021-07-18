function alphanumericLess(s1, s2) {
  let str1 = s1.replace(/[0-9]+/g, el => el.padStart(20, 0));
  let str2 = s2.replace(/[0-9]+/g, el => el.padStart(20, 0));

  return str1 < str2
    ? true
    : str1 > str2
    ? false
    : s1.padEnd(20, '2') < s2.padEnd(20, '2');
}
