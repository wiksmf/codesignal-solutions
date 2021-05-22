function lineEncoding(s) {
  return s.replace(/([a-z])\1*/g, el =>
    el.length > 1 ? el.length + el[0] : el[0],
  );
}
