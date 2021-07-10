function rotateImage(a) {
  let rotatedA = [];

  for (let i = 0; i < a.length; i++) {
      let subArray = [];
      
      for (let j = a.length - 1; j >= 0; j--) 
          subArray.push(a[j][i])
      
      
      rotatedA.push(subArray);
  }
  
  return rotatedA;
}
