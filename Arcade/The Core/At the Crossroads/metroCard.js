function metroCard(lastNumberOfDays) {
  return lastNumberOfDays <= 30 ? [31] : [28, 30, 31];
}
