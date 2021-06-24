function threeSplit(a) {
  let totalSum = a.reduce((sum, el) => sum + el);
  let firstSum = 0;
  let secondSum = 0;
  let thirdSum = 0;
  let count = 0;
  
  for (let i = 0; i < a.length - 2; i++) {
      firstSum += a[i];
      secondSum = 0;
      thirdSum = 0;
      
      for (let j = i + 1; j < a.length - 1; j++) {
          secondSum += a[j];
          thirdSum = totalSum - (firstSum + secondSum);
          
          if (firstSum === secondSum && secondSum === thirdSum)
              count++;
      }
  }
  
  return count;
}
