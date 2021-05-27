function firstReverseTry(arr) {
  return arr.length > 1 ? [arr.pop(), ...arr.splice(1), arr.shift()] : arr;
}
