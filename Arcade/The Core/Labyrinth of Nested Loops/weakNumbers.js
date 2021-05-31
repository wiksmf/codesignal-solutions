function weakNumbers(n) {
  let divisors = Array(n).fill(0);
  let weakness = Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % j === 0) divisors[i - 1]++;
    }
    weakness[i - 1] = divisors
      .slice(0, i - 1)
      .filter(el => el > divisors[i - 1]).length;
  }

  return [
    Math.max(...weakness),
    weakness.filter(el => el === Math.max(...weakness)).length,
  ];
}
