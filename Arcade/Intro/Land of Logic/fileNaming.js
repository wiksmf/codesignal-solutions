function fileNaming(names) {
  let output = [];

  for (let i = 0; i < names.length; i++) {
    let currentDoc = names[i];
    let count = 0;

    if (output.indexOf(names[i]) !== -1)
      while (output.indexOf(names[i]) !== -1) {
        count++;
        names[i] = `${currentDoc}(${count})`;
      }

    output.push(names[i]);
  }

  return output;
}
