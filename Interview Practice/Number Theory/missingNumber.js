function missingNumber(arr) {
  for (let i = 0; i <= arr.length; i++) if (!arr.includes(i)) return i;
}
