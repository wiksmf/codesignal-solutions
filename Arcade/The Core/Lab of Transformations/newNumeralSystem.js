function newNumeralSystem(number) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sum = alphabet.indexOf(number)
  let pairs = [];
  
  for (let i = 0; i < alphabet.length; i++) 
      for (let j = 0; j < alphabet.length; j++) 
          if (i + j === sum && !pairs.includes(`${alphabet.charAt(j)} + ${alphabet.charAt(i)}`)) 
              pairs.push(`${alphabet.charAt(i)} + ${alphabet.charAt(j)}`);
  
  return pairs;
}
