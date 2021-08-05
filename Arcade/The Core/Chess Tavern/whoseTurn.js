function whoseTurn(p) {
  return (
    p
      .split('')
      .map(el => el.charCodeAt(0))
      .reduce((sum, el) => sum + el) %
      2 !==
    0
  );
}
