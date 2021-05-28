function replaceMiddle(arr) {
  return arr.length % 2 === 0
    ? [
        ...arr.slice(0, arr.length / 2 - 1),
        arr[arr.length / 2 - 1] + arr[arr.length / 2],
        ...arr.slice(arr.length / 2 + 1),
      ]
    : arr;
}
