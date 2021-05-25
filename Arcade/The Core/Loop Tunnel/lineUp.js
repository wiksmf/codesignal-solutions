function lineUp(commands) {
  let count = 0;
  let sameDirection = true;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'L' || commands[i] === 'R')
      sameDirection = !sameDirection;

    if (sameDirection) count++;
  }

  return count;
}
