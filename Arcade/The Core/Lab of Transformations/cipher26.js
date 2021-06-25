function cipher26(message) {
  let originalMessage = '';
  let nextLetter = '';
  let sum = 0;
      
  for (let i = 0; i < message.length; i++) {
      nextLetter = (message.charCodeAt(i) - 'a'.charCodeAt(0) + 26 - sum) % 26;
      originalMessage += String.fromCharCode(nextLetter + 'a'.charCodeAt(0));
      sum = (sum + nextLetter) % 26;
  }
  
  return originalMessage;
}
