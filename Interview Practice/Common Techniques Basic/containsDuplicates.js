function containsDuplicates(a) {
  return a.length !== new Set(a).size;
}
