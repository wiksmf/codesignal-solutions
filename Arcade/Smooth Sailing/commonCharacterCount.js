function commonCharacterCount(s1, s2) {
  let count = 0;

  s1 = s1.split('');
  s2 = s2.split('');

  s1.forEach(el => {
    if (s2.includes(el)) {
      count++;
      s2.splice(s2.indexOf(el), 1);
    }
  });

  return count;
}
