function arrayPreviousLess(items) {
  let output = [];
  items.unshift(-1);

  for (let i = 1; i < items.length; i++) {
    let j = i - 1;

    while (items[j] >= items[i]) j--;

    output.push(items[j]);
  }

  return output;
}
