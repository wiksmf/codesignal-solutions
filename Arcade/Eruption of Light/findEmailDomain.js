function findEmailDomain(address) {
  address = address.split('@');
  return address[address.length - 1];
}
