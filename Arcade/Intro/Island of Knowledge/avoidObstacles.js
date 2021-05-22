function avoidObstacles(inputArray) {
  let jump = Math.max(...inputArray);

  for (let i = 1; i < jump; i++) {
    let minJump = inputArray.some(el => el % i === 0);
    if (!minJump) return i;
  }

  return jump + 1;
}
