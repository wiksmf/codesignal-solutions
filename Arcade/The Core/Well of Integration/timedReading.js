function timedReading(maxLength, text) {
  text = text.match(/\w+/g);
  
  return text ? text.filter(el => el.length <= maxLength).length : 0;
}
