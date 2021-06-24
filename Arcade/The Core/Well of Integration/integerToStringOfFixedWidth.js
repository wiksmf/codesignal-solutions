function integerToStringOfFixedWidth(number, width) {
  number = String(number);
  
  return number.length === width 
      ? number
      : number.length < width
      ? number.padStart(width, '0')
      : number.substring(number.length - width);
}
