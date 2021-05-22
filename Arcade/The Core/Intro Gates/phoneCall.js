function phoneCall(min1, min2_10, min11, s) {
  let minutes = 0;

  if (s >= min1) {
    s -= min1;
    minutes++;
  }

  for (let i = 0; i < 9; i++) {
    if (s >= min2_10) {
      s -= min2_10;
      minutes++;
    } else {
      return Math.floor(minutes);
    }
  }

  if (s >= min11) {
    s = s / min11;
    minutes += s;
  }

  return Math.floor(minutes);
}
