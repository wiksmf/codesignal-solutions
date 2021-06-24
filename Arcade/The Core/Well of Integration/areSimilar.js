function areSimilar(a, b) {
  let count = 0;
  
  for (let i = 0; i < a.length; i++) 
      if (a[i] !== b[i]) count++;
      
  return String(a.sort((a, b) => a - b)) === String(b.sort((a, b) => a - b)) && count <= 2;
}
