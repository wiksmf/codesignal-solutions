function switchLights(a) {
  for (let i = 0; i < a.length; i++) 
      if (a[i] === 1) 
          for (let j = 0; j <= i; j++) 
              a[j] = a[j] === 1 ? 0 : 1;
  
  return a;
}
