function buildPalindrome(st) {
  let palindromeSt = st;
  let i = 0;

  while (palindromeSt.split('').reverse().join('') !== palindromeSt) {
    palindromeSt = st + st.slice(0, -i).split('').reverse().join('');
    i--;
  }

  return palindromeSt;
}
