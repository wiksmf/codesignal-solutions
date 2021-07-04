function volleyballPositions(formation, k) {
  return k % 6 > 0
    ? (([
        formation[0][1],
        formation[1][0],
        formation[3][0],
        formation[2][1],
        formation[3][2],
        formation[1][2],
      ] = [
        formation[1][2],
        formation[0][1],
        formation[1][0],
        formation[3][0],
        formation[2][1],
        formation[3][2],
      ]),
      volleyballPositions(formation, --k))
    : formation;
}
