function decipher(cipher) {
  let message = '';
  let letter = '';
  
  cipher = cipher.split('');
  
  for (let i = 0; i < cipher.length; i++) {
      letter += cipher[i];
      
      if (letter >= 97 && letter <= 123) {
          message += String.fromCharCode(letter);
          letter = '';
      }
  }
  
  return message;
}
