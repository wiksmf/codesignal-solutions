function isMAC48Address(inputString) {
  return /^([A-F0-9]{2}-){5}([A-F0-9]){2}$/.test(inputString);
}
