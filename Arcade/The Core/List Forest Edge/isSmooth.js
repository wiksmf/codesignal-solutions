function isSmooth(arr) {
  return (
    arr[0] === arr[arr.length - 1] &&
    arr[0] ===
      (arr.length % 2 === 0
        ? arr[arr.length / 2 - 1] + arr[arr.length / 2]
        : arr[Math.floor(arr.length / 2)])
  );
}
