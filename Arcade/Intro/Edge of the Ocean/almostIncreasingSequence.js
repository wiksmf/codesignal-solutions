function almostIncreasingSequence(sequence) {
  let unwantedNumbers = 0;

  for (let i = 0; i < sequence.length; i++)
    if (sequence[i] <= sequence[i - 1]) {
      unwantedNumbers++;
      if (sequence[i] <= sequence[i - 2] && sequence[i - 1] >= sequence[i + 1])
        unwantedNumbers++;
    }

  return unwantedNumbers <= 1;
}
