function arrayConversion(inputArray) {
  let outputArray = inputArray;
  
  for (let i = 0; i < inputArray.length; i++) {
      if (outputArray.length === 1) return outputArray[0];
      
      if (i % 2 === 0) outputArray = sumElements(outputArray);
      else outputArray = multiplyElements(outputArray);
  }
}

function sumElements(inputArray) {
  let outputArray = [];

  for (let j = 0; j < inputArray.length - 1; j+=2) 
    outputArray.push(inputArray[j] + inputArray[j + 1]);
  
  return outputArray;
}

function multiplyElements(inputArray) {
  let outputArray = [];

  for (let j = 0; j < inputArray.length - 1; j+=2) 
    outputArray.push(inputArray[j] * inputArray[j + 1]);

  return outputArray;
}