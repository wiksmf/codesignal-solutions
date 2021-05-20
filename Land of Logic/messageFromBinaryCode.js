function messageFromBinaryCode(code) {
  return code
    .match(/[01]{8}/g)
    .map(el => String.fromCharCode(parseInt(el, 2)))
    .join('');
}
