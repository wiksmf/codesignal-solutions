function growingPlant(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}
