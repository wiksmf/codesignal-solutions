function videoPart(part, total) {
  let partArr = part.split(':').map(Number);
  let totArr = total.split(':').map(Number);
  let partSec = (partArr[0] * 60 + partArr[1]) * 60 + partArr[2];
  let totSec = (totArr[0] * 60 + totArr[1]) * 60 + totArr[2];
  let med = gcm(partSec, totSec);

  return [partSec / med, totSec / med];
}

function gcm(a, b) {
  return b === 0 ? a : gcm(b, a % b);
}
