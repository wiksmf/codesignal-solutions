function isSubstitutionCipher(string1, string2) {
  return [...string1].every(
    (el, i) => string1.indexOf(el) === string2.indexOf(string2[i]),
  );
}
