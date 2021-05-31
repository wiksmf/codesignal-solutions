function rectangleRotation(a, b) {
  const sideA = Math.ceil(a / Math.sqrt(2));
  const sideB = Math.ceil(b / Math.sqrt(2));
  let count = sideA * sideB + (sideA - 1) * (sideB - 1);

  return count % 2 === 0 ? count - 1 : count;
}
