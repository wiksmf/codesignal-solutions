function curiousClock(someTime, leavingTime) {
  someTime = new Date(someTime);
  leavingTime = new Date(leavingTime);

  return new Date(someTime * 2 - leavingTime)
    .toJSON()
    .substr(0, 16)
    .replace('T', ' ');
}
