function makeArrayConsecutive2(statues) {
  let [max, min] = [Math.max(...statues), Math.min(...statues)];
  let count = 0;

  for (let i = min; i <= max; i++) count++;

  return count - statues.length;
}
