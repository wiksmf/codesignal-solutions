function lateRide(n) {
  return (Math.floor(n / 60) + '' + (n % 60))
    .split('')
    .reduce((sum, el) => sum + +el, 0);
}
