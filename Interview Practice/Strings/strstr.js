function strstr(s, x) {
  const occurrence = s.split(x);

  return occurrence.length > 1 ? occurrence[0].length : -1;
}
