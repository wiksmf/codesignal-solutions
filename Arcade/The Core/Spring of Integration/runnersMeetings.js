function runnersMeetings(startPosition, speed) {
  let meetings = 1;

  for (let i = 0; i < startPosition.length; i++) {
    for (let j = i + 1; j < startPosition.length; j++) {
      let distanceDiff = startPosition[j] - startPosition[i];
      let speedDiff = speed[i] - speed[j];
      let count = 0;

      if (distanceDiff !== 0 && speedDiff === 0) continue;

      for (let k = 0; k < startPosition.length; k++) {
        if (
          startPosition[k] * speedDiff + speed[k] * distanceDiff ===
          startPosition[i] * speedDiff + speed[i] * distanceDiff
        )
          count++;
      }

      if (count === 0) continue;
      if (count > meetings) meetings = count;
    }
  }

  return meetings < 2 ? -1 : meetings;
}
