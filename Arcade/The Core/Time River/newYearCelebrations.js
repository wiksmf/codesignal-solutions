function newYearCelebrations(takeOffTime, minutes) {
  let [hours, mins] = takeOffTime.split(':');
  let time = (hours * 60 + +mins || 24 * 60) - 24 * 60;
  let elapsed = 0;
  let total = 0;

  for (let i = 0; i < minutes.length; i++) {
    let mins = minutes[i] - elapsed;
    elapsed = minutes[i];

    if (time <= 0 && time + mins >= 0) total++;

    time += mins - 60;
  }

  return total + (time <= 0);
}
