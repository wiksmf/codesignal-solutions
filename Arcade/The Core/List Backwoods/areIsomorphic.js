function areIsomorphic(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((el, i) => el.length === array2[i].length)
  );
}
