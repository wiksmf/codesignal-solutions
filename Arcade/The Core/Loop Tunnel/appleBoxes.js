function appleBoxes(k) {
  let yellowApples = 0,
    redApples = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) redApples += i * i;
    else yellowApples += i * i;
  }

  return redApples - yellowApples;
}
