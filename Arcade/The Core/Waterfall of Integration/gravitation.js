function gravitation(rows) {
  let motionless = [];
  let count = [];

  for (let i = 0; i < rows[0].length; i++) {
    let stone = false;
    count[i] = 0;

    for (let j = 0; j < rows.length; j++) {
      if (rows[j][i] === '#') stone = true;
      else if (stone) count[i]++;
    }

    if (motionless.length === 0 || count[motionless[0]] > count[i])
      motionless = [i];
    else if (count[motionless[0]] === count[i]) motionless.push(i);
  }

  return motionless;
}
