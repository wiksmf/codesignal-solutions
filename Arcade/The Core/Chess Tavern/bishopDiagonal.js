function bishopDiagonal(bishop1, bishop2) {
  let bishopX1 = bishop1[0].charCodeAt();
  let bishopY1 = +bishop1[1];

  let bishopX2 = bishop2[0].charCodeAt();
  let bishopY2 = +bishop2[1];

  let x = bishopX1 < bishopX2 ? -1 : 1;
  let y = bishopY1 < bishopY2 ? -1 : 1;

  if (Math.abs(bishopX1 - bishopX2) === Math.abs(bishopY1 - bishopY2)) {
    while (bishopX1 > 97 && bishopX1 < 104 && bishopY1 > 1 && bishopY1 < 8) {
      bishopX1 += x;
      bishopY1 += y;
    }

    while (bishopX2 > 97 && bishopX2 < 104 && bishopY2 > 1 && bishopY2 < 8) {
      bishopX2 -= x;
      bishopY2 -= y;
    }

    return [
      `${String.fromCharCode(bishopX1)}${bishopY1}`,
      `${String.fromCharCode(bishopX2)}${bishopY2}`,
    ].sort();
  }

  return [bishop1, bishop2].sort();
}
