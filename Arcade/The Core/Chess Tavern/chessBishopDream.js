function chessBishopDream(boardSize, initPosition, initDirection, k) {
  return [0, 0].map((_, i) => {
    const mod = boardSize[i] * 2;
    const mid = (mod - 1) / 2;

    return (
      mid -
      Math.abs(
        mid - ((((initPosition[i] + initDirection[i] * k) % mod) + mod) % mod),
      )
    );
  });
}
